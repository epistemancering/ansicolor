# ansicolor
This library provides a typed, readable syntax for coloring strings that works in both browser consoles and terminals. No dependencies, minifies to 0.2KB.
```javascript
import * as ansicolor from "./ansicolor.mjs"

console.log(ansicolor.fore("String", "magenta"))
```
logs
```javascript
String
```
whereas
```javascript
console.log("String")
```
logs merely
```
String
```
## installation
Download `ansicolor.mjs`.
## usage
`ansicolor` exports `back` and `fore`, functions that accept an arbitrary string, a pure color, and if the color should be brighter, `true`, and return the colored string. Background and foreground colors can be combined.
```javascript
console.log(ansicolor.back(` ${ansicolor.fore("highlighted ink", "blue", true)} `, "yellow"))
```