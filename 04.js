var LeapYear = /** @class */ (function () {
    function LeapYear(yearStart, yearEnd) {
        this.yearStart = yearStart;
        this.yearEnd = yearEnd;
    }
    LeapYear.prototype.isLeapYear = function () {
        var leapYear = [];
        for (; this.yearStart <= this.yearEnd; this.yearStart++) {
            var date = new Date(this.yearStart, 1, 29);
            if (date.getMonth() === 1) {
                leapYear.push(this.yearStart);
            }
        }
        return leapYear;
    };
    return LeapYear;
}());
var start = 2000;
var end = 2020;
var leap = new LeapYear(start, end);
console.log(leap.isLeapYear());
