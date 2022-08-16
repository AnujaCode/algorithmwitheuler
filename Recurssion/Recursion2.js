// Write a function, countVowels, that accepts a string as an argument and returns the number of vowels in that string.
// Use recursion.

//countVowels('Four score and seven years'); // => 9
function countVowels(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(countVowels("Four score and seven years"));