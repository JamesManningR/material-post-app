import ApiService from '../../services/api.service';

const api = new ApiService(process.env.VUE_APP_API_URL);

export const namespaced = true;

export const state = {
  posts: [],
  post: {},
};

export const mutations = {
  ADD_POST(state, post) {
    state.posts.push(post);
  },
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  RESET_POSTS(state) {
    state.posts = {};
  },
  SET_POST(state, post) {
    state.post = post;
  },
  RESET_POST(state) {
    state.post = {};
  },
  UPDATE_POST(state, { post, id }) {
    state.posts[id] = post;
  },
  REMOVE_POST(state, id) {
    const deletedPostIndex = state.posts.findIndex(post => post.id == id);
    console.log(deletedPostIndex);
    state.posts.splice(deletedPostIndex, 1);
  },
};

export const actions = {
  async createPost({ commit }, post) {
    let createdPost
    try {
      createdPost = await api.postPost(post);
    } catch (err) {
      throw err;
    }
    commit("ADD_POST", createdPost);
    commit("SET_POST", {});
    return createdPost;
  },
  async fetchPosts({ commit }) {
    let posts
    try {
      posts = await api.getPosts();
    } catch (err) {
      throw err;
    }
    commit("SET_POSTS", posts);
    return posts;
  },
  async fetchPost({ commit }, id) {
    let posts;
    try {
      post = await api.getPost(id);
    } catch (err) {
      throw err;
    }
    commit("SET_POST", post);
    return post;
  },
  resetPost({ commit }) {
    commit("RESET_POST");
  },
  async updatePost({ commit }, postInfo) {
    const { post, id } = postInfo;
    let updatedPost
    try {
      updatedPost = await api.updatePost(post, id);
    } catch (err) {
      throw err.data.message;
    }
    commit("UPDATE_POST", { post, id });
    return post;
  },
  async deletePost({ commit }, postId) {
    try {
      await api.deletePost(postId);
    } catch (err) {
      throw err;
    }
    commit("REMOVE_POST", postId);
    return postId;
  },
};

export const getters = {
  orderedPosts(state) {
    let sortedPosts = state.posts.sort((a, b) => {
      return a.dateUpdated < b.dateUpdated;
    });
    return sortedPosts;
  }
}