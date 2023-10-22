function XO(str) {
    //code here
  return str.toLowerCase().split('').filter(le=>le!='x').length === str.toLowerCase().split('').filter(le=>le!='o').length? true:false;
  }