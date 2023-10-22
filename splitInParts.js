var splitInParts = function(s, partLength){
  // Good Luck!
    let array1 = s.split('')
    for (let i=0;i<s.length/partLength-1;i++){ 
      array1.splice(i+partLength+partLength*i, 0, ' ')
    }
 
  return array1.join('')
}


