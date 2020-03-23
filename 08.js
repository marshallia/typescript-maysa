"use strict";
exports.__esModule = true;
var CountOccurness = /** @class */ (function () {
    function CountOccurness() {
    }
    CountOccurness.prototype.lower = function (words) {
        return words.toLowerCase();
    };
    CountOccurness.prototype.upper = function (words) {
        return words.toUpperCase();
    };
    CountOccurness.prototype.capitalize = function (words) {
        return words.replace(/\w\S*/g, function (x) { return x.charAt(0).toUpperCase() + x.substr(1).toLowerCase(); });
    };
    CountOccurness.prototype.reverse = function (words) {
        return words.split("").reverse().join("");
    };
    CountOccurness.prototype.contains = function (words, subs) {
        return words.match(subs) ? true : false;
    };
    // random(n:number){
    //     let arr="";
    //     for (let i = n;i>n;i--){
    //         arr+=
    //     }
    // }
    CountOccurness.prototype.slug = function (words, slug) {
        slug = (typeof slug !== 'undefined') ? slug : "-";
        return words.split(" ").join(slug);
    };
    CountOccurness.prototype.countChar = function (words) {
        return words.length;
    };
    CountOccurness.prototype.countWord = function (words) {
        return words.split(" ").length;
    };
    CountOccurness.prototype.trimChar = function (x, words) {
        return words.substring(0, x);
    };
    CountOccurness.prototype.trimWords = function (words, x) {
        var tmp = words.split(" ");
        return tmp.slice(0, x).join(" ");
    };
    return CountOccurness;
}());
exports.CountOccurness = CountOccurness;
var y = new CountOccurness();
console.log(y.lower('MAKAN'));
console.log(y.upper('malam'));
console.log(y.capitalize('saya ingin makan'));
console.log(y.reverse('kasur'));
console.log(y.contains('Saya ingin makan sate', 'makan'));
console.log(y.slug('JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?', '_'));
console.log(y.slug('JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?'));
console.log(y.countChar('lorem ipsum'));
console.log(y.countWord('lorem ipsum'));
var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
console.log(y.trimChar(20, text));
console.log(y.trimWords(text, 3));
