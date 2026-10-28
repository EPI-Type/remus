![Remus Variable](/docs/assets/image/Cover-Remus-Variable.png)


# Remus Variable

Remus Variable is a variable sans-serif typeface derived from [TeX Gyre Heros](https://www.gust.org.pl/projects/e-foundry/tex-gyre/heros), which is itself based on URW Nimbus Sans L — the free software equivalent of Helvetica. It combines the styles of TeX Gyre Heros (regular, bold, condensed, italic) into a single variable font with three axes: **weight**, **width** and **italic**.

The name Remus references both TeX Gyre Heros and its ancestor [Nimbus Sans L](https://en.wikipedia.org/wiki/Nimbus_Sans#Nimbus_Sans_L), while distinguishing this project from the original.

**Status: preview (version 0.200).** The design space is deliberately small, see the axes below.


## Download

| Format | Use |
|--------|-----|
| [RemusVariableVF.woff2](/fonts/RemusVariableVF.woff2) | Web (recommended) |
| [RemusVariableVF.woff](/fonts/RemusVariableVF.woff) | Web (legacy fallback) |
| [RemusVariableVF.ttf](/fonts/RemusVariableVF.ttf) | Desktop / print |


## Variable axes

| Axis | Tag | Range | CSS |
|------|-----|-------|-----|
| Weight | `wght` | 400–700 | `font-weight` |
| Width | `wdth` | 50–100 | `font-stretch` (50%–100%) |
| Italic | `ital` | 0–1 (0 = upright, 1 = italic) | `font-variation-settings: 'ital' 1` |

There are eight named instances: Regular, Italic, Bold and Bold Italic, each in a normal and a condensed (width 50) version. Weights below 400 or above 700 are not available.


## Usage

```css
@font-face {
    font-family: 'Remus Variable';
    src: url('RemusVariableVF.woff2') format('woff2'),
         url('RemusVariableVF.woff')  format('woff');
    font-weight: 400 700;
    font-stretch: 50% 100%;
    font-style: normal;
}

body {
    font-family: 'Remus Variable', Helvetica, Arial, sans-serif;
    font-weight: 400;
}

.condensed { font-stretch: 60%; }
.italic    { font-variation-settings: 'ital' 1; }
```

Switch to italics through the `ital` axis as shown. The `@font-face` rule declares `font-style: normal` on purpose: setting `font-style: italic` on top of it can make browsers synthesise an additional slant.


## How the font is made

The source is a [Glyphs 3](https://glyphsapp.com) file at `sources/Remus-Variable.glyphs`. The released `fonts/RemusVariableVF.ttf` is exported from Glyphs (variable font export). WOFF and WOFF2 are derived from that TTF:

```sh
pip install -r requirements.txt
make webfonts      # fonts/*.woff, fonts/*.woff2, copies into docs/assets/fonts
make check         # Fontbakery report in build/
```

The fontmake build (`make fontmake-test`, writes to `build/`) is for comparison only. It does not reproduce the released font: its width axis spans 75–100 instead of 50–100 and the STAT axis values are missing. Use the Glyphs export for releases.

**Demo site CSS** — requires [Sass](https://sass-lang.com):

```sh
npm install
npm run build
```

Or use `npm run watch:css` during development.


## License

Remus Variable is released under the [GUST Font License](GUST-FONT-LICENSE.txt), version 1.0, which is an instance of the [LaTeX Project Public License](https://www.latex-project.org/lppl/). You may use, study, modify and redistribute the font, including in commercial work.

Clause 1 of the license asks that derived works change the font names and file names listed in the manifest (this is a request, not a legal requirement). The LPPL itself sets further conditions for modified versions, so please read the license before redistributing a modified font.

This project is not under the SIL Open Font License, because it is derived from a work under the GUST Font License.


## Contributing

Bug reports and glyph requests are welcome, see the [issue templates](https://github.com/EPI-Type/remus/issues/new/choose) and the [contribution guide](https://github.com/EPI-Type/.github/blob/main/CONTRIBUTING.md).


## Credits

**Designer:** Jens Schnitzler

**Based on:** TeX Gyre Heros by [GUST e-foundry](https://www.gust.org.pl/projects/e-foundry/tex-gyre/heros) (B. Jackowski and J.M. Nowacki), which is based on URW Nimbus Sans L released by URW++ Design and Development Inc. The Vietnamese glyphs were added by Han The Thanh.

Part of [EPI Type](https://epitype.xyz/).
