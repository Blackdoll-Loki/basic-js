import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater( str, options ) {
  let strToStr = str + '';
  let resultString;
  let separator = '+';
  let repeaterToNum = options.repeater;
  for(repeaterToNum; repeaterToNum > 1; repeaterToNum--){
      resultString += strToStr + separator;
      repeaterToNum--;
  }
  return resultString;
  // remove line with error and write your code here
}
