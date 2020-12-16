const axios = require("axios");

export default class ApiService {
  constructor(apiUrl) {
    this._apiUrl = apiUrl;
  }

  __formatPosts(data) {
    // Change format from id as key to object with id property
    let posts = [];
    Object.keys(data).map(key => {
      const value = data[key];
      posts.push({
        id: key,
        ...value
      });
    });
    return posts;
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
        return this.__formatPosts(res.data)[0];
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
        const foundPosts = this.__formatPosts(res.data);
        return foundPosts;
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
        const foundPost = this.__formatPosts(res.data)[0];
        return foundPost;
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
        const updatedPost = this.__formatPosts(res.data)[0];
        return updatedPost;
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
        const deletedPost = this.__formatPosts(res.data)[0];
        return deletedPost;
      });
  }
}
