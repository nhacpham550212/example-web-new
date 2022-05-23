function getRandNumbers (min,max,length){
    var arrayRandom = new Array(length);
    for(var i = 0 ; i < length; i++)
    {    
             arrayRandom[i] = Math.random() * (max - min) + min;       
    }
    return arrayRandom
}
console.log(getRandNumbers(20,50,10));