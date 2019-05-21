/*
export const isAuthenticated = () => JSON.parse(localStorage.getItem("login"));

export const setAuthenticated = (login) => localStorage.setItem("login", login)

export const isPermission = () => false;
*/



export const setToken = (token) => {localStorage.setItem("token", token)}
export const getToken = () => localStorage.getItem("token")
export const deleteToken = () => {localStorage.removeItem("token")}
