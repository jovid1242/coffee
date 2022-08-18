import { ContactAction, ContactActions, ContactState } from "./types"

const initialState: ContactState = {
    users: [],
    isError: "",
    search: "",
}

export default function contactReduser(
    state = initialState,
    action: ContactAction
): ContactState {
    switch (action.type) {
        case ContactActions.SET_CONTACT:
            return {
                ...state,
                users: [...state.users, action.payload],
            }
        case ContactActions.SET_CONTACTS:
            return {
                ...state,
                users: action.payload,
            }
        case ContactActions.EDIT_CONTACT:
            return {
                ...state,
                users: state.users.map((user) =>
                    user.key === action.payload.key ? action.payload : user
                ),
            }
        case ContactActions.DELETE_CONTACT:
            return {
                ...state,
                users: state.users.filter(({ key }) => key !== action.payload),
            }
        case ContactActions.SET_IS_ERROR:
            return { ...state, isError: action.payload }
        case ContactActions.SET_SEARCH:
            return { ...state, search: action.payload }
        default:
            return state
    }
}
