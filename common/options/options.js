/* global browser, document */

/*
 * Languages available
 */

const languages = [
  {
    code: "ab",
    language: "Abkhazian"
  },
  {
    code: "aa",
    language: "Afar"
  },
  {
    code: "af",
    language: "Afrikaans"
  },
  {
    code: "ak",
    language: "Akan"
  },
  {
    code: "sq",
    language: "Albanian"
  },
  {
    code: "am",
    language: "Amharic"
  },
  {
    code: "ar",
    language: "Arabic"
  },
  {
    code: "an",
    language: "Aragonese"
  },
  {
    code: "hy",
    language: "Armenian"
  },
  {
    code: "as",
    language: "Assamese"
  },
  {
    code: "av",
    language: "Avar"
  },
  {
    code: "ay",
    language: "Aymara"
  },
  {
    code: "az",
    language: "Azerbaijani"
  },
  {
    code: "bm",
    language: "Bambara"
  },
  {
    code: "ba",
    language: "Bashkir"
  },
  {
    code: "eu",
    language: "Basque"
  },
  {
    code: "be",
    language: "Belarusian"
  },
  {
    code: "bn",
    language: "Bengali"
  },
  {
    code: "bh",
    language: "Bihari"
  },
  {
    code: "bi",
    language: "Bislama"
  },
  {
    code: "bs",
    language: "Bosnian"
  },
  {
    code: "br",
    language: "Breton"
  },
  {
    code: "bg",
    language: "Bulgarian"
  },
  {
    code: "my",
    language: "Burmese"
  },
  {
    code: "km",
    language: "Cambodian"
  },
  {
    code: "ca",
    language: "Catalan"
  },
  {
    code: "ch",
    language: "Chamorro"
  },
  {
    code: "ce",
    language: "Chechen"
  },
  {
    code: "ny",
    language: "Chichewa"
  },
  {
    code: "zh",
    language: "Chinese"
  },
  {
    code: "cv",
    language: "Chuvash"
  },
  {
    code: "kw",
    language: "Cornish"
  },
  {
    code: "co",
    language: "Corsican"
  },
  {
    code: "cr",
    language: "Cree"
  },
  {
    code: "hr",
    language: "Croatian"
  },
  {
    code: "cs",
    language: "Czech"
  },
  {
    code: "da",
    language: "Danish"
  },
  {
    code: "dv",
    language: "Divehi"
  },
  {
    code: "nl",
    language: "Dutch"
  },
  {
    code: "dz",
    language: "Dzongkha"
  },
  {
    code: "en",
    language: "English"
  },
  {
    code: "eo",
    language: "Esperanto"
  },
  {
    code: "et",
    language: "Estonian"
  },
  {
    code: "ee",
    language: "Ewe"
  },
  {
    code: "fo",
    language: "Faroese"
  },
  {
    code: "fj",
    language: "Fijian"
  },
  {
    code: "fi",
    language: "Finnish"
  },
  {
    code: "fr",
    language: "French"
  },
  {
    code: "gl",
    language: "Galician"
  },
  {
    code: "lg",
    language: "Ganda"
  },
  {
    code: "ka",
    language: "Georgian"
  },
  {
    code: "de",
    language: "German"
  },
  {
    code: "el",
    language: "Greek"
  },
  {
    code: "kl",
    language: "Greenlandic"
  },
  {
    code: "gn",
    language: "Guarani"
  },
  {
    code: "gu",
    language: "Gujarati"
  },
  {
    code: "ht",
    language: "Haitian"
  },
  {
    code: "ha",
    language: "Hausa"
  },
  {
    code: "he",
    language: "Hebrew"
  },
  {
    code: "hz",
    language: "Herero"
  },
  {
    code: "hi",
    language: "Hindi"
  },
  {
    code: "ho",
    language: "Hiri Motu"
  },
  {
    code: "hu",
    language: "Hungarian"
  },
  {
    code: "is",
    language: "Icelandic"
  },
  {
    code: "io",
    language: "Ido"
  },
  {
    code: "ig",
    language: "Igbo"
  },
  {
    code: "id",
    language: "Indonesian"
  },
  {
    code: "ia",
    language: "Interlingua"
  },
  {
    code: "ie",
    language: "Interlingue"
  },
  {
    code: "iu",
    language: "Inuktitut"
  },
  {
    code: "ik",
    language: "Inupiak"
  },
  {
    code: "ga",
    language: "Irish"
  },
  {
    code: "it",
    language: "Italian"
  },
  {
    code: "ja",
    language: "Japanese"
  },
  {
    code: "jv",
    language: "Javanese"
  },
  {
    code: "kn",
    language: "Kannada"
  },
  {
    code: "kr",
    language: "Kanuri"
  },
  {
    code: "ks",
    language: "Kashmiri"
  },
  {
    code: "kk",
    language: "Kazakh"
  },
  {
    code: "ki",
    language: "Kikuyu"
  },
  {
    code: "ky",
    language: "Kirghiz"
  },
  {
    code: "rn",
    language: "Kirundi"
  },
  {
    code: "kv",
    language: "Komi"
  },
  {
    code: "kg",
    language: "Kongo"
  },
  {
    code: "ko",
    language: "Korean"
  },
  {
    code: "kj",
    language: "Kuanyama"
  },
  {
    code: "ku",
    language: "Kurdish"
  },
  {
    code: "lo",
    language: "Laotian"
  },
  {
    code: "la",
    language: "Latin"
  },
  {
    code: "lv",
    language: "Latvian"
  },
  {
    code: "li",
    language: "Limburgian"
  },
  {
    code: "ln",
    language: "Lingala"
  },
  {
    code: "lt",
    language: "Lithuanian"
  },
  {
    code: "lb",
    language: "Luxembourgish"
  },
  {
    code: "mk",
    language: "Macedonian"
  },
  {
    code: "mg",
    language: "Malagasy"
  },
  {
    code: "ms",
    language: "Malay"
  },
  {
    code: "ml",
    language: "Malayalam"
  },
  {
    code: "mt",
    language: "Maltese"
  },
  {
    code: "gv",
    language: "Manx"
  },
  {
    code: "mi",
    language: "Maori"
  },
  {
    code: "mr",
    language: "Marathi"
  },
  {
    code: "mh",
    language: "Marshallese"
  },
  {
    code: "mo",
    language: "Moldovan"
  },
  {
    code: "mn",
    language: "Mongolian"
  },
  {
    code: "na",
    language: "Nauruan"
  },
  {
    code: "nv",
    language: "Navajo"
  },
  {
    code: "ng",
    language: "Ndonga"
  },
  {
    code: "ne",
    language: "Nepali"
  },
  {
    code: "nd",
    language: "North Ndebele"
  },
  {
    code: "se",
    language: "Northern Sami"
  },
  {
    code: "no",
    language: "Norwegian"
  },
  {
    code: "nn",
    language: "Norwegian Nynorsk"
  },
  {
    code: "oc",
    language: "Occitan"
  },
  {
    code: "oj",
    language: "Ojibwa"
  },
  {
    code: "cu",
    language: "Old Church Slavonic / Old Bulgarian"
  },
  {
    code: "or",
    language: "Oriya"
  },
  {
    code: "om",
    language: "Oromo"
  },
  {
    code: "os",
    language: "Ossetian / Ossetic"
  },
  {
    code: "pi",
    language: "Pali"
  },
  {
    code: "pa",
    language: "Panjabi / Punjabi"
  },
  {
    code: "ps",
    language: "Pashto"
  },
  {
    code: "fa",
    language: "Persian"
  },
  {
    code: "ff",
    language: "Peul"
  },
  {
    code: "pl",
    language: "Polish"
  },
  {
    code: "pt",
    language: "Portuguese"
  },
  {
    code: "qu",
    language: "Quechua"
  },
  {
    code: "rm",
    language: "Raeto Romance"
  },
  {
    code: "ro",
    language: "Romanian"
  },
  {
    code: "ru",
    language: "Russian"
  },
  {
    code: "rw",
    language: "Rwandi"
  },
  {
    code: "sm",
    language: "Samoan"
  },
  {
    code: "sg",
    language: "Sango"
  },
  {
    code: "sa",
    language: "Sanskrit"
  },
  {
    code: "sc",
    language: "Sardinian"
  },
  {
    code: "gd",
    language: "Scottish Gaelic"
  },
  {
    code: "sr",
    language: "Serbian"
  },
  {
    code: "sh",
    language: "Serbo-Croatian"
  },
  {
    code: "sn",
    language: "Shona"
  },
  {
    code: "ii",
    language: "Sichuan Yi"
  },
  {
    code: "sd",
    language: "Sindhi"
  },
  {
    code: "si",
    language: "Sinhalese"
  },
  {
    code: "sk",
    language: "Slovak"
  },
  {
    code: "sl",
    language: "Slovenian"
  },
  {
    code: "so",
    language: "Somalia"
  },
  {
    code: "nr",
    language: "South Ndebele"
  },
  {
    code: "st",
    language: "Southern Sotho"
  },
  {
    code: "es",
    language: "Spanish"
  },
  {
    code: "su",
    language: "Sundanese"
  },
  {
    code: "sw",
    language: "Swahili"
  },
  {
    code: "ss",
    language: "Swati"
  },
  {
    code: "sv",
    language: "Swedish"
  },
  {
    code: "tl",
    language: "Tagalog / Filipino"
  },
  {
    code: "ty",
    language: "Tahitian"
  },
  {
    code: "tg",
    language: "Tajik"
  },
  {
    code: "ta",
    language: "Tamil"
  },
  {
    code: "tt",
    language: "Tatar"
  },
  {
    code: "te",
    language: "Telugu"
  },
  {
    code: "th",
    language: "Thai"
  },
  {
    code: "bo",
    language: "Tibetan"
  },
  {
    code: "ti",
    language: "Tigrinya"
  },
  {
    code: "to",
    language: "Tonga"
  },
  {
    code: "ts",
    language: "Tsonga"
  },
  {
    code: "tn",
    language: "Tswana"
  },
  {
    code: "tr",
    language: "Turkish"
  },
  {
    code: "tk",
    language: "Turkmen"
  },
  {
    code: "tw",
    language: "Twi"
  },
  {
    code: "uk",
    language: "Ukrainian"
  },
  {
    code: "ur",
    language: "Urdu"
  },
  {
    code: "ug",
    language: "Uyghur"
  },
  {
    code: "uz",
    language: "Uzbek"
  },
  {
    code: "ve",
    language: "Venda"
  },
  {
    code: "vi",
    language: "Vietnamese"
  },
  {
    code: "vo",
    language: "Volapük"
  },
  {
    code: "wa",
    language: "Walloon"
  },
  {
    code: "cy",
    language: "Welsh"
  },
  {
    code: "fy",
    language: "West Frisian"
  },
  {
    code: "wo",
    language: "Wolof"
  },
  {
    code: "xh",
    language: "Xhosa"
  },
  {
    code: "yi",
    language: "Yiddish"
  },
  {
    code: "yo",
    language: "Yoruba"
  },
  {
    code: "za",
    language: "Zhuang"
  },
  {
    code: "zu",
    language: "Zulu"
  }
];

/*
 * Create dropdown menu to select primary language
 */
const menu = document.createElement('select');
menu.name = 'menu';
languages.forEach((lang) => {
  const option = document.createElement('option');
  option.value = lang.code;
  option.appendChild(document.createTextNode(lang.language));
  menu.appendChild(option);
});
const form = document.getElementById('languages');
form.appendChild(menu);

/*
 * Save selected language
 */
const save = function saveOptions() {
  let i = menu.selectedIndex;
  let language = {
    name: menu.options[i].text,
    code: menu.options[i].value,
    index: i,
  };
  chrome.storage.local.set({language});
  confirmation = document.getElementById('saved');
  confirmation.className = 'appear';
  setTimeout(function() {confirmation.className = 'disappear'}, 1000)
};

/*
 * Display selected language in menu, English by default
 */
const restore = function restoreOptions() {
  const selected = function(options) {
    if (options.language) {
      menu.selectedIndex = options.language.index;
    } else {
      menu.selectedIndex = 40;
    }
  };
  chrome.storage.local.get(['language'],
    selected);
};

/*
 * When a menu option is selected
 */
menu.addEventListener('change', save);

/*
 * When the document is loaded
 */
document.addEventListener('DOMContentLoaded', restore);
