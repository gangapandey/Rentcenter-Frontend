import axios from "axios";

const API = axios.create({
    baseURL : "https://localhost:3000/api" ,      //backendko url

    headers : {
        'Content-Type' : 'application/json',
        Accept : 'application/json'
    }
})

// const APIAuthenticated = axios.create({
//     baseURL: 'https://localhost:3000/api',
//     headers:{

//     }
// })

export default API


//TODO

// const something = await axiox.get("http://localhost:300/api/product");  ko thau ma you can write

// const something = await API.get(/product);    yeti matra and yestai gari aru thau ma pani