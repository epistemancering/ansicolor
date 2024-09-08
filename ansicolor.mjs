"use strict"

const ansiColors = { black: 0, blue: 4, cyan: 6, green: 2, magenta: 5, red: 1, white: 7, yellow: 3 }
/**@typedef {(string: string, color: keyof ansiColors, bright?: true) => string} ground*/

const ansiColor = (/**@type {string}*/ string, /**@type {string}*/ color, /**@type {true | undefined}*/ bright, /**@type {number}*/ ground) => {
    let ansiType = ground

    if (bright) {
        ansiType += 6
    }

    return `\x1B[${ansiType}${ansiColors[color]}m${string}\x1B[${ground}9m`
}

export const /**Set the background color. @type {ground}*/ back = (string, color, bright) => {
    return ansiColor(string, color, bright, 4)
}

export const /**Set the foreground color. @type {ground}*/ fore = (string, color, bright) => {
    return ansiColor(string, color, bright, 3)
}