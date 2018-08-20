<template>
    <v-sidebar>
        <v-spinner background-color="var(--sidebar-spinner-background-color)" v-if="collections === null"></v-spinner>

        <template v-else>
            <v-label>{{ (collection.options ? collection.options.title : collection.name) ||
                $t("label.browse") }}</v-label>

            <v-button icon="arrow-left" :to="{name: 'browse-collections', params: {id: collection.parent}}"
                v-if="collection.parent">{{ $t("label.goto.parent") }}</v-button>
            <v-button icon="arrow-left" :to="{name: 'browse-root'}"
                v-else-if="params.id">{{ $t("label.goto.home") }}</v-button>
            <v-button icon="folder" :key="collection.id"
                :to="{name: 'browse-collections', params: {id: collection.alias || collection.id}}"
                v-for="collection in collections">{{ collection.label }}</v-button>
            <v-button :key="idx" :to="{params: {id: collection.id}, hash: `#graph${idx}`}"
                v-for="(item, idx) in collection.entries">{{ item.options.title }}</v-button>
        </template>
    </v-sidebar>
</template>

<script>
export default {
    computed: {
        collection() {
            return this.$store.state.collection;
        },
        collections() {
            return this.$store.state.collections;
        },
        params() {
            return this.$route.params;
        },
    },
    methods: {
        fetchCollections() {
            let params = {};
            if (this.params.id) {
                params.parent = this.params.id;
            }

            this.$http.get("/api/v1/library/collections/tree", {
                params: params,
            }).then(response => response.json()).then((response) => {
                this.$store.commit("collections", response);
            }).catch(() => {
                console.error("failed to fetch collections tree");
            });
        },
    },
    watch: {
        "params.id": {
            handler() {
                this.fetchCollections();
            },
            immediate: true,
        },
    },
};
</script>
