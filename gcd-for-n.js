function gcd() {
    var divisorArray = [],
    minNum;

    minNum = Math.min(...arguments);
    for(var i = minNum; i > 0; i--) {
        if(minNum % i === 0) {
            divisorArray.push(i);
        }
    }
    for(var i = 0; i < divisorArray.length; i++) {
        for(var j = 0; j < arguments.length; j++) {
            if(arguments[j] % divisorArray[i] !== 0) {
                break;
            }
            if(j === (arguments.length - 1)) {
                return divisorArray[i];
            }
        }
    }
}

console.log(gcd(84,120));