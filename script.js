function firstWord(s) {
  // your code here
	 s = s.trimStart();

  // Find the index of the first space
  const firstSpaceIndex = s.indexOf(' ');

  // If there's no space, return the entire string
  if (firstSpaceIndex === -1) {
    return s;
  }
return s.slice(0, firstSpaceIndex);
}


// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
