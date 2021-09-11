import Vue from "vue";
import Vuex from "vuex";
import { name as home_name } from "./views/Home.vue";
import languageData from "./data/languages.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: "EN",
    languages: {
      EN: "English",
      HE: "עברית",
    },
    languageData: {},
    countries: {
      EN: "us",
      HE: "il",
    },
    currentPage: "",
    links: [
      {
        name: home_name,
        icon: "fa-home",
        path: "/",
      },
      {
        name: "Templates",
        icon: "fa-code",
        path: "/templates",
      },
    ],
  },
  getters: {
    getLanguage(state) {
      return state.languages[state.language];
    },
    getCountry(state) {
      return state.countries[state.language];
    },
    getLanguages(state) {
      return state.languages;
    },
    getLanguageData(state) {
      return state.languageData;
    },
    getCurrentPage(state) {
      return state.currentPage;
    },
    getLinks(state) {
      return state.links;
    },
    getCountryFromLanguage: (state) => (language) => state.countries[language],
  },
  mutations: {
    SET_LANGUAGE(state, language) {
      state.language = language;
    },
    SET_LANGUAGE_DATA(state, languageData) {
      state.languageData = languageData;
    },
    SET_CURRENT_PAGE(state, currentPage) {
      state.currentPage = currentPage;
    },
    SET_LINKS(state, links) {
      state.links = links;
    },
  },
  actions: {
    setLanguage({ commit }, language) {
      commit("SET_LANGUAGE", language);
    },
    changeLanguage({ state, commit }, language) {
      let foundLanguage = null;
      for (const key in state.languages) {
        if (language == state.languages[key]) {
          foundLanguage = key;
          break;
        }
      }

      if (foundLanguage !== null) {
        commit("SET_LANGUAGE", foundLanguage);
      }
    },
    loadData({ commit }) {
      commit("SET_LANGUAGE_DATA", languageData);
    },
    setCurrentPage({ commit }, currentPage) {
      commit("SET_CURRENT_PAGE", currentPage);
    },
    setLinks({ commit }, links) {
      commit("SET_LINKS", links);
    },
  },
});
