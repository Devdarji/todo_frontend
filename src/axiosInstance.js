import axios from "axios";

const todoService = axios.create({
    baseURL: `${process.env.TODO_APP_SERVICE}/`,
});

todoService.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
)

export { todoService };