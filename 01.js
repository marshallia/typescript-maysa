"use strict";
exports.__esModule = true;
var Palindrome = /** @class */ (function () {
    function Palindrome(x) {
        this.temp = true;
        this.x = x;
    }
    Palindrome.prototype.checkIsPalindrome = function () {
        var temp = 0;
        this.x = this.x.replace(/[^0-9a-z]/gi, '').toLocaleLowerCase();
        var y = this.x.split("").reverse().join("");
        console.log(this.x);
        console.log(y);
        do {
            if (this.x.charAt(temp) != y.charAt(temp)) {
                //  console.log(this.x.charAt(temp));
                //console.log(y.charAt(temp));
                return console.log("Not Palindrome");
                break;
            }
            //console.log(this.x.charAt(temp));
            //console.log(y.charAt(temp));
            temp++;
            return console.log("Palindrome");
        } while (temp > this.x.length);
    };
    return Palindrome;
}());
exports.Palindrome = Palindrome;
var palind1 = new Palindrome("ibu ratna antar ubi");
var palind2 = new Palindrome("kasur ini rusak");
var palind3 = new Palindrome("A nut for a jar of tuna.");
var palind4 = new Palindrome("Borrow or rob?");
var palind5 = new Palindrome("Was it a car or a cat I saw?");
console.log(palind1.checkIsPalindrome());
console.log(palind2.checkIsPalindrome());
console.log(palind3.checkIsPalindrome());
console.log(palind4.checkIsPalindrome());
console.log(palind5.checkIsPalindrome());
