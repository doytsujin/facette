<template>
    <div class="v-flex" :class="direction">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "v-flex",
    props: {
        direction: {
            default: "row",
            type: String,
        },
    },
};
</script>

<style lang="scss" scoped>
.v-flex {
    display: flex;
    flex-grow: 1;

    &.column {
        height: auto;
    }

    &.row {
        flex-direction: row;
    }
}
</style>
