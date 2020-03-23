"use strict";
exports.__esModule = true;
var Combine = /** @class */ (function () {
    function Combine(first, second, third) {
        this.first = first;
        this.second = second;
        this.third = third;
    }
    Combine.prototype.combineArray = function () {
        var x = this.first.join(" ");
        var y = this.second.join(" ");
        var z = this.third.join(" ");
        return x + " " + y + " " + z;
    };
    return Combine;
}());
exports.Combine = Combine;
var first = ['Behind', 'every', 'great', 'man'];
var second = ['is', 'a', 'woman'];
var third = ['rolling', 'her', 'eyes'];
var x = new Combine(first, second, third);
console.log(x.combineArray());
