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
```