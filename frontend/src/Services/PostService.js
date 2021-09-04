const { default: axios } = require("axios");

export const getUserById = (id) => {
    return axios.get(`/api/users/${id}`);
}

export const addPost = (description,image,userId) => {
    const data = new FormData();
    data.append('userId',JSON.stringify(userId))
    data.append('description',JSON.stringify(description))
    data.append('myPost', image)
    return axios({
            method: "POST",
            url: "api/post/",
            data: data,
            headers: {
                "Content-Type": "multipart/form-data"
            },
        })
}

export const getTimeLine = (id) => {
    return axios.get(`/api/post/timeline/all/${id}`);
}

export const addLike = (userId,postId) => {
    return axios.put(`/api/post/${postId}/like`,{
        userId
    })
}

export const getPostById = (id) => {
    return axios.get(`/api/post/${id}`);
}