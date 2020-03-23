export class Censor{
    words:string[];
    sentences:string;
    constructor(words:string[], sentences:string){
        this.words=words;
        this.sentences=sentences;
    }

    censorWord(){
        this.words.forEach(function (word){
            console.log(word);
            sentences = sentences.replace(word,"*******");
        });
        return sentences;       
    }
}
let sentences="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let words =["dolor", "elit", 'quis', "nisi", "fugiat", "proident", "laborum"];
let censored = new Censor(words, sentences);
console.log(censored.censorWord());