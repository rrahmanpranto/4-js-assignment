// function tinyFriend(arr){
//     var word = '';
//     var maxLength= 0;
//     for(var i=0;i< word.length; i++){
//         if(word[i].length> maxLength){
//             maxLength=word[i];
//         }
//     }
//     return maxLength;
// }
// var output = tinyFriend(["anwar", "hossain", "mazharul", "ripon"]);
// console.log(output)


// function findLongestWordLength(str) {
//     let words = str.split(' ');
//     let maxLength = 0;
  
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > maxLength) {
//         maxLength = words[i];
//       }
//     }
//     return maxLength;
//   }
  
  
//  var output = findLongestWordLength("The quick brown fox jumped over the lazy dog");
//  console.log(output)

var arr = ["anwar", "hossain", "mazharul", "ripon"];

console.log(
  arr.reduce((a, b) => a.length <= b.length ? a : b)
)