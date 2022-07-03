const figlet = (require("util")).promisify(require("figlet"));
const specialChars = require("./special-characters.json");

module.exports = {
    /**
     * Normalize a text
     * @param {string} text - Some text
     * @param {boolean} [replaceAllChar=false] - If you want to replace all unsupported characters
     * @returns {string}
     */
    normalize: (text, replaceAllChar) => {
        if (!text || typeof text != "string" || !text.length) throw new Error("Please provide a valid string");
        if (typeof replaceAllChar != "boolean") throw new Error("Please provide a valid boolean");

        let final = "";
        for (const char of [...text]) final += specialChars[char] ?? char;

        return replaceAllChar ? final.replace(/[^a-zA-Z0-9 ]/g, "") : final;
    },
    /**
    * Put a text in emojis
    * @param {string} text - Some text
    * @param {boolean} [replaceAllChar=false] - If you want to replace all unsupported characters
    * @returns {string}
    */
    emojify: (text, replaceAllChar) => {
        if (!text || typeof text != "string" || !text.length) throw new Error("Please provide a valid string");
        if (typeof replaceAllChar != "boolean") throw new Error("Please provide a valid boolean");

        const specialCodes = {
            0: "0️⃣", 1: "1️⃣", 2: "2️⃣", 3: "3️⃣", 4: "4️⃣", 5: "5️⃣", 6: "6️⃣", 7: "7️⃣", 8: "8️⃣", 9: "9️⃣",
            "#": "#️⃣", "*": "*️⃣", "?": "❔", "!": "❕", "+": "➕", "÷": "➗", "-": "➖", "×": "✖️", "<": "◀️", ">": "▶️", " ": "   ",
            "$": "💵", "€": "💶", "¥": "💴", "£": "💷"
        };

        const final = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split("")
            .map(a => /[a-z]/g.test(a) ? `:regional_indicator_${a}:` : (specialCodes[a] || a)).join("");

        return replaceAllChar ? final.replace(/[^a-zA-Z0-9 ]/g, "") : final;
    },
    /**
     * Put a text in small characters
    * @param {string} text - Some text
    * @param {boolean} [replaceAllChar=false] - If you want to replace all unsupported characters
    * @returns {string}
    */
    tinyText: (text, replaceAllChar) => {
        if (!text || typeof text != "string" || !text.length) throw new Error("Please provide a valid string");
        if (typeof replaceAllChar != "boolean") throw new Error("Please provide a valid boolean");

        const tinyChars = {
            a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ᶦ", j: "ʲ", k: "ᵏ", l: "ˡ", m: "ᵐ",
            n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "ᑫ", r: "ʳ", s: "ˢ", t: "ᵗ", u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ",
            0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹", ".": "ᚐ", " ": " "
        };

        return text.toLowerCase().split("").map(a => tinyChars[a] ? tinyChars[a] : replaceAllChar ? "" : a).join("");
    },
    /**
    * Reverse characters and the text
    * @param {string} text - Some text
    * @param {boolean} [reverseAll=false] - If you want to reverse the text
    * @param {boolean} [replaceAllChar=false] - If you want to replace all unsupported characters
    * @returns {string}
    */
    reverse: (text, reverseAll, replaceAllChar) => {
        if (!text || typeof text != "string" || !text.length) throw new Error("Please provide a valid string");
        if (typeof reverseAll != "boolean") throw new Error("Please provide a valid boolean");
        if (typeof replaceAllChar != "boolean") throw new Error("Please provide a valid boolean");

        const chars = {
            a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ⅎ", g: "ƃ", h: "ɥ", i: "ᴉ", j: "ɾ", k: "ʞ", l: "ʅ", m: "ɯ",
            n: "u", o: "o", p: "d", q: "b", r: "ɹ", s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z",
            0: "0", 1: "⇂", 2: "↊", 3: "↋", 4: "ߤ", 5: "5", 6: "9", 7: "𝘓", 8: 8, 9: 6, "?": "¿", "!": "¡", " ": " "
        };

        const final = text.normalize("NFD").toLowerCase().split("");

        return (reverseAll ? final.reverse() : final).map(a => chars[a] ? chars[a] : replaceAllChar ? "" : a).join("");
    },
    /**
    * Put text in ASCII
    * @param {string} text - Some text
    * @param {string} [noText=Error] - What return if there is an error for the ascii function 
    * @returns {string}
    */
    ascii: (text, noText) => {
        if (!text || typeof text != "string" || !text.length) throw new Error("Please provide a valid string");
        if (noText && typeof noText != "string" || !noText.length) throw new Error("Please provide a valid string");

        return figlet(text) || figlet(noText || "Error");
    },
    /**
    * Capitalize all first letters of words
    * @param {string} text - Some text
    * @returns {string}
    */
    startUpper: text => {
        if (!text || typeof text != "string" || !text.length) throw new Error("Please provide a valid string");

        return text.split(" ").map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(" ");
    },
    /**
    * Reverse the case of characters in text
    * @param {string} text - Some text
    * @returns {string}
    */
    toggleCase: text => {
        if (!text || typeof text != "string" || !text.length) throw new Error("Please provide a valid string");

        return text.split("").map(x => x.toLowerCase() == x ? x.toUpperCase() : x.toLowerCase()).join("")
    },
    /**
    * Know the number of words in a text
    * @param {string} text - Some text
    * @returns {number} The number of words in the text
    */
    wordCount: text => {
        if (!text || typeof text != "string" || !text.length) throw new Error("Please provide a valid string");

        return text.split(" ").length;
    },
    /**
    * Know the number of sentences in a text
    * @param {string} text - Some text
    * @returns {number} The number of sentences in the text
    */
    sentenceCount: text => {
        if (!text || typeof text != "string" || !text.length) throw new Error("Please provide a valid string");

        return text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|").length;
    },
    /**
    * Know the number of emojis in a text
    * @param {string} text - Some text
    * @returns {number} The number of emojis in the text
    */
    emoCount: text => {
        if (!text || typeof text != "string" || !text.length) throw new Error("Please provide a valid string");

        return text.match(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g)?.length;
    },
};