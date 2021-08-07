import axios from "axios";

const instance = axios.create({
    baseURL:"https://tinder-g.herokuapp.com"
})

export default instance;