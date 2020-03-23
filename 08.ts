
export class CountOccurness{
    
    lower(words:string){
        return words.toLowerCase();
    }
    upper(words:string){
        return words.toUpperCase();
    }

    capitalize(words:string){
        return words.replace(/\w\S*/g, function(x){return x.charAt(0).toUpperCase() + x.substr(1).toLowerCase();});
    }

    reverse(words:string){
        return words.split("").reverse().join("");
    }


    contains(words:string, subs:string){
        return words.match(subs)? true:false;
    }
 
    // random(n:number){
    //     let arr="";
    //     for (let i = n;i>n;i--){
    //         arr+=
    //     }
    // }

    slug(words:string, slug:string){
        slug = (typeof slug !=='undefined')? slug:"-"
        return words.split(" ").join(slug);
    }

    countChar(words:string){
        return words.length;
    }
    countWord(words:string){
        return words.split(" ").length;
    }

    trimChar(x:number, words:string){
        return words.substring(0,x);
    }

    trimWords(words:string, x:number){
        let tmp = words.split(" ");
        return tmp.slice(0,x).join(" ");
    }
    
}
   
let y = new CountOccurness();
console.log(y.lower('MAKAN'));
console.log(y.upper('malam'));
console.log(y.capitalize('saya ingin makan'));
console.log(y.reverse('kasur'));
console.log(y.contains('Saya ingin makan sate', 'makan'));
console.log(y.slug('JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?','_'));
console.log(y.slug('JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?','_'));
console.log(y.countChar('lorem ipsum'));
console.log(y.countWord('lorem ipsum'));
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

console.log(y.trimChar(20, text));
console.log(y.trimWords(text, 3));
