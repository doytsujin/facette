<template>
    <div class="v-dropdown" :class="placement">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "v-dropdown",
    props: {
        placement: {
            default: "right",
            type: String,
        },
    },
};
</script>

<style lang="scss" scoped>
.v-dropdown {
    background-color: var(--app-background-color);
    border-radius: 0.2rem;
    box-shadow: 0 0.15rem 0.5rem var(--dropdown-box-shadow-color);
    color: var(--app-color);
    cursor: default;
    line-height: 2rem;
    padding: 0.35rem 0;
    position: absolute;
    z-index: 200;

    &.left,
    &.right {
        top: 100%;
    }

    &.left {
        right: 0;
    }

    &.right {
        left: 0;
    }

    &.left .v-dropdown,
    &.right .v-dropdown {
        top: -0.35rem;
    }

    &.left .v-dropdown {
        left: auto;
        right: 100%;
    }

    &.right .v-dropdown {
        left: 100%;
        right: auto;
    }

    .v-button {
        display: block;
        line-height: 1.75rem;

        /deep/ a {
            border-radius: 0;

            &:focus,
            &:hover {
                background-color: var(--dropdown-focus-background-color);
                color: var(--dropdown-focus-color);
            }

            > .v-icon {
                text-align: center;
                width: 1.5rem;
            }
        }

        & + .v-button {
            margin: 0;
        }
    }

    .v-separator {
        background-color: var(--dropdown-separator-background-color);
        height: 1px;
        margin: 0.35rem 0;
    }
}
</style>
