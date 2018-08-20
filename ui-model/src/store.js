import vue from "vue";
import vuex from "vuex";
import vuexPersistedState from "vuex-persistedstate";

vue.use(vuex);

const mutation = (prop, state, value) => {
    state[prop] = value;
};

const props = {
    connectors: [],
    locale: "en",
    readOnly: false,
    sidebar: true,
    theme: "light",
};

export default new vuex.Store({
    actions: {
        init(ctx) {
            vue.http({method: "OPTIONS", url: "/api/v1"}).then(response => response.json()).then((response) => {
                ctx.commit("connectors", response.connectors);
                ctx.commit("readOnly", Boolean(response.read_only));
            }).catch(() => {
                throw new Error("failed to retrieve instance information");
            });
        },
    },
    mutations: Object.keys(props).reduce((mutations, prop) => {
        mutations[prop] = mutation.bind(null, prop);
        return mutations;
    }, {}),
    plugins: [
        vuexPersistedState({
            key: "facette",
            reducer: state => ({
                locale: state.locale,
                sidebar: state.sidebar,
                theme: state.theme,
            }),
        }),
    ],
    state: props,
});
