<template>
    <span class="v-icon" :class="classes">
        <font-awesome-icon :icon="icon" :spin="options && options.spin" @click="$emit('click', $event)"
            @keypress="$emit('keypress', $event)"></font-awesome-icon>
    </span>
</template>

<script>
import vue from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

vue.component(FontAwesomeIcon.name, FontAwesomeIcon);

import {
    faCalendarAlt,
    faCircle,
    faClock,
    faDotCircle,
    faSquare,
} from "@fortawesome/free-regular-svg-icons";

import {
    faArrowLeft,
    faArrowRight,
    faArrowsAltV,
    faBars,
    faBullseye,
    faCaretRight,
    faChartArea,
    faCheck,
    faCheckCircle,
    faCheckSquare,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faChevronUp,
    faClone,
    faCog,
    faColumns,
    faDownload,
    faEllipsisV,
    faExclamationCircle,
    faExclamationTriangle,
    faFilter,
    faFolder,
    faHistory,
    faInfoCircle,
    faLanguage,
    faPaintBrush,
    faPencilAlt,
    faPlay,
    faPlug,
    faPlus,
    faQuestionCircle,
    faSearch,
    faSearchMinus,
    faSearchPlus,
    faSignOutAlt,
    faStop,
    faStopCircle,
    faSync,
    faTh,
    faTimes,
    faTimesCircle,
    faTrash,
    faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";

import {library} from "@fortawesome/fontawesome-svg-core";

library.add(
    faArrowLeft,
    faArrowRight,
    faArrowsAltV,
    faBars,
    faBullseye,
    faCalendarAlt,
    faCaretRight,
    faChartArea,
    faCheck,
    faCheckCircle,
    faCheckSquare,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faChevronUp,
    faCircle,
    faClock,
    faClone,
    faCog,
    faColumns,
    faDotCircle,
    faDownload,
    faEllipsisV,
    faExclamationCircle,
    faExclamationTriangle,
    faFilter,
    faFolder,
    faHistory,
    faInfoCircle,
    faLanguage,
    faPaintBrush,
    faPencilAlt,
    faPlay,
    faPlug,
    faPlus,
    faQuestionCircle,
    faSearch,
    faSearchMinus,
    faSearchPlus,
    faSignOutAlt,
    faSquare,
    faStop,
    faStopCircle,
    faSync,
    faTh,
    faTimes,
    faTimesCircle,
    faTrash,
    faWindowMaximize,
);

export default {
    name: "v-icon",
    props: {
        icon: [Object, Array, String],
        options: Object,
    },
    data() {
        return {
            classes: {},
        };
    },
    watch: {
        options: {
            handler(to) {
                if (!to) {
                    this.classes = null;
                    return;
                }

                this.classes = {
                    [`speed-${to.speed}`]: to.spin && to.speed,
                };
            },
            immediate: true,
        },
    },
};
</script>

<style lang="scss" scope>
.v-icon {
    align-items: center;
    display: inline-flex;
    justify-content: center;

    &.speed-2x .fa-spin {
        animation: fa-spin 1s infinite linear;
    }
}
</style>
