findPrime(20);
function findPrime(limit){
    
    for(let i=2;i<=limit;i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
    
}
function isPrime(item){
    for(let i=2;i<item;i++){
        if(item%i===0){
            return false;
        }
    }
    return true;

}

findPrime(20);