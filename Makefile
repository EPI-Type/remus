.PHONY: all webfonts css check fontmake-test clean

# The released font (fonts/RemusVariableVF.ttf) is exported from Glyphs 3, not built
# with fontmake. The fontmake build below gives a different result (width axis 75-100,
# no STAT axis values), so it only writes to build/ and never overwrites fonts/.
#
# Requires: pip install -r requirements.txt     (web fonts, QA, fontmake test build)
#           npm install                         (demo site CSS)

TTF         = fonts/RemusVariableVF.ttf
GLYPHS      = sources/Remus-Variable.glyphs
DOCS_FONTS  = docs/assets/fonts

all: webfonts css

# Add gasp/prep to the unhinted TTF, derive WOFF/WOFF2 from it and copy all formats to the demo site.
webfonts: $(TTF)
	python3 scripts/fix_nonhinting.py $(TTF)
	python3 scripts/webfonts.py $(TTF)
	cp fonts/RemusVariableVF.ttf fonts/RemusVariableVF.woff fonts/RemusVariableVF.woff2 $(DOCS_FONTS)/

css:
	sass docs/assets/scss/main.scss docs/assets/css/main.css --style=compressed

# Quality checks on the released TTF (see requirements.txt).
check: $(TTF)
	mkdir -p build
	fontbakery check-universal --html build/fontbakery.html $(TTF)

# Test build from source with fontmake, for comparison only.
fontmake-test: $(GLYPHS)
	mkdir -p build
	fontmake -g $(GLYPHS) -o variable --output-path build/RemusVariableVF.fontmake.ttf

clean:
	rm -rf build
	rm -f docs/assets/css/main.css docs/assets/css/main.css.map
