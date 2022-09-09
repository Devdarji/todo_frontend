import todoRoutes from "../Container/Todo/Routes";
import { concatArrays } from "../Utils/Utils";

const routes = concatArrays({
    todoRoutes
});

export default routes;