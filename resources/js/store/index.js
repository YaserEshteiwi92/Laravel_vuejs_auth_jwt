import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        user: null,
        token: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
        setToken(state, payload) {
            state.token = payload;
        }
    },
    actions: {
        login({ commit }, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/api/auth/login", payload)
                    .then(response => {
                        commit("setUser", response.data.user);
                        commit("setToken", response.data.access_token);
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        register({ commit }, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/api/auth/register", payload)
                    .then(response => {
                        commit("setUser", response.data.user);
                        commit("setToken", response.data.access_token);
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        me({ commit , state }) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/api/auth/me", {
                        token: state.token
                    })
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        commit("setToken", "");
                        commit("setUser", "");
                        reject(error);
                    });
            });
        },
        logout({ commit, state }) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/api/auth/logout", {
                        token: state.token
                    })
                    .then(response => {
                        commit("setUser", "");
                        commit("setToken", "");
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        }
    },

    getters: {
        getUser(state) {
            return state.user;
        },
        getToken(state) {
            return state.token;
        }
    }
});
