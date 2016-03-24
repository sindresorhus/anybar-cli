# anybar-cli [![Build Status](https://travis-ci.org/sindresorhus/anybar-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/anybar-cli)

> Control the [AnyBar app](https://github.com/tonsky/AnyBar)

[![](https://github.com/tonsky/AnyBar/blob/master/AnyBar/Resources/screenshot.png)](https://github.com/tonsky/AnyBar)


## Install

```
$ npm install --global anybar-cli
```


## Usage

```
$ anybar --help

  Usage
    $ anybar <status>

  Statuses
    white red orange yellow green cyan blue purple black question exclamation quit

  Options
    --port, -p    AnyBar.app port [Default: 1738]

  Example
    $ anybar purple
```

Also includes a binary to show whether a command exited successfully or with a failure.

```
$ anybar-exit ava test.js
```

If the AVA tests passes it will be green or red if they fail.


## Related

- [anybar](https://github.com/sindresorhus/anybar) - API for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
