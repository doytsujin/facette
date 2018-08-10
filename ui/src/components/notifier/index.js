import vue from "vue";
import notifier from "./notifier";

const plugin = {
    install(vue) {
        this.event = new vue();

        vue.prototype.$notifier = {
            enqueue(text, type = "info") {
                plugin.event.$emit("enqueue", text, type);
            },
        };

        vue.component(notifier.name, notifier);
    },
};

vue.use(plugin);

// TODO: useful?
// vue.config.errorHandler = (err, vue) => {
//     vue.$notifier.enqueue(err.message, "error");
// };

export default plugin;
