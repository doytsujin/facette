import vue from "vue";
import vuex from "vuex";
import vuexPersistedState from "vuex-persistedstate";

vue.use(vuex);

const mutation = (prop, state, value) => {
    state[prop] = value;
};

const props = {
    collection: {},
    collections: null,
    // connectors: [],
    // locale: "en",
    // readOnly: false,
    // sidebar: true,
    theme: "light",
};

export default new vuex.Store({
    mutations: Object.keys(props).reduce((mutations, prop) => {
        mutations[prop] = mutation.bind(null, prop);
        return mutations;
    }, {}),
    plugins: [
        vuexPersistedState({
            key: "facette",
            reducer: state => ({
                // locale: state.locale,
                // sidebar: state.sidebar,
                theme: state.theme,
            }),
        }),
    ],
    state: props,
});
