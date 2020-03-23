class GroupNumber{
    x:number[];
    constructor(x:number[]){
        this.x= x;            
    }
    groupEven(){
        let even=[];
       
        this.x.forEach(function (i){
            if (i%2===0) {
                even.push(i);
            }
        });
        return even;
    }

    groupOdd(){
        let odd=[];
        this.x.forEach(function (i){
            if(i%2!==0) {
                odd.push(i);
            }
        });
        return odd;
    }
    groupMultiple5(){
                
        let multiplies5=[];
        this.x.forEach(function (i){
            if(i%5===0){
                multiplies5.push(i);
            }
        });
        return multiplies5;
    }
    groupPrime(){
        let prime=[];
        let isprime=true
        let i=0;
        this.x.forEach(function (n){
            for (i = 2; i <= n - 1; i++) {
                if (n % i == 0) { 
                    isprime = false; 
                    break; 
                }
            };
            if(isprime==true){
                prime.push(i);
            }
        });
        return prime;
    }
    groupPrimeLess100(){
        let primelest100=[]
        let isprime=true
        let i =0;
        this.x.forEach(function (n){
            for (i = 2; i <= n - 1; i++){
                if (n % i == 0) { 
                    isprime = false; 
                    break; 
                }
            };
            if(isprime==true&& i<100){
                primelest100.push(i);
            };
                       
        });
        return primelest100;
    }
}
let arr= [...Array(200)].map((a,b)=>b);
let numb =new GroupNumber(arr);
console.log(numb.groupEven());
console.log(numb.groupOdd());
console.log(numb.groupMultiple5());
console.log(numb.groupPrime());
console.log(numb.groupPrimeLess100());