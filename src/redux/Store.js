/* Reducer should contain addUser, checkLoginDetails, getMoves, storeRound, deleteUser */
import {addUser, checkLoginDetails, getMoves, storeRound, deleteUser, getSalt} from "./Thunks";
import {createSlice, configureStore} from "@reduxjs/toolkit";

const initialState = {
    addedUser: false,
    addedUserError: '',
    username: '',
    email: '',
    password: '',
    loggedIn: false,
    loggedInError: '',
    moves: [],
    roundStored: false,
    roundStoredError: '',
    userDeleted: false,
    userDeletedError: '',
    salting: '',
}

const ghostSlice = createSlice({
    name: 'ghost',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(addUser.fulfilled, (state, action) => {
                switch(action.payload.response) {
                    case "Added User":
                        return {
                            ...state,
                            username: action.payload.username,
                            email: action.payload.email,
                            password: action.payload.password,
                            addedUser: true,
                            addedUserError: '',
                            salting: action.payload.salting,
                            loggedIn: true,
                            loggedInError: '',
                        }
                    default:
                        return {
                            ...state,
                            addedUser: false,
                            addedUserError: action.payload.response,
                            loggedIn: false,
                            loggedInError: action.payload.response,
                        }
                }
            })
            .addCase(getSalt.fulfilled, (state, action) => {
                return {
                    ...state,
                    salting: action.payload.salt,
                }
            })

        .addCase(checkLoginDetails.fulfilled, (state, action) => {
            switch (action.payload.response) {
                case 'Password Matches':
                    return {
                        ...state,
                        loggedIn: true,
                        loggedInError: '',
                    }
                default:
                    return {
                        ...state,
                        loggedInError: action.payload.response,
                        loggedIn: false,
                    }
            }
        })
        .addCase(getMoves.fulfilled, (state, action) => {
            return {
                ...state,
                moves: action.payload.moves,
            }
        })
        .addCase(storeRound.fulfilled, (state, action) => {
            switch (action.payload.response) {
                case 'Round stored':
                    return {
                        ...state,
                        roundStored: true,
                        roundStoredError: '',
                    }
                default: {
                    return {
                        ...state,
                        roundStored: false,
                        roundStoredError: action.payload.response,
                    }
                }
            }
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
            switch (action.payload.response) {
                case 'User deleted':
                    return {
                        ...state,
                        userDeleted: true,
                        userDeletedError: '',
                        username: '',
                        email: '',
                        password: '',
                    }
                default:
                    return {
                        ...state,
                        userDeleted: false,
                        userDeletedError: action.payload.response,
                    }
            }
        })
    }
})

const store = configureStore({reducer: ghostSlice.reducer})

export default store;





