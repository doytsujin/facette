<template>
    <div class="v-app" :class="{'has-toolbar': hasToolbar}" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
import themes from "./themes";

export default {
    name: "v-app",
    data() {
        return {
            hasToolbar: false,
        };
    },
    computed: {
        styles() {
            let theme = themes[this.$store.state.theme];
            if (!theme) {
                return null;
            }

            return Object.keys(theme).reduce((styles, key) => {
                styles[`--${key}`] = theme[key];
                return styles;
            }, {});
        },
    },
    mounted() {
        this.hasToolbar = !!(this.$parent.$refs && this.$parent.$refs.toolbar);
    },
};
</script>

<style lang="scss" scoped>
.v-app {
    background-color: var(--app-background-color);
    color: var(--app-color);
    display: flex;
    height: 100vh;

    .v-toolbar {
        background-color: var(--app-toolbar-background-color);
        color: var(--app-toolbar-color);
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 100;

        /deep/ > .v-button > a {
            color: var(--button-highlight-color);

            &:active,
            &:focus,
            &:hover {
                background-color: var(--button-highlight-focus-background-color);
            }

            .v-icon {
                font-size: 1.1rem;
            }
        }
    }

    &.has-toolbar {
        padding-top: 3rem;
    }
}
</style>
