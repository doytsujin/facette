<template>
    <div class="v-spinner" v-if="loading">
        <vue-simple-spinner :line-bg-color="bgColor" :line-fg-color="fgColor" :line-size="lineSize"
            :size="size"></vue-simple-spinner>
    </div>
</template>

<script>
import vue from "vue";
import vueSpinner from "vue-simple-spinner";

vue.component(vueSpinner.name, vueSpinner);

export default {
    name: "v-spinner",
    props: {
        lineSize: {
            default: 4,
            type: Number,
        },
        loading: Boolean,
        size: {
            default: 64,
            type: Number,
        },
    },
    data() {
        return {
            bgColor: null,
            fgColor: null,
        };
    },
    methods: {
        updateColors() {
            let style = getComputedStyle(document.body);

            Object.assign(this, {
                bgColor: style.getPropertyValue(`--${this.$store.state.theme}-spinner-background-color`),
                fgColor: style.getPropertyValue("--color-blue"),
            });
        },
    },
    created() {
        this.updateColors();
    },
};
</script>

<style lang="scss" scoped>
.v-spinner {
    align-items: center;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}
</style>
