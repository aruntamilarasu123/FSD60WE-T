  const json = {
    "name": {
      "common": "South Georgia",
      "official": "South Georgia and the South Sandwich Islands",
      "nativeName": {
        "eng": {
          "official": "South Georgia and the South Sandwich Islands",
          "common": "South Georgia"
        }
      }
    },
    "tld": [
      ".gs"
    ],
    "cca2": "GS",
    "ccn3": "239",
    "cca3": "SGS",
    "independent": false,
    "status": "officially-assigned",
    "unMember": false,
    "currencies": {
      "SHP": {
        "name": "Saint Helena pound",
        "symbol": "£"
      }
    }
}
// 1. JSON to string
const stringify = JSON.stringify(json);
console.log(stringify);

// 2. JSON sting to JSON Object
const parce = JSON.parse(stringify);
console.log(parce);