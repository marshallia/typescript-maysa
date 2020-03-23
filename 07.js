"use strict";
exports.__esModule = true;
var CountOccurness = /** @class */ (function () {
    function CountOccurness(words) {
        this.words = words;
    }
    CountOccurness.prototype.countOccure = function () {
        this.words.forEach(function (word) {
            var numberOfOccurrences = (sentences.match(new RegExp(word, 'gi')) || []).length;
            console.log(word + " - " + numberOfOccurrences);
        });
        return sentences;
    };
    return CountOccurness;
}());
exports.CountOccurness = CountOccurness;
var sentences = "Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali"
    + "Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib"
    + "Aku ingin terbang bebas Di angkasa Hei… baling baling bambu"
    + "La... la... la... Aku sayang sekali Doraemon"
    + "La... la... la... Aku sayang sekali";
var words = ["aku", "ingin", 'dapat'];
var countOccurness = new CountOccurness(words);
console.log(countOccurness.countOccure());
