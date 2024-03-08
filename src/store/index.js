import { createStore } from 'vuex'

const store =  createStore({
    state: {
        logs: [],
        filteredLogs: [],
        numberOfGetRequests: 0,
        numberOfPostRequests: 0,
        numberOfPutRequests: 0,
        loaded: false
    },
    mutations: {
        setLogs: function (state, logs) {
            state.logs = logs;
            state.filteredLogs = logs;
        },
        resetFilteredLogs: function (state) {
            state.filteredLogs = state.logs;
        },
        setFilteredLogs: function (state, filteredLogs) {
            state.filteredLogs = filteredLogs;
        },
        setNumberOfGetRequests: function (state, numberOfGetRequests) {
            state.numberOfGetRequests = numberOfGetRequests;
        },
        setNumberOfPostRequests: function (state, numberOfPostRequests) {
            state.numberOfPostRequests =  numberOfPostRequests;
        },
        setNumberOfPutRequests: function (state, numberOfPutRequests) {
            state.numberOfPutRequests =  numberOfPutRequests;
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
        getNumberOfPutRequests: function (state) {
            return state.numberOfPutRequests;
        },
        getLoaded: function (state) {
            return state.loaded;
        }
    }
});

export default store;