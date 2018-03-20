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

function selectShort(len, arrlen) {
    var shortIdx = 0;
    for(var i = 0; i < (len - 1); i++) {
        if(arrlen[shortIdx] > arrlen[i + 1]) {
            shortIdx = i + 1;
        }
    }
    return shortIdx;
}

function findGcd(shortlen, short, arrlen, arr) {
    var greatest;
    for(var i = 0; i < shortlen; i++) {
        for(var j = 0; j < arrlen; j++) {
            if(arr[j].includes(arr[short][i])) {
                greatest = arr[short][i];
            }
            else {
                greatest = 0;
                break;
            }
        }
        if(greatest) {
            return greatest;
        }
    }
}

function gcd() {
    var inputNumlen = arguments.length, divisorNumbers = {};
    var divisorNumlen = [], shortIdx = 0;
    var greatest;
    for(var i = 0; i < inputNumlen; i++) {
        if(arguments[i] === 0) {
            console.error("INPUT ERROR : ZERO");
            return 0;
        }
        divisorNumbers[i] = divisors(arguments[i]);
        divisorNumlen[i] = divisorNumbers[i].length;
    }
    //console.log(divisorNumbers);
    shortIdx = selectShort(inputNumlen, divisorNumlen);
    greatest = findGcd(divisorNumlen[shortIdx], shortIdx, inputNumlen, divisorNumbers);
    console.log(greatest);
    return 0;
}

gcd(1,1)