import Store from '../redux/Store';
export const computeMoveCall = async (starting, playerStarted, currentLetters, salting) => {
    const response = await fetch(`https://rcf2sag8j1.execute-api.us-east-1.amazonaws.com/default/ComputeMove?starting=${starting}&player-started=${playerStarted}&current-letters=${currentLetters}&salting=${salting}`);
    const data = await response.json();
    return data
}

export const addUserCall = async (username, email, password, salting) => {
    console.log(username, email, password);
    const response = await fetch(`https://iuch3mvdsa.execute-api.us-east-1.amazonaws.com/default/AddUser?username=${username}&email=${email}&password=${password}&salting=${salting}`);
    const data = await response.json();
    return data
}

export const checkLoginDetailsCall = async (email, password) => {
    const response = await fetch(`https://ftim5e8ow2.execute-api.us-east-1.amazonaws.com/default/checkLoginDetails?email=${email}&password=${password}`);
    const data = await response.json();
    return data
}

export const getMovesCall = async (email) => {
    const response = await fetch(`https://irdvbkzny1.execute-api.us-east-1.amazonaws.com/default/getMoves?email=${email}`);
    const data = await response.json();
    return data
}

export const storeRoundCall = async (email, id, playerWon, word) => {
    const response = await fetch(`https://0z17omg7jd.execute-api.us-east-1.amazonaws.com/default/storeRound?email=${email}&id=${id}&player-won=${playerWon}&word=${word}`);
    const data = await response.json();
    return data
}

export const deleteUserCall = async (email) => {
    const response = await fetch(`https://dxx22mxgy4.execute-api.us-east-1.amazonaws.com/default/DeleteUser?email=${email}`);
    const data = await response.json();
    return data
}

export const getSaltCall = async (email) => {
    const response = await fetch(`https://2fo8g8hmjh.execute-api.us-east-1.amazonaws.com/default/GetSalting?email=${email}`);
    return response.json();
}

