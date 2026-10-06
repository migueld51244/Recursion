# Recursion

A JavaScript project focused on recursion-based problem solving, covering two classic algorithms: the Fibonacci sequence and merge sort.

## Overview

This project demonstrates how recursion can be used to solve algorithmic problems in a clean and educational way. It includes:

- An iterative and recursive implementation of the Fibonacci sequence
- A recursive merge sort implementation that sorts arrays in ascending order
- Jest tests covering the main behaviors and edge cases

## Project structure

```text
Recursion/
├── src/
│   ├── fib.js
│   └── mergeSort.js
├── tests/
│   ├── fib.test.js
│   └── mergeSort.test.js
├── babel.config.js
├── package.json
├── README.md
└── .gitignore
```

## Algorithms included

### Fibonacci sequence

The Fibonacci functions generate a sequence of numbers starting from 0 and 1, where each following number is the sum of the two previous ones.

Examples:

```js
import { iteratorFib, recursiveFib } from './src/fib.js';

console.log(iteratorFib(7));
// [0, 1, 1, 2, 3, 5, 8]

console.log(recursiveFib(7));
// [0, 1, 1, 2, 3, 5, 8]
```

Validation rules:

- Negative numbers return: `"Negative value not allowed"`
- Non-integer or `NaN` values return: `"Unexpected type of data"`

### Merge sort

The merge sort implementation recursively splits an array into halves, sorts each half, and then merges the two sorted halves together.

Example:

```js
import { recursiveMergeSort } from './src/mergeSort.js';

console.log(recursiveMergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
// [0, 1, 1, 2, 3, 5, 8, 13]
```

## Installation

```bash
npm install
```

## Running tests

```bash
npm test
```

This project uses Jest to verify both Fibonacci and merge sort behaviors.

## Technologies

- JavaScript (ES modules)
- Jest
- Babel

## License

This project is licensed under the ISC license.
