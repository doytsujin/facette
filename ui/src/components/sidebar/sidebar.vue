<template>
    <div class="v-sidebar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "v-sidebar",
    props: {
        value: {
            type: Boolean,
        },
    },
};
</script>

<style lang="scss" scoped>
.v-sidebar {
    background-color: var(--sidebar-background-color);
    color: var(--sidebar-color);
    display: flex;
    flex-direction: column;
    min-width: 18rem;
    padding: 1.5rem 0;
    width: 18rem;

    .v-button /deep/ .content,
    .v-label {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .v-button {
        /deep/ a {
            border-radius: 0;
            color: var(--sidebar-color);
            justify-content: flex-start;
            padding: 0 1.5rem;

            &:active,
            &:focus,
            &:hover {
                background-color: var(--sidebar-button-focus-background-color);
            }
        }

        & + .v-button {
            margin-left: 0;
        }
    }

    .v-label {
        color: var(--sidebar-label-color);
        letter-spacing: 0.1rem;
        padding: 0 1.5rem;
    }

    .v-spinner {
        align-items: center;
        display: flex;
        flex-grow: 1;
        justify-content: center;
    }
}
</style>
