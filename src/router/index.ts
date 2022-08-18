import React from "react"

// components
import Login from "pages/Login"
import Contacts from "pages/Contacts"

// type rout
export interface IRoute {
    path: string
    element: React.ComponentType
    exact?: boolean
}

export enum RouteName {
    LOGIN = "/login",
    CONTACTS = "/contacts",
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
        path: RouteName.CONTACTS,
        exact: true,
        element: Contacts,
    },
]
