import todoRoutes from "../Container/Todo/Route";
import { concatArrays } from "../Utils/Utils";

const routes = concatArrays({
    todoRoutes
});

console.log("=================",routes);

export default routes;