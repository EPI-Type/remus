#!/usr/bin/env python3
"""Make an unhinted TTF render consistently: add a 'gasp' table and a 'prep' program
that switches on smart dropout control (the same fix as `gftools fix-nonhinting`).

Idempotent. Usage: python3 scripts/fix_nonhinting.py fonts/RemusVariableVF.ttf
"""
import sys

from fontTools.ttLib import TTFont, newTable
from fontTools.ttLib.tables import ttProgram

# PUSHW[] 511 SCANCTRL[] PUSHB[] 4 SCANTYPE[]
PREP_BYTECODE = bytes([0xB8, 0x01, 0xFF, 0x85, 0xB0, 0x04, 0x8D])


def fix(path):
    font = TTFont(path)
    if "fpgm" in font or "cvt " in font:
        print(f"{path}: font has hinting tables, leaving it alone")
        return

    gasp = newTable("gasp")
    gasp.version = 1
    gasp.gaspRange = {0xFFFF: 0x000F}
    font["gasp"] = gasp

    prep = newTable("prep")
    prep.program = ttProgram.Program()
    prep.program.fromBytecode(PREP_BYTECODE)
    font["prep"] = prep

    maxp = font["maxp"]
    maxp.maxStackElements = max(maxp.maxStackElements, 2)

    font.save(path)
    print(f"{path}: gasp and prep (smart dropout) set")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    for p in sys.argv[1:]:
        fix(p)
