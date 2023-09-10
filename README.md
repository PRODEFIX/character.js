# Character.JS
## Installation
```console
$ npm install character.js
```

## Usage
```js
const character = require("character.js");

character.normalize("🄽𝙊𝓡Ⓜ𝘼ℓⅈ𝓩E 🆒 😄"); // "NORMALIZE COOL 😄"
character.normalize("🄽𝙊𝓡Ⓜ𝘼ℓⅈ𝓩E 🆒 😄", true); // "NORMALIZE COOL"

character.emojify("Emojify'"); // "🇪🇲🇴🇯🇮🇫🇾'"
character.emojify("Emojify'", true); // "🇪🇲🇴🇯🇮🇫🇾"

character.tinyText("Tiny text'"); // "ᵗᶦⁿʸ ᵗᵉˣᵗ'"
character.tinyText("Tiny text'", true); // "ᵗᶦⁿʸ ᵗᵉˣᵗ"

character.reverse("Reverse'"); // "ɹǝʌǝɹsǝ'"
character.reverse("Reverse'", true); // "'ǝsɹǝʌǝɹ"
character.reverse("Reverse'", false, true); // "ɹǝʌǝɹsǝ"

character.ascii("Ascii", "Error"); // "Ascii" or, if there is an error "Error" in ascii

/*   _             _ _
    / \   ___  ___(_|_)
   / _ \ / __|/ __| | |
  / ___ \\__ \ (__| | |
 /_/   \_\___/\___|_|_|
*/

character.startUpper("start upper"); // Start Upper
character.toggleCase("toggle CASE"); // TOGGLE case
character.wordCount("Word count"); // 2
character.sentenceCount("Sentence. Sentence"); // 2
character.emojiCount("Emoji Count 🙂🙃"); // 2
```
