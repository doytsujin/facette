<template>
    <v-flex class="v-toolbar" :direction="direction">
        <slot></slot>
    </v-flex>
</template>

<script>
export default {
    name: "v-toolbar",
    props: {
        direction: {
            default: "row",
            type: String,
        },
    },
};
</script>

<style lang="scss" scoped>
.v-toolbar {
    background-color: var(--toolbar-background-color);
    display: flex;
    height: 3rem;
    line-height: 3rem;
    max-height: 3rem;

    &.column {
        height: auto;
        max-height: none;
        max-width: 3rem;
        width: 3rem;
    }

    /deep/ > .v-button {
        height: 3rem;

        a {
            border-radius: 0;
        }

        & > a {
            height: 100%;

            &:active,
            &:focus,
            &:hover {
                background-color: var(--toolbar-button-focus-background-color);
            }
        }

        &.icon {
            width: 3rem;
        }

        & + .v-button {
            margin-left: 0;
        }
    }
}
</style>
