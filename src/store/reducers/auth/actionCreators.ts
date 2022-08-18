import axios from "axios"

// types & models
import { IUser } from "models/auth"
import {
    AuthActions,
    SetAuthAction,
    SetUserAction,
    SetIsLoading,
    SetIsError,
} from "./types"

// store
import { AppDispatch } from "store"

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({
        type: AuthActions.SET_USER,
        payload: user,
    }),
    setIsAuth: (isAuth: boolean): SetAuthAction => ({
        type: AuthActions.SET_AUTH,
        payload: isAuth,
    }),
    setIsLoading: (isLoading: boolean): SetIsLoading => ({
        type: AuthActions.SET_IS_LOADING,
        payload: isLoading,
    }),
    setIsError: (isError: string): SetIsError => ({
        type: AuthActions.SET_IS_ERROR,
        payload: isError,
    }),
    login:
        (username: string, password: string) =>
        async (dispatch: AppDispatch) => {
            dispatch(AuthActionCreators.setIsLoading(true))
            try {
                setTimeout(async () => {
                    const response = await axios.get<IUser[]>(
                        "https://my-json-server.typicode.com/jovid1242/auth-test/users"
                    )
                    const mockUser = response.data.find(
                        (user) =>
                            user.username === username &&
                            user.password === password
                    )
                    if (mockUser) {
                        localStorage.setItem("auth", "true")
                        localStorage.setItem("username", mockUser.username)
                        dispatch(AuthActionCreators.setIsAuth(true))
                        dispatch(AuthActionCreators.setUser(mockUser))
                    } else {
                        dispatch(
                            AuthActionCreators.setIsError(
                                "Некорректный логин или пароль"
                            )
                        )
                    }
                }, 1000)
            } catch (e) {
                dispatch(
                    AuthActionCreators.setIsError("Произошла ошибка при логине")
                )
            }
        },

    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem("auth")
        localStorage.removeItem("username")
        dispatch(AuthActionCreators.setUser({} as IUser))
        dispatch(AuthActionCreators.setIsAuth(false))
    },
}
