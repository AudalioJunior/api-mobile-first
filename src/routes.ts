

export const Routes = [
    {
        method: "get",
        route: "/client",
        controller: '',
        action: "getAll"
    },
    {
        method: "post",
        route: "/client",
        controller: '',
        action: "create"
    },
    {
        method: "put",
        route: "/client/:id",
        controller: '',
        action: "update"
    },
    {
        method: "delete",
        route: "/client/:id",
        controller: '',
        action: "delete"
    },

    
    {
        method: "get",
        route: "/product",
        controller: '',
        action: "getAll"
    },
    {
        method: "post",
        route: "/product",
        controller: '',
        action: "create"
    },
    {
        method: "put",
        route: "/product/:id",
        controller: '',
        action: "updated"
    },
    {
        method: "delete",
        route: "/product/:id",
        controller: '',
        action: "delete"
    },

    {
        method: "get",
        route: "/employee",
        controller: '',
        action: "getAll"
    },
    {
        method: "post",
        route: "/employee",
        controller: '',
        action: "create"
    },
    {
        method: "put",
        route: "/employee/:id",
        controller: '',
        action: "updated"
    },
    {
        method: "post",
        route: "/buysale",
        controller: '',
        action: "buySale"
    }
];