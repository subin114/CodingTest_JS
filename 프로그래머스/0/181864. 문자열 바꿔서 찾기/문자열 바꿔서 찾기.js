const solution = (myString, pat) => myString.replaceAll(/A|B/g, c => c === 'A' ? 'B' : 'A').includes(pat) ? 1 : 0