var a = 10;
var b = 20;

let result = a + b;

async function fetchData() {
    let resultFromServer = await fetch('https://jsonplaceholder.typicode.com/posts');

    console.log(await resultFromServer.json());
}

fetchData();

// fetch('https://jsonplaceholder.typicode.com/posts').then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(`Encountered Error: ${error}`);
// })

console.log(result);
