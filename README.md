# Rebasing Workflow

You've decided to level up your Git skills and have heard that rebasing is where it's at. In this session we'll talk about: WHY rebasing can make it easier to untangle your project's history; WHEN you should use rebase; WHAT rebasing actually does to your repository; and HOW it actually looks when things go right (and how to recover when things go wrong).

Time: 45 minutes

## Presented At

- [OSCON, Amsterdam, 2015](http://oscon.com)

Earlier versions of this presentation were delivered from a keynote deck at the following events:

- ConFoo, Montreal, 2015
- OSCON, Portland, 2015

There may be outstanding issues from the conversion to reveal.js. See the [TODO](TODO.md) list.

## Viewing the Presentation

Online:

- [emmajane.github.io/rebasing-workflow](http://emmajane.github.io/rebasing-workflow) is often in sync with this repository

Locally:

- Ensure node.js and grunt are installed.
- Install dependencies: `npm install`
- Run the server: `grunt serve`
- Open http://localhost:8000 to view the presentation

If style changes are made to the SCSS file, you will need to re-create the theme files.

- Run: `grunt css-themes`

If you will not have an internet connection for your presentation, make sure the Google Font Open Sans Condensed is installed locally. For your convenience, it is included in the folder `assets/fonts/open-sans` and is licensed separately.

## Branches

- `content` - content files, and style sheets without the presentation software
- `upstream_reveal` - the latest version of reveal.js that's being used for this presentation
- `presentation` - combines the branches `content` and `upstream_reveal`; used for local testing
- `gh-pages` - typically a copy of the branch `presentation`; used for deployments

## License

Content (slides text, diagrams, and CSS theme for the slides):

- Copyright (C) 2015 Emma Jane Hogbin Westby
- [Creative Commons 3.0](http://creativecommons.org/licenses/by/3.0/), CC-BY

Slide software (reveal.js):

- Copyright (C) 2014 Hakim El Hattab, http://hakim.se
- MIT license

Fonts (Open Sans family):

- Copyright (C) Google
- Apache License
