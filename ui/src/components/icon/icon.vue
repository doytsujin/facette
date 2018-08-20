<template>
    <div class="v-icon">
        <font-awesome-icon :icon="icon"></font-awesome-icon>
    </div>
</template>

<script>
import vue from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";

import {
    faArrowLeft,
    faArrowRight,
    faBars,
    faBook,
    faChevronDown,
    faChevronUp,
    faCog,
    faEllipsisV,
    faFolder,
    faSync,
} from "@fortawesome/free-solid-svg-icons";

vue.component(FontAwesomeIcon.name, FontAwesomeIcon);

library.add(
    faArrowLeft,
    faArrowRight,
    faBars,
    faBook,
    faChevronDown,
    faChevronUp,
    faCog,
    faEllipsisV,
    faFolder,
    faSync,
);

export default {
    name: "v-icon",
    props: {
        icon: {
            type: [Array, String],
        },
    },
};
</script>
