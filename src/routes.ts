import { SquadController } from "./controller/SquadController";
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
    },
    {
        method: "get",
        route: "/squad/:id",
        controller: SquadController,
        action : "getOne"
    },
    {
        method: "post",
        route: "/squad",
        controller: SquadController,
        action : "create"
    },
];