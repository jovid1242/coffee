import { AuthActionCreators } from "./auth/actionCreators"
import { ContactActionCreators } from "./contacts/actionCreators"

export const allActionCreators = {
    ...AuthActionCreators,
    ...ContactActionCreators,
}
