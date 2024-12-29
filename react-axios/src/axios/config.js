import axios from "axios";

const commentFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers : {
      "Content-Type" : "application/json"
    }
})

export default commentFetch