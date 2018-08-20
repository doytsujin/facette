import vue from "vue";
import divider from "./divider";
import dropdown from "./dropdown";

[
    divider,
    dropdown,
].forEach(component => vue.component(component.name, component));
