import { createStore } from 'vuex'

const store =  createStore({
    state: {
        logs: [],
        numberOfGetRequests: 0,
        numberOfPostRequests: 0,
        loaded: false
    },
    mutations: {
        setLogs: function (state, logs) {
            state.logs = logs;
        },
        setNumberOfGetRequests: function (state, numberOfGetRequests) {
            state.numberOfGetRequests = numberOfGetRequests;
        },
        setNumberOfPostRequests: function (state, numberOfPostRequests) {
            state.numberOfPostRequests =  numberOfPostRequests;
        },
        setLoaded: function (state, loaded) {
            state.loaded = loaded;
        }
    },
    actions: {

    },
    getters: {
        getLogs: function (state) {
            return state.logs;
        },
        getNumberOfGetRequests: function (state) {
            return state.numberOfGetRequests;
        },
        getNumberOfPostRequests: function (state) {
            return state.numberOfPostRequests;
        },
        getLoaded: function (state) {
            return state.loaded;
        }
    }
});

export default store;