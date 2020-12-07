const axios = require("axios");

export default class ApiService {
  constructor(apiUrl) {
    this._apiUrl = apiUrl;
  }

  // Posts ============================
  // Create ------------------------------
  async postPost(post) {
    return axios
      .post(`${this._apiUrl}/post`, post)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err.response;
      });
  }

  // Read ------------------------------
  // Multiple
  async getPosts() {
    return axios
      .get(`${this._apiUrl}/post`)
      .then((res) => {
        // Change format from id as key to object with id property
        let posts = []
        Object.keys(res.data).map(key => {
          const value = res.data[key];
          posts.push({
            id: key,
            ...value
          })
        })
        return posts;
      })
      .catch((err) => {
        console.log(err);
        throw err.response;
      });
  }

  // Single
  async getPost(id) {
    return axios
      .get(`${this._apiUrl}/post/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err.response;
      });
  }

  // Update ----------------------
  async updatePost(post, id) {
    const { title, body } = post;
    const updatedPost = {
      title,
      body,
    };
    return axios
      .put(`${this._apiUrl}/post/${id}`, updatedPost)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err.response;
      });
  }

  // Delete ----------------------
  async deletePost(id) {
    return axios
      .delete(`${this._apiUrl}/post/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err.response;
      });
  }
}