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
        route: "/user/:id",
        controller: UserController,
        action: "update"
    },
    {
        method: "get",
        route: "/user/:email",
        controller: UserController,
        action: "getOne"
    }
];