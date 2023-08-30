const url = 'https://jsonplaceholder.typicode.com/users';

// export function getData(){
    
    fetch(url)
        .then((response) => {
            // if(! response.ok) throw new Error("There was an error in reaching this file");
            return response.json();
        })
        .then((dataObj) => {
            console.log(dataObj);
        }).catch((err) =>{
            console.warn(err.message);
        });
    

// }











































    // .then((response) => {
    //     if(!response.ok) throw new Error("There was an error reaching that server");
    //     return response.json;
    // })
    // .then((dataObj) => {
    //     console.log(dataObj);
    // })
    // .catch((err) => {
    //     console.warn(err.message);
    // });