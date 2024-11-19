/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx === nums.length) return 1
  return nums[idx] * product(nums, idx+1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, maxLen = 0) {
  if (idx === words.length) return maxLen
  maxLen = Math.max(maxLen, words[idx].length)
  return longest(words, idx+1, maxLen)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0, result="") {
  if (idx >= str.length) return result
  result += str[idx]
  return everyOther(str, idx+2, result)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, left = 0, right = str.length -1) {
  if (left >= right) return true
  if (str[left] !== str[right]) return false
  return isPalindrome(str, left+1, right-1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if (idx === arr.length) return -1
  if (arr[idx] === val) return idx
  return findIndex(arr, val, idx+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = str.length -1, result="") {
  if (idx < 0) return result
  result += str[idx]
  return revString(str, idx-1,result)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = []
  function gather(val){
    if (typeof val === 'string'){
      strings.push(val)
    } else if (typeof val === 'object' && val !== null){
      for (let key in val){
        gather(val[key])
      }
    }
  }
  gather(obj)
  return strings
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) return -1
  let mid = Math.floor((left + right) / 2)
  if (arr[mid] === val) return mid
  if (arr[mid] > val){
    return binarySearch(arr, val, left, mid -1)
  } else {
    return binarySearch(arr,val, left+1, right)
  }
}

/** balancedBrackets */
function isBalancedBrackets(str, stack=[], idx=0){
  const openBrackets = '({['
  const closeBrackets = ')}]'

  if (idx === str.length) return stack.length === 0

  let char = str[idx]

  if(openBrackets.includes(char)){
    stack.push(char)
  } else if (closeBrackets.includes(char)){
    if (stack.length === 0) return false
    let lastOpen = stack.pop()
    if (openBrackets.indexOf(lastOpen) !== closeBrackets.indexOf(char)){
      return false
    }
  }
  return isBalancedBrackets(str,stack, idx+1)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  isBalancedBrackets
};
