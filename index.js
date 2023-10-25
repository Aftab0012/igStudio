// ocuurence; //[a,a,c,c,v,v,b] > 1 {a:2, v:3}

function occurence(arr) {
  let object = {};
  for (let num of arr) {
    if (!object[num]) {
      object[num] = [num];
    } else {
      object[num].push(num);
    }
  }
  return Object.entries(object).filter((item, index) => index > 1);
}

let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
console.log(occurence(arr));
