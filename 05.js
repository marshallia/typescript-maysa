var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var GroupNumber = /** @class */ (function () {
    function GroupNumber(x) {
        this.x = x;
    }
    GroupNumber.prototype.groupEven = function () {
        var even = [];
        this.x.forEach(function (i) {
            if (i % 2 === 0) {
                even.push(i);
            }
        });
        return even;
    };
    GroupNumber.prototype.groupOdd = function () {
        var odd = [];
        this.x.forEach(function (i) {
            if (i % 2 !== 0) {
                odd.push(i);
            }
        });
        return odd;
    };
    GroupNumber.prototype.groupMultiple5 = function () {
        var multiplies5 = [];
        this.x.forEach(function (i) {
            if (i % 5 === 0) {
                multiplies5.push(i);
            }
        });
        return multiplies5;
    };
    GroupNumber.prototype.groupPrime = function () {
        var prime = [];
        var isprime = true;
        var i = 0;
        this.x.forEach(function (n) {
            for (i = 2; i <= n - 1; i++) {
                if (n % i == 0) {
                    isprime = false;
                    break;
                }
            }
            ;
            if (isprime == true) {
                prime.push(i);
            }
        });
        return prime;
    };
    GroupNumber.prototype.groupPrimeLess100 = function () {
        var primelest100 = [];
        var isprime = true;
        var i = 0;
        this.x.forEach(function (n) {
            for (i = 2; i <= n - 1; i++) {
                if (n % i == 0) {
                    isprime = false;
                    break;
                }
            }
            ;
            if (isprime == true && i < 100) {
                primelest100.push(i);
            }
            ;
        });
        return primelest100;
    };
    return GroupNumber;
}());
var arr = __spreadArrays(Array(200)).map(function (a, b) { return b; });
var numb = new GroupNumber(arr);
console.log(numb.groupEven());
console.log(numb.groupOdd());
console.log(numb.groupMultiple5());
console.log(numb.groupPrime());
console.log(numb.groupPrimeLess100());
