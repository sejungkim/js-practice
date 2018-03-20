function divisors(num) {
    var result = [], divNum = num;
    for(var i = 0; divNum > 0; i++) {
        if(num % divNum === 0) {
            result[i] = divNum;
        }
        else {
            i--;
        }
        divNum--;
    }
    return result;
}

function gcd() {
    var inputNumlen = arguments.length, divisorNum = {};
    var divisorNumlen = [], short = 0, long = 1;
    var greatest;
    for(var i = 0; i < inputNumlen; i++) {
        divisorNum[i] = divisors(arguments[i]);
        divisorNumlen[i] = divisorNum[i].length;
    }
    if(divisorNumlen[0] > divisorNumlen[1]) {
        short = 1;
        long = 0;
    }
    for(var i = 0; i < divisorNumlen[short]; i++) {
        if(divisorNum[long].includes(divisorNum[short][i])) {
            greatest = divisorNum[short][i];
            break;
        }
    }
    console.log(greatest);
}

gcd(84, 120);