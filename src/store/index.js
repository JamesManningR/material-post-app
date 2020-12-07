import Vue from "vue";
import Vuex from "vuex";

import * as post from "./modules/posts";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    post
  }
});
