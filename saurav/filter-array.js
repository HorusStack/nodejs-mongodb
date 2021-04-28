const input = [23,45,678,90,33,21,780,670,498,7493,58940,6565,900,370,1299,1300];

let output = input.filter(x => !Boolean(x % 10));
console.log(output);