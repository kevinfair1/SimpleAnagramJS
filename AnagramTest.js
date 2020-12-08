function validAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return "false";
  } else {
    let arr1 = str1.split("").sort().toString();
    let arr2 = str2.split("").sort().toString();

    if (arr1 === arr2) {
      return "true";
    } else {
      return "false";
    }
  }
}

// test cases
console.log(validAnagram("", "")); //true
console.log(validAnagram("aaz", "zza")); //false
console.log(validAnagram("anagram", "nagaram")); //true
console.log(validAnagram("rat", "car")); //false
console.log(validAnagram("awesome", "awesom")); //false
console.log(validAnagram("qwerty", "qeywrt")); //true
console.log(validAnagram("texttwisttime", "timetwisttext")); //true
