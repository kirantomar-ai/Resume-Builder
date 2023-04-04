# time-number
[![npm version](https://img.shields.io/npm/v/time-number.svg?style=flat)](https://www.npmjs.com/package/time-number)
[![Build Status](https://img.shields.io/travis/yury-dymov/time-number/master.svg?style=flat)](https://travis-ci.org/yury-dymov/time-number)
[![Coverage Status](https://coveralls.io/repos/github/yury-dymov/time-number/badge.svg?branch=master)](https://coveralls.io/github/yury-dymov/time-number?branch=master)

Converts time representation from string to number or from number to string.

*Note:* It was extracted from [react-bootstrap-time-picker](https://github.com/yury-dymov/react-bootstrap-time-picker) and has very limited functionality.

# Installation
```
npm install time-number
```

# Functions

## timeFromInt(timeNumber: number, options: { validate: boolean, format: 12|24, leadingZero: boolean })
Converts number of seconds to the time string

| Option | Default Value | Description |
----------------------------------------
| validate | true | By default validates provided input. You may disable it to get a better performance if you don't expect wrong input |
| format | 24 | Define 12 or 24 hour format |
| leadingZero | true | Controls hour leading zero |


### Usage examples
```
import { timeFromInt } from 'time-number';

console.log(timeFromInt(64800));     // -> '18:00'
console.log(timeFromInt(64805));     // -> '18:00:05'
console.log(timeFromInt(64800, { format: 12 }));     // -> '06:00 PM'
console.log(timeFromInt(64805, { format: 12, leadingZero: false }));     // -> '6:00:05 PM'

```

## timeToInt(timeString: string, { validate: boolean })
`validate` is `true` by default


### Usage example
```
import { timeToInt } from 'time-number';

console.log(timeToInt('18'));        // -> 64800
console.log(timeToInt('18:00'));     // -> 64800
console.log(timeToInt('18:00:05'));  // -> 64805
console.log(timeToInt('6:00 PM'));  // -> 64800
console.log(timeToInt('6:00:05 AM'));  // -> 21605
```

# License
MIT (c) Yury Dymov
