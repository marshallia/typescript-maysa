export class Combine{
    first:string[];
    second:string[];
    third:string[];
   constructor(first:string[], second:string[], third:string[]){
        this.first = first;
        this.second = second;
        this.third = third;
   } 

   combineArray(){
       let x=this.first.join(" ");
       let y=this.second.join(" ");
       let z =this.third.join(" ");
       return x+" "+y+" "+z;
   }
}

const first = ['Behind', 'every', 'great', 'man'];
const second = ['is', 'a', 'woman'];
const third = ['rolling', 'her', 'eyes'];

let x=new Combine(first, second, third);
console.log(x.combineArray());