export class CountOccurness{
    words:string[];
    constructor(words:string[]){
        this.words=words;
    }

    countOccure(){
        this.words.forEach(function (word){
            const numberOfOccurrences =(sentences.match(new RegExp(word, 'gi')) || []).length;
            console.log(`${word} - ${numberOfOccurrences}`)

        });      
    }
}
var sentences="Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali"
    +"Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib"
    +"Aku ingin terbang bebas Di angkasa Hei… baling baling bambu"
    +"La... la... la... Aku sayang sekali Doraemon"
    +"La... la... la... Aku sayang sekali";
    
let words =["aku", "ingin", 'dapat'];
let countOccurness = new CountOccurness(words);
console.log(countOccurness.countOccure());