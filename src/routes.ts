import { UserController } from "./controller/UserController";

export const Routes = [
    {
        method: "get",
        route: "/user",
        controller: UserController,
        action: "getAll"
    },
    {
        method: "post",
        route: "/user",
        controller: UserController,
        action: "create"
    },
    {
        method: "put",
        route: "/client/:id",
        controller: UserController,
        action: "update"
    },
    {
        method: "delete",
        route: "/client/:id",
        controller: UserController,
        action: "delete"
    }
];