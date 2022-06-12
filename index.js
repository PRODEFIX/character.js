const characters = require("./special-characters.json");

/**
 * @param {string} text
 * @param {boolean} replaceAllChar
 * @returns {string}
 * 
 * @example Normalize("🄽𝙊𝓡Ⓜ𝘼ℓⅈ𝓩E 🆒 😄"); // "NORMALIZE COOL 😄"
 * @example Normalize("🄽𝙊𝓡Ⓜ𝘼ℓⅈ𝓩E 🆒 😄", true); // "NORMALIZE COOL"
 */

module.exports = (text, replaceAllChar) => {
    let final = "";
    for (const char of [...text]) final += characters[char] ?? char;

    return replaceAllChar ? final.replace(/[^a-zA-Z0-9 ]/g, "") : final;
};