# Prettytime [![Build Status](https://travis-ci.org/scurker/prettytime.svg?branch=master)](https://travis-ci.org/scurker/prettytime) [![npm](https://img.shields.io/npm/v/prettytime.svg)](https://www.npmjs.com/package/prettytime)

Prettytime is a micro library for converting millis (e.g. `prettytime(2342)`) into a human friendly format (e.g. `2.3 seconds`).

# Install

```bash
$ npm install prettytime
```

# Usage

```js
var prettytime = require('prettytime');

var now = Date.now();

...

prettytime(now - Date.now());
// => 2.3 seconds
```

## Examples

```js
prettytime(100);     // => 100 ms
prettytime(1000);    // => 1 second
prettytime(5000);    // => 5 seconds
prettytime(60000);   // => 1 minute
prettytime(3600000); // => 1 hour
```

# Options

### options.decimals

Allows you to set the decimal limit of the returned values, always rounded to the nearest significant decimal

#### Examples

```js
prettytime(1236, { decimals: 1 }); // => 1.2 seconds
prettytime(1236, { decimals: 2 }); // => 1.24 seconds
```

### options.short

Converts the time type to a short string.

| Full   | Short |
|--------|-------|
| year   | y     |
| month  | mo    |
| day    | d     |
| hour   | h     |
| minute | m     |
| second | s     |
| ms     | ms    |

#### Examples

```js
prettytime(100, { short: true});     // => 100 ms
prettytime(1000, { short: true});    // => 1 s
prettytime(60000, { short: true});   // => 1 m
prettytime(3600000, { short: true}); // => 1 h
```

# License

MIT © [Jason Wilson](http://scurker.com)