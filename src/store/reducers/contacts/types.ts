import { IContact } from "models/contact"

export interface ContactState {
    users: IContact[]
    isError: string
    search: string
}

export enum ContactActions {
    SET_CONTACT = "SET_CONTACT",
    SET_CONTACTS = "SET_CONTACTS",
    EDIT_CONTACT = "EDIT_CONTACT",
    DELETE_CONTACT = "DELETE_CONTACT",
    SET_IS_ERROR = "SET_IS_ERROR",
    SET_SEARCH = "SET_SEARCH",
}

export interface SetContact {
    type: ContactActions.SET_CONTACT
    payload: IContact
}

export interface SetContacts {
    type: ContactActions.SET_CONTACTS
    payload: IContact[]
}

export interface EditContact {
    type: ContactActions.EDIT_CONTACT
    payload: IContact
}

export interface DeleteContact {
    type: ContactActions.DELETE_CONTACT
    payload: string
}

export interface SetIsError {
    type: ContactActions.SET_IS_ERROR
    payload: string
}

export interface SetSearch {
    type: ContactActions.SET_SEARCH
    payload: string
}

export type ContactAction =
    | SetContact
    | SetContacts
    | EditContact
    | DeleteContact
    | SetIsError
    | SetSearch
