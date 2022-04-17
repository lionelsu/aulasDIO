function substituiPares(array1) {
    for(let i = 0; i < array1.length; i++) {
        if(array1[i] === 0) {
            console.log("Você já é zero!!")
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array1[i]} por 0...`);
            array1[i] = 0;
        } 
    }

    return array1;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiPares(arr));