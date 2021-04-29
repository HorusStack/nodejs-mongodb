let arr1=[23,45,678,90,33,21,780,670,498,7493,58940,6565,900,370,1299,1300];

arr1=arr1.filter((element)=>{
    return(element%10 ==0 ? element : 0)
})

console.log(arr1);