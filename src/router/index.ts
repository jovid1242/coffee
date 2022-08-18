import React from "react"

// components
import Login from "pages/Login"
import Admin from "pages/Admin"
import Seller from "pages/Seller"

// type rout
export interface IRoute {
    path: string
    element: React.ComponentType
    exact?: boolean
}

export enum RouteName {
    LOGIN = "/login",
    ADMIN = "/admin",
    SELLER = "/seller",
}

export const publicRoutes: IRoute[] = [
    {
        path: RouteName.LOGIN,
        exact: true,
        element: Login,
    },
]

export const privateRoutes: IRoute[] = [
    {
        path: RouteName.ADMIN,
        exact: true,
        element: Admin,
    },
    {
        path: RouteName.SELLER,
        exact: true,
        element: Seller,
    },
]
