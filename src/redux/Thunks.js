import {
    addUserCall,
    checkLoginDetailsCall,
    deleteUserCall,
    getMovesCall,
    storeRoundCall,
    computeMoveCall,
    getSaltCall,
} from "../api/APICalls";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addUser = createAsyncThunk(
    'ghost/addUser',
    async (action) => {
        const response = await addUserCall(action.username, action.email, action.password, action.salting)
        return {username: action.username, email: action.email, password: action.password, salting: action.salting, response: response}
    }
)

export const checkLoginDetails = createAsyncThunk(
    'ghost/checkLoginDetails',
    async (action) => {
        const response = await checkLoginDetailsCall(action.email, action.password)
        return {response: response}
    }
)

export const getMoves = createAsyncThunk(
    'ghost/getMoves',
    async (action) => {
        const response = await getMovesCall(action.email)
        return {moves: response}
    }
)

export const storeRound = createAsyncThunk(
    'ghost/storeRound',
    async (action) => {
        const response = await storeRoundCall(action.email, action.id, action.playerWon, action.word)
        return {response: response}
    }
)

export const deleteUser = createAsyncThunk(
    'ghost/deleteUser',
    async (action) => {
        const response = await deleteUserCall(action.email)
        return {response: response}
    }
)

export const computeMove = createAsyncThunk(
    'ghost/computeMove',
    async (action) => {
        const response = await computeMoveCall(action.starting, action.playerStarted, action.currentLetters, action.salting)
        if (' ' in response) {
            return {
                word: response.split(' ')[0],
                fullWord: response.split(' ')[1],
            }
        }
        const random = Math.floor(Math.random() * response.length)
        return {word: response[random], fullWord: response}
    }
)

export const getSalt = createAsyncThunk(
    'ghost/getSalt',
    async (action) => {
        const response = await getSaltCall(action.email)
        return {salt: response}
    }
)