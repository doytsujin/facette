<template>
    <div class="v-message" :class="type">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "v-message",
    props: {
        type: {
            default: "info",
            type: String,
        },
    },
};
</script>

<style lang="scss" scoped>
.v-message {
    line-height: 2rem;
}
</style>
