import vue from "vue";
import modal from "./modal";

const plugin = {
    install(vue) {
        this.event = new vue();

        vue.prototype.$modal = {
            hide() {
                plugin.event.$emit("toggle", false);
            },
            show(params) {
                plugin.event.$emit("toggle", true, params);
            },
        };

        vue.component(modal.name, modal);
    },
};

vue.use(plugin);

export default plugin;
