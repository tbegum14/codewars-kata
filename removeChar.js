function removeChar(str){
    //You got this!
     if (str.length>=2){
       const newstr = str.split('')
       newstr.shift()
       newstr.pop()
       return newstr.join('')
     }
     else {
       return str.split('')
     }
   
   };