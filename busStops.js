var number = function(busStops){
    // Good Luck!
    const array1=[];
    const array2=[];
    for (let i=0;i<busStops.length;i++){
      array1.push(busStops[i][0])
      array2.push(busStops[i][1])
    }
    return array1.reduce((a,b)=>a+b,0)-array2.reduce((a,b)=>a+b,0)
  }