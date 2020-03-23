class LeapYear{
    yearStart:number;
    yearEnd:number;
    
    constructor(yearStart:number,yearEnd:number){
        this.yearStart = yearStart;
        this.yearEnd = yearEnd;
    }

    isLeapYear(){
        let leapYear=[];
        for (;this.yearStart<=this.yearEnd; this.yearStart++){
            const date = new Date(this.yearStart, 1, 29);
            if( date.getMonth() === 1){
                leapYear.push(this.yearStart);
            }
        }
        return leapYear;
    }
}

let start =2000;
let end =2020;

let leap =new LeapYear(start,end)
console.log(leap.isLeapYear());