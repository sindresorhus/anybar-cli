# anybar-cli

> Control the [AnyBar app](https://github.com/tonsky/AnyBar)

[![](https://cloud.githubusercontent.com/assets/170270/26110935/ea2a0220-3a7d-11e7-9443-d55f5260e3fb.png)](https://github.com/tonsky/AnyBar)

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
    --port, -p  AnyBar.app port [Default: 1738]

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
