const kumpulanKata = (arr) => {
  const groups = {};

  for (let i = 0; i < arr.length; i++) {
    let huruf = [];
    for (let char of arr[i]) {
      huruf.push(char);
    }

    for (let j = 0; j < huruf.length - 1; j++) {
      for (let k = j + 1; k < huruf.length; k++) {
        if (huruf[j] > huruf[k]) {
          let temp = huruf[j];
          huruf[j] = huruf[k];
          huruf[k] = temp;
        }
      }
    }

    let kata = "";
    for (let h of huruf) {
      kata += h;
    }

    if (!groups[kata]) {
      groups[kata] = [];
    }
    groups[kata].push(arr[i]);
  }

  let result = [];
  let keys = [];
  for (let key in groups) {
    keys.push(key);
  }

  for (let l = 0; l < keys.length; l++) {
    result.push(groups[keys[l]]);
  }

  return result;
};

const arr = ["cook", "save", "taste", "aves", "vase", "state", "map"];
console.log(kumpulanKata(arr));
