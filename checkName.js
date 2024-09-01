
function checkName(name) {
  if (typeof name === "string") {
    const lastLetter = ["A", "E", "I", "O", "Y", "U", "W"];
    const checkName = name.charAt(name.length - 1);
    const checkNameUpper = checkName.toUpperCase();
    if (lastLetter.includes(checkNameUpper)) {
      return ("Good Name");
    } else {
        return("Bad Name");
    }
  } else {
      return("Please Input Valid Name");
  }
}
const yourName = checkName('Samiya');
console.log(yourName)
