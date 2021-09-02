const { default: axios } = require("axios");

const URL = 'http://fakeapi.jsonparseronline.com/posts?_limit=10';

export const getAllPosts = () => {
    return axios.get(URL);
}

export const getUserById = (id) => {
    return axios.get(`http://fakeapi.jsonparseronline.com/users/${id}`)
}