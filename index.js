const specialChars = require("./special-characters.json");

module.exports = {
    Normalize: (text, replaceAllChar) => {
        let final = "";
        for (const char of [...text]) final += specialChars[char] ?? char;

        return replaceAllChar ? final.replace(/[^a-zA-Z0-9 ]/g, "") : final;
    },
    Emojify: (text, replaceAllChar) => {
        const specialCodes = {
            0: "0️⃣", 1: "1️⃣", 2: "2️⃣", 3: "3️⃣", 4: "4️⃣", 5: "5️⃣", 6: "6️⃣", 7: "7️⃣", 8: "8️⃣", 9: "9️⃣",
            "#": "#️⃣", "*": "*️⃣", "?": "❔", "!": "❕", "+": "➕", "÷": "➗", "-": "➖", "×": "✖️", "<": "◀️", ">": "▶️", " ": "   ",
            "$": "💵", "€": "💶", "¥": "💴", "£": "💷"
        };

        const final = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split("")
            .map(a => /[a-z]/g.test(a) ? `:regional_indicator_${a}:` : (specialCodes[a] || a)).join("");

        return replaceAllChar ? final.replace(/[^a-zA-Z0-9 ]/g, "") : final;
    },
    Reverse: (text, reverseAll) => {
        const chars = {
            a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ⅎ", g: "ƃ", h: "ɥ", i: "ᴉ", j: "ɾ", k: "ʞ", l: "ʅ", m: "ɯ",
            n: "u", o: "o", p: "d", q: "b", r: "ɹ", s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z",
            0: "0", 1: "⇂", 2: "↊", 3: "↋", 4: "ߤ", 5: "5", 6: "9", 7: "𝘓", 8: 8, 9: 6, "?": "¿", "!": "¡"
        };

        const final = text.normalize("NFD").toLowerCase().split("");

        return (reverseAll ? final.reverse() : final).map(a => chars[a] || a).join("");
    },
};