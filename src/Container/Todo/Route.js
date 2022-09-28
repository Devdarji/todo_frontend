import { lazy } from "react";

import appRoutes from "../../appRoutes";

const Todo = lazy(() => import("./Pages/Todo"));

const todoRoutes = [
    {
        path: appRoutes.todoAppRoutes.todoRoute,
        exact: true,
        name: "Todo",
        component: Todo,
        private: false,
    },
];

console.log("todoRoutes====================>", todoRoutes);
export default todoRoutes;