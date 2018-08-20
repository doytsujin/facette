import vue from "vue";
import block from "./block";
import form from "./form";

[
    block,
    form,
].forEach(component => vue.component(component.name, component));
