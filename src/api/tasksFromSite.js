import axios from "axios";

const urls = {
    getTasks: 'https://jsonplaceholder.typicode.com/todos?_limit=4'
}


export default {
    async getTasks(){
        return await axios.get(urls.getTasks)
    }
}