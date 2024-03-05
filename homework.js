function positiveSum(arr) {
    let sum = 0;
    arr.forEach(num => {
      sum += num > 0 ? num : 0;
    });
    
    return sum
}

function squareSum(numbers){
    let sum = 0;
    numbers.forEach(num => {
      sum += num ** 2;
    });
    
    return sum;
}

function digitize(n) {
    let arr = `${n}`.split('');
    for(let i = 0; i < arr.length; i++){
      arr[i] = +arr[i];
    }
  
    return arr.reverse();
}

function findNeedle(haystack) {
    let index = haystack.indexOf('needle');
    return `found the needle at position ${index}`;
}

function arr2bin(arr){
    let sum = 0;
    arr.forEach(num => {
        if(typeof num === 'number'){
            sum += num;
        }
    })

    return sum.toString(2);
}

function sorter(textbooks) {
  textbooks.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if(a > b){
      return 1;
    }else if(a < b){
      return -1;
    }else{
      return 0
    }
  });
  return textbooks;
}

function eachCons(array, n) {
    if(n > array.length){
        return [];
    }else if(n == array.length){
        return [array];
    }else{
        let ans = [];
        for(let i = 0; i + n <= array.length; i++){
          ans.push(array.slice(i, i + n));
        }
        
        return ans;
    }
}

function addLength(str) {
    let ans = [];
    str.split(' ').forEach(elem => {
      ans.push(`${elem} ${elem.length}`);
    })
    
    return ans;
}

function tribonacci(signature,n){
    let ans = [];
    for(let i = 0; i < n; i++){
      if(i + 1 < 4){
        ans.push(signature[i]);
        continue;
      }
      
      ans.push(ans[i - 3] + ans[i - 2] + ans[i - 1]);
    }
    
    return ans;
}

function moveZeros(arr) {
    let ans = [];
    let count = 0;
    arr.forEach(elem => {
      if(elem !== 0){
        ans.push(elem);
      }else{
        count++; 
      }
    });
    
    for(let i = 0; i < count; i++){
      ans.push(0);
    }
    
    return ans;
}

const binaryArrayToNumber = arr => {
    let ans = '';
    arr.forEach(num => {
      ans += `${num}`;
    });
    
    return parseInt(ans, 2);
}

function findUniq(arr) {
    arr.sort();
    if(arr[0] != arr[1]){
      return arr[0];
    }else{
      return arr[arr.length - 1];
    }
}

function sortArray(array) {
  let odd = [];
  let indexes = [];
  array.forEach((elem, index) => {
    if(Math.abs(elem) % 2 == 1){
      odd.push(elem);
      indexes.push(index);
    }
  });
  
  odd.sort((a, b) => a - b);
  indexes.sort((a, b) => a - b);
  
  for(let i = 0; i < odd.length; i++){
    array[indexes[i]] = odd[i];
  }
  
  return array;
}

snail = function(array) {
  if(array[0].length === 0){
    return [];
  }

  let steps = array.length - 1;
  let directions = [
    [1, 0, "r"],
    [0, 1, "d"],
    [-1, 0, "l"],
    [0, -1, "u"],
  ];

  let directionChangeCount = 0;
  let direction = 0;

  let ans = [];
  let x = 0, y = 0;

  let stepCount = 0;

  ans.push(array[y][x]);
  while(steps > 0){
    x += directions[direction][0];
    y += directions[direction][1];

    ans.push(array[y][x]);

    stepCount++;
    if(stepCount == steps){
      stepCount = 0;
      directionChangeCount++;
      direction = direction + 1 === directions.length ? 0 : direction + 1;
      if(directionChangeCount > 2){
        steps--;
        directionChangeCount = 1;
      }
    }
  }

  return ans;
}