import { createStore } from 'vuex'

const store =  createStore({
    state: {
        logs: [],
        filteredLogs: [],
        numberOfGetRequests: 0,
        numberOfPostRequests: 0,
        numberOfPutRequests: 0,
        loaded: false,
        isTableVisible: true,
        isDonutVisible: false,
        eu_1_region: 0,
        eu_2_region: 0,
        eu_other_region: 0,
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
        },
        setIsTableVisible: function (state, isTableVisible) {
            state.isTableVisible = isTableVisible;
        },
        setIsDonutVisible: function (state, isDonutVisible) {
            state.isDonutVisible = isDonutVisible;
        },
        setNumbersOfEu1Regions: function (state, eu_1_region) {
            state.eu_1_region = eu_1_region;
        },
        setNumbersOfEu2Regions: function (state, eu_2_region) {
            state.eu_2_region = eu_2_region;
        },
        setNumbersOfEuOtherRegions: function (state, eu_other_region) {
            state.eu_other_region = eu_other_region;
        },
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
        },
        getIsTableVisible: function (state) {
            return state.isTableVisible;
        },
        getIsDonutVisible: function (state) {
            return state.isDonutVisible;
        },
        getEu1RegionRequest: function (state) {
            return state.eu_1_region;
        },
        getEu2RegionRequest: function (state) {
            return state.eu_2_region;
        },
        getEuOtherRegionRequest: function (state) {
            return state.eu_other_region;
        },
    }
});

export default store;