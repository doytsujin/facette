import vue from "vue";
import cursor from "./cursor";
import graph from "./graph";
import legend from "./legend";
import menu from "./menu";
import slides from "./slides";
import tooltip from "./tooltip";
import zoom from "./zoom";

[
    cursor,
    graph,
    legend,
    menu,
    slides,
    tooltip,
    zoom,
].forEach(component => vue.component(component.name, component));

const
    dateFormatFilename = "YYYYMMDDHHmmss",
    dateFormatRFC3339 = "YYYY-MM-DDTHH:mm:ss.SSSZ";

export {dateFormatFilename, dateFormatRFC3339};

const ranges = [
    "1h",
    "3h",
    "1d",
    "3d",
    "7d",
    "1mo",
    "3mo",
    "1y",
];

export {ranges};
