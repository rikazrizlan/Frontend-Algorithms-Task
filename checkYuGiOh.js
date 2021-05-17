function checkYuGiOh(n) {
    let numbers = [];

    for(let i=1; i<=n ; i++) {
        numbers.push(i)
    }

    if(typeof n === "string" && n.indexOf(" ") >= 0) {
        console.log(`invalid parameter: "${n}"`);
    } else {
        for(let i=0; i<numbers.length; i++) {
            if(numbers[i] % 2 === 0 && numbers[i] % 3 === 0 && numbers[i] % 5 ===0 ) {
                numbers[i] = "yu-gi-oh";
            } else if(numbers[i] % 2 === 0 && numbers[i] % 3 === 0) {
                numbers[i] = "yu-gi";
            } else if(numbers[i] % 2 === 0 && numbers[i] % 5 === 0) {
                numbers[i] = "yu-oh";
            } else if(numbers[i] % 2 === 0) {
                numbers[i] = "yu";
            } else if(numbers[i] % 3 === 0) {
                numbers[i] = "gi";
            } else if(numbers[i] % 5 === 0) {
                numbers[i] = "oh";
            }
        }
        console.log(numbers);
    }
}

checkYuGiOh(10);