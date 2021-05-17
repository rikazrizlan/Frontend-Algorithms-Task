function convertFahrToCelcius(F) {
    if (typeof F !== "string" && typeof F !== "number" && !Array.isArray(F)) {
        console.log(`${JSON.stringify(F)} is not a valid number but a/an ${typeof F}.`);
    } else if (Array.isArray(F)) {
        console.log(`${F} is not a valid number but a/an array.`);
    } else {
        let C = (F-32) * 5/9;
        console.log(C.toFixed(4));
    }
}

convertFahrToCelcius(0);