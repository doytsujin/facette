import vue from "vue";
import vueI18n from "vue-i18n";

vue.use(vueI18n);

import {messages} from "./locales";

export default new vueI18n({
    locale: "en",
    fallbackLocale: "en",
    messages,
});
