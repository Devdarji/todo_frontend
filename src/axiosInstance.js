import axios from "axios";



const todoService = axios.create({
    baseURL: `${process.env.REACT_APP_TODO_SERVICE}/todo/`,
});

todoService.interceptors.request.use(
    (config) => {
        const tmpConfig = config;
        tmpConfig.headers["X-CSRFToken"] = localStorage.getItem("csrftoken");
        return tmpConfig;
    },
    (error) => {
        return Promise.reject(error);
    }
);



// export default axios.create({
//     baseURL: "http://localhost:8006/",
//     headers: {
//         "Content-type": "application/json"
//     }
// });

// const todoService = axios.create({
//     baseURL: `${process.env.TODO_APP_SERVICE}/`,
// });

// axios.interceptors.response.use(
//     (res) => {
//         console.log("=======>",res);
//         return res;
//     },
//     (error) => {
//         console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
//         console.log(error);
//         return Promise.reject(error);
//     }
// )

export { todoService };