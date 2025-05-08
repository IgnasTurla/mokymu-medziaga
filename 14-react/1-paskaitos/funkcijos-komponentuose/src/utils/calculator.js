export const suma = (a , b) => {
    return a + b
}

export const averageArray = (mas) => {
    return (mas.reduce((suma, skaicius) => suma + skaicius, 0)) / mas.length;
   
    // let suma = 0;
    // mas.forEach((sk) => {
    //     suma += sk;
    // });
    // return (suma / mas.length);
}