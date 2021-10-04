import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform( arr ) {
  if(!Array.isArray(arr)){
    return "\'arr\' parameter must be an instance of the Array!";
  }
  let resultArr = [];
  for(let i = 0; i < arr.length; i++ ){
    if(arr[i] === '--discard-prev'){
      resultArr.splice(resultArr.length-1,1);
      continue;
    } else if(arr[i] === '--double-prev'){
      resultArr.splice(resultArr.length-1, 0, resultArr[resultArr.length-1]);
      continue;
    } else if(arr[i] === 'discard-next'){
      i = i + 2;
      continue;
    } else if(arr[i] === '--double-next'){
      resultArr.push(arr[i+1],arr[i+1]);
      i = i + 2;
      continue;
    } 
      resultArr.push(arr[i]); 
  }
  return resultArr;
  // remove line with error and write your code here
}
