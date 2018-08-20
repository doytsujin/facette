<template>
    <div class="v-content">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "v-content",
};
</script>

<style lang="scss" scoped>
.v-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    padding: 2rem;
    position: relative;

    .v-message.placeholder,
    .v-spinner {
        align-items: center;
        display: flex;
        flex-grow: 1;
        justify-content: center;
    }
}
</style>
