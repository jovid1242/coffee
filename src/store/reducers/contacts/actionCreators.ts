import { SetContacts } from "./types"
// store
import { AppDispatch } from "store"

// types & models
import { IContact } from "models/contact"
import {
    ContactActions,
    SetContact,
    DeleteContact,
    EditContact,
    SetIsError,
    SetSearch,
} from "./types"

export const ContactActionCreators = {
    setContact: (user: IContact): SetContact => ({
        type: ContactActions.SET_CONTACT,
        payload: user,
    }),
    setContacts: (users: IContact[]): SetContacts => ({
        type: ContactActions.SET_CONTACTS,
        payload: users,
    }),
    editContact: (user: IContact): EditContact => ({
        type: ContactActions.EDIT_CONTACT,
        payload: user,
    }),
    removeContact: (key: string): DeleteContact => ({
        type: ContactActions.DELETE_CONTACT,
        payload: key,
    }),
    setIsError: (isError: string): SetIsError => ({
        type: ContactActions.SET_IS_ERROR,
        payload: isError,
    }),
    setIsSearch: (search: string): SetSearch => ({
        type: ContactActions.SET_SEARCH,
        payload: search,
    }),
    addContactAsync: (user: IContact) => async (dispatch: AppDispatch) => {
        try {
            setTimeout(async () => {
                dispatch(ContactActionCreators.setContact(user))
                if (localStorage.getItem("contacts")) {
                    let newContact: any[] = [
                        ...JSON.parse(localStorage.getItem("contacts") + ""),
                        user,
                    ]
                    localStorage.setItem("contacts", JSON.stringify(newContact))
                } else {
                    localStorage.setItem("contacts", JSON.stringify([user]))
                }
            }, 1000)
        } catch (e) {
            dispatch(
                ContactActionCreators.setIsError("Произошла ошибка при логине")
            )
        }
    },
    removeContactAsync: (key: string) => async (dispatch: AppDispatch) => {
        try {
            setTimeout(async () => {
                if (localStorage.getItem("contacts")) {
                    let arrUsers: any[] = JSON.parse(
                        localStorage.getItem("contacts") + ""
                    )
                    let index = arrUsers.findIndex((user) => user.key === key)
                    arrUsers.splice(index, 1)

                    localStorage.setItem("contacts", JSON.stringify(arrUsers))

                    dispatch(ContactActionCreators.removeContact(key))
                }
            }, 1000)
        } catch (e) {
            dispatch(
                ContactActionCreators.setIsError("Произошла ошибка при логине")
            )
        }
    },
    editContactAsync: (user: IContact) => async (dispatch: AppDispatch) => {
        try {
            setTimeout(async () => {
                if (localStorage.getItem("contacts")) {
                    let arrUsers: any[] = JSON.parse(
                        localStorage.getItem("contacts") + ""
                    )
                    let arr = arrUsers.map((el) =>
                        el.key === user.key ? user : el
                    )
                    console.log("arrUsers", arr)

                    localStorage.setItem("contacts", JSON.stringify(arr))
                    dispatch(ContactActionCreators.editContact(user))
                }
            }, 1000)
        } catch (e) {
            dispatch(
                ContactActionCreators.setIsError("Произошла ошибка при логине")
            )
        }
    },
    getContact: () => async (dispatch: AppDispatch) => {
        if (localStorage.getItem("contacts")) {
            let arrUsers: any[] = JSON.parse(
                String(localStorage.getItem("contacts"))
            )
            dispatch(ContactActionCreators.setContacts(arrUsers))
        }
    },
}
