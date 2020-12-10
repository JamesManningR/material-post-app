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
      .catch(err => {
        throw err.response;
      })
      .then(res => {
        console.log(res.data);
        return Object.values(res.data)[0];
      });
  }

  // Read ------------------------------
  // Multiple
  async getPosts() {
    return axios
      .get(`${this._apiUrl}/post`)
      .catch(err => {
        console.log(err);
        throw err.response;
      })
      .then(res => {
        // Change format from id as key to object with id property
        let posts = [];
        Object.keys(res.data).map(key => {
          const value = res.data[key];
          posts.push({
            id: key,
            ...value
          });
        });
        return posts;
      });
  }

  // Single
  async getPost(id) {
    return axios
      .get(`${this._apiUrl}/post/${id}`)
      .catch(err => {
        throw err.response;
      })
      .then(res => {
        return res.data[0];
      });
  }

  // Update ----------------------
  async updatePost(post, id) {
    const { title, body } = post;
    const updatedPost = {
      title,
      body
    };
    return axios
      .put(`${this._apiUrl}/post/${id}`, updatedPost)
      .catch(err => {
        throw err.response;
      })
      .then(res => {
        return res.data[0];
      });
  }

  // Delete ----------------------
  async deletePost(id) {
    return axios
      .delete(`${this._apiUrl}/post/${id}`)
      .catch(err => {
        throw err.response;
      })
      .then(res => {
        return res.data[0];
      });
  }
}
