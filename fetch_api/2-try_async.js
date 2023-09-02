const url = "https://jsonplaceholder.typicode.com/posts";
async function getData(){
    try{
        let response = await fetch(url);
        console.log(response);
        if(!response.ok) throw new Error("There waas an error with this url");
        let dataObj = await response.json();
        console.log(dataObj);
    }catch(err){
        console.warn(err.message);
    }
}
    
getData()