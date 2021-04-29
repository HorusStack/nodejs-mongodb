let arr = [23,45,678,90,33,21,780,670,498,7493,589];

output = arr.filter((val) => {
    return !(val % 10);
});

console.log(output);