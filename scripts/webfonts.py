#!/usr/bin/env python3
"""Create WOFF and WOFF2 files from a TTF (needs: pip install fonttools brotli).

Usage: python3 scripts/webfonts.py fonts/RemusVariableVF.ttf [more.ttf ...]
The web fonts are written next to the input file.
"""
import sys
from pathlib import Path

from fontTools.ttLib import TTFont


def main(paths):
    if not paths:
        sys.exit(__doc__)
    for path in map(Path, paths):
        for flavor in ("woff", "woff2"):
            font = TTFont(path)
            font.flavor = flavor
            out = path.with_suffix("." + flavor)
            font.save(out)
            print(f"wrote {out}")


if __name__ == "__main__":
    main(sys.argv[1:])
