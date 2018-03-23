const widget = {
  "debug": "on",
  "window": {
    "title": "Sample Konfabulator Widget",
    "name": "main_window",
    "width": 500,
    "height": 500
  },
  "image": {
    "src": "Images/Sun.png",
    "name": "sun1",
    "hOffset": 250,
    "vOffset": 250,
    "alignment": "center"
  },
  "text": {
    "data": "Click Here",
    "size": 36,
    "style": "bold",
    "name": "text1",
    "hOffset": 250,
    "vOffset": 100,
    "alignment": "center",
    "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
  }
}

let result = [];
function seekKeyHasNumber(obj) {
  for (let v in obj) {
    switch (typeof obj[v]) {
      case 'object':
        seekKeyHasNumber(obj[v]);
        break;
      case 'number':
        result.push(v);
        break;
    }
  }
}

seekKeyHasNumber(widget);
console.log(result);

/*
//ver.whale

function pushNumber(obj, result = []) {
  for (key in obj) {
    if (typeof obj[key] === 'number') result.push(key);
    if (typeof obj[key] === 'object') {
      pushNumber(obj[key], result);
    }
  }
  return result;
}

console.log(pushNumber(widget));

//ver.mando

function getResult(obj) {
  let result = [];
  for (let key in obj) {
    if (typeof obj[key] === 'number') result.push(key);
    result.concat(getResult(obj[key]));
  }
  return result;
}
*/