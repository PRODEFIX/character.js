const figlet = (require("util")).promisify(require("figlet"));
const specialChars = require("./special-characters.json");

module.exports = {
    normalize: (text, replaceAllChar) => {
        if (!text || typeof text != "string" || !text.length) throw new Error("Please provide a valid string");
        if (replaceAllChar && typeof replaceAllChar != "boolean") throw new Error("Please provide a valid boolean");

        let final = "";
        for (const char of [...text]) final += specialChars[char] ?? char;

        return replaceAllChar ? final.replace(/[^a-zA-Z0-9 ]/g, "") : final;
    },
    emojify: (text, replaceAllChar) => {
        if (!text || typeof text != "string" || !text.length) throw new Error("Please provide a valid string");
        if (replaceAllChar && typeof replaceAllChar != "boolean") throw new Error("Please provide a valid boolean");

        const specialCodes = {
            0: "0️⃣", 1: "1️⃣", 2: "2️⃣", 3: "3️⃣", 4: "4️⃣", 5: "5️⃣", 6: "6️⃣", 7: "7️⃣", 8: "8️⃣", 9: "9️⃣",
            "#": "#️⃣", "*": "*️⃣", "?": "❔", "!": "❕", "+": "➕", "÷": "➗", "-": "➖", "×": "✖️", "<": "◀️", ">": "▶️", " ": "   ",
            "$": "💵", "€": "💶", "¥": "💴", "£": "💷"
        };

        const final = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split("")
            .map(a => /[a-z]/g.test(a) ? `:regional_indicator_${a}:` : (specialCodes[a] || a)).join("");

        return replaceAllChar ? final.replace(/[^a-zA-Z0-9 ]/g, "") : final;
    },
    reverse: (text, reverseAll, replaceAllChar) => {
        if (!text || typeof text != "string" || !text.length) throw new Error("Please provide a valid string");
        if (reverseAll && typeof reverseAll != "boolean") throw new Error("Please provide a valid boolean");

        const chars = {
            a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ⅎ", g: "ƃ", h: "ɥ", i: "ᴉ", j: "ɾ", k: "ʞ", l: "ʅ", m: "ɯ",
            n: "u", o: "o", p: "d", q: "b", r: "ɹ", s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z",
            0: "0", 1: "⇂", 2: "↊", 3: "↋", 4: "ߤ", 5: "5", 6: "9", 7: "𝘓", 8: 8, 9: 6, "?": "¿", "!": "¡"
        };

        const final = text.normalize("NFD").toLowerCase().split("");

        return (reverseAll ? final.reverse() : final).map(a => chars[a] ? chars[a] : replaceAllChar ? "" : a).join("");
    },
    ascii: (text, noText) => {
        if (!text || typeof text != "string" || !text.length) throw new Error("Please provide a valid string");
        if (noText && typeof text != "string") throw new Error("Please provide a valid string");

        return figlet(text) || figlet(noText || "Error");
    },
    startUpper: text => {
        return text.split(" ").map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(" ");
    },
    toggleCase: text => {
        return text.split("").map(x => x.toLowerCase() == x ? x.toUpperCase() : x.toLowerCase()).join("")
    },
    wordCount: text => {
        return text.split(" ").length;
    },
    sentenceCount: text => {
        return text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|").length;
    },
    emoCount: text => {
        return text.match(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g)?.length;
    },
};