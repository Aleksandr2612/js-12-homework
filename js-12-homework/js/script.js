// №1

// function loadJson(url) {
//     return fetch(url)
//         .then(response => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }

//         })
// }
// loadJson('no-such-user.json')
//     .catch(alert);




//   async function loadJson(url) {
//   let response = await fetch(url);
//   if (response.status == 200){
//     let json = await response.json();
//     return json; 
//   }
//   throw new Error(response.status);
// }
// loadJson('no-such-user.json')
//     .catch(alert);


// №2
// const url = "https://jsonplaceholder.typicode.com/todos/1";

// const delay = time => { // функция имитации запроса получения данных (задержка времени)
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time)
//     })
// }


// Метод 1
// function requestData() {
//     return delay(4000) // задержка времени
//         .then(() => fetch(url)) // запрос получения данных
//         .then(response => response.text()) // получение данных в формате responce и последующая обработка данных с помощью метода text()
// }
// requestData().then(data => console.log(data))


// Метод 2
// async function requestData() {
//     console.log("Request started...");
//     await delay(3500)
//     let response = await fetch(url)
//     let data = await response.json()
//     console.log("Данные получены:", data);
// }
// requestData()