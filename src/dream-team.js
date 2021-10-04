import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam( members ) {
  if(!Array.isArray(members)){
    return false;
  }
  let newStr = '';
  for(let i = 0; i < members.length; i++){
    if(typeof members[i] === 'string'){
      let trimmedStr = members[i].trim();
      newStr += trimmedStr[0];
    }
  }
  let secret = newStr.toUpperCase().split('').sort().join('');
  return secret;
  // remove line with error and write your code here
}
