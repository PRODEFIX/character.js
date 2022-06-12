const characters = require("./special-characters.json");

module.exports = {
    Normalize: (text, replaceAllChar) => {
        let final = "";
        for (const char of [...text]) final += characters[char] ?? char;

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
};