const input = [23,45,678,90,33,21,780,670,498,7493,58940,6565,900,370,1299,1300];

const output = input.filter((element)=>{
    return element % 10 === 0 ? true : false; 
});
console.log(output);