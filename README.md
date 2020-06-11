# How to run

Clone this repo and run with :

```
npm run start 
```

# Why this repo ?

The goal of this repository is to demonstrate an implementation of a basic todo app with an emphasis on :
- Solid and readable Redux architecture with [immer.js](https://immerjs.github.io/immer/docs/introduction)
- Simple but robust TypeScript, as used in real-life companies (entities + store typing)

The architecture may seem overkill for the feature scope of a basic todo app, but it shows how one can scale complex front end applications with 30+ complex entities, in a team of developers with different levels of expertise.

The way TypeScript is used here also demonstrates what a good balance could be , between the need to have a good overall typing and the most commonly used redux pattern, so everybody feels at home, with beginner friendly TypeScript.