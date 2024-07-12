function longestCommonPrefix(strs) {
  if (strs === null || strs.length < 1 || strs.length > 200) {
    return "Input is invalid";
  }

  if (strs.length === 0) {
    return "";
  }

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < 0 || strs[i].length > 200) {
      return "Input is invalid";
    }

    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") {
        return "";
      }
    }
  }

  return prefix;
}

// Example 1
const strs1 = ["flower", "flow", "flight"];
console.log(`Example 1 Output: ${longestCommonPrefix(strs1)}`); // Output: "fl"

// Example 2
const strs2 = ["dog", "racecar", "car"];
console.log(`Example 2 Output: ${longestCommonPrefix(strs2)}`); // Output: ""
