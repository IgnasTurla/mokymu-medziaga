// 1 uzduotis
function manoPirmasTimeout(callback) {
    setTimeout(callback, 2000);
}
manoPirmasTimeout(() => {
    console.log("funkcija po 2 sekundziu");
});




// 2 uzduotis
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(data => {
    console.log(data)
})

const people = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

    if (response.status !== 200) {
        throw new Error (' nepavyko gauti duomenu')
    }
    return response.json();
}

people()
.then(data => console.log(data))
.catch(error => console.log(error))
// 3 uzduotis

// 4 uzduotis
// 5 uzduotis

let objektai = [
    {}, {}, {}
]
// 6 uzduotis





// 7 uzduotis