# Contributing

## Principles

Contributions should be:

- reusable
- accessible
- performance-conscious
- progressively enhanced
- easy to remove or clean up
- documented with a real use case

## Workflow

1. branch from `main`
2. make one focused change
3. run `npm install`
4. run `npm run ci`
5. update documentation
6. open a pull request

## Component requirements

A new component should:

- expose a predictable `data-` attribute API
- return a cleanup function
- respect reduced motion
- avoid hiding essential content before JavaScript initializes
- document where it should and should not be used
