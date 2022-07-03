# character.js
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

character.ascii("Ascii", "NoText"); // "Ascii" or "NoText" in ascii

/*   _             _ _
    / \   ___  ___(_|_)
   / _ \ / __|/ __| | |
  / ___ \\__ \ (__| | |
 /_/   \_\___/\___|_|_|
*/

character.startUpper("A text of test"); // A Text Of Test
character.toggleCase("A TEXT of test"); // a text OF TEST
character.wordCount("A text of test"); // 4
character.sentenceCount("A text of test. A text of test"); // 2
character.emoCount("A text of test 😀"); // 1
```