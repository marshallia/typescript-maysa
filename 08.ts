
export class CountOccurness{
    words:string;
    constructor(words:string){
        this.words=words;
    }
    lower(){
        return this.words.toLowerCase();
    }
    upper(){
        return this.words.toUpperCase();
    }
    reverse(){
        return this.words.split("").reverse();
    }
    contains(){

    }
    
}
   
let countOccurness = new CountOccurness("MAKAN");
//console.log(countOccurness.countOccure());