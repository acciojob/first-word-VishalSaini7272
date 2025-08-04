function firstWord(s) {
  // your code here
	 str = str.trimStart();

  // Find the index of the first space
  const firstSpaceIndex = str.indexOf(' ');

  // If there's no space, return the entire string
  if (firstSpaceIndex === -1) {
    return str;
  }
return str.slice(0, firstSpaceIndex);
}


// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
