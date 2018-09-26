
# lang-codes
[![package version](https://img.shields.io/npm/v/lang-codes.svg?style=flat-square)](https://npmjs.org/package/lang-codes)
[![package downloads](https://img.shields.io/npm/dm/lang-codes.svg?style=flat-square)](https://npmjs.org/package/lang-codes)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/lang-codes.svg?style=flat-square)](https://npmjs.org/package/lang-codes)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Easily searchable ISO 639-1/2/3 Language codes

## Table of Contents

- [About](#about)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## About

Easily searchable ISO 639-1/2/3 language codes with English and local names (under 6kB gzipped). [Data](src/data.js) extracted from [nodejs-langs](https://github.com/adlawson/nodejs-langs).

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install lang-codes
$ # OR
$ yarn add lang-codes
```

## Usage

```js
import find from 'lang-codes'

find('afr') // { 'name': 'Afrikaans', 'local': 'Afrikaans', '1': 'af', '2': 'afr', '2T': 'afr', '2B': 'afr', '3': 'afr' }
find(/af/) // [ { '1': 'aa', '2': 'aar', '3': 'aar', name: 'Afar', local: 'Afaraf', '2T': 'aar', '2B': 'aar' }, { '1': 'af', '2': 'afr', '3': 'afr', name: 'Afrikaans', local: 'Afrikaans', '2T': 'afr', '2B': 'afr' } ]
find('zul', { props: 'name' }) // Zulu

```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    