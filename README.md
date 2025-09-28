# Welcome to React-Zlib

The `zlib` module provides compression functionality implemented using Gzip and Deflate/Inflate. It is the part of nodejs core module written in c++ . So the problem  is we can't use this module outside of nodejs. so now this package help you to use deflate and inflate zlib functionality in real **Javascript**, **typescript** and  **React.js**

## Installation

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fauth0%2Fjwt-decode.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fauth0%2Fjwt-decode?ref=badge_shield)

Install with NPM or Yarn.

Run `npm install react-zlib` or `yarn add react-zlib` to install the library.

## Usage

```javascript
import { deflate, inflate } from 'react-zlib';

const token = "eyJ0eXAiO.../// any token";
const deflated = deflate(token);

console.log(deflated);

const inflated = inflate(token);

console.log(inflated);

```

<!-- Security scan triggered at 2025-09-01 20:17:20 -->

<!-- Security scan triggered at 2025-09-09 05:53:39 -->

<!-- Security scan triggered at 2025-09-28 16:03:13 -->