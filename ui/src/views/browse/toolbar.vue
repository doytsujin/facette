<template>
    <v-toolbar>
        <v-button icon="bars"></v-button>
        input
        <v-button dropdown-placement="left" icon="ellipsis-v">
            <template slot="dropdown">
                <v-button icon="cog">{{ $t("label.admin_panel._") }}</v-button>
                <v-separator></v-separator>
                <v-button icon="book">{{ $t("label.documentation") }}</v-button>
            </template>
        </v-button>
    </v-toolbar>
</template>

<style lang="scss" scoped>
.v-toolbar {
    justify-content: space-between;
}
</style>

