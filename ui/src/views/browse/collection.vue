<template>
    <v-flex>
        <v-toolbar direction="column">
            <v-button dropdown-placement="right" icon="sync">
                <template slot="dropdown">
                    <v-button>{{ $t(`label.${params.type}.refresh`) }}</v-button>
                    <v-separator></v-separator>
                    <v-button>{{ $t("label.set_interval") }}</v-button>
                </template>
            </v-button>
        </v-toolbar>

        <v-content class="has-toolbar">
            <v-spinner v-if="loading"></v-spinner>

            <v-message type="placeholder" v-else-if="!loading && errored">{{ $t("mesg.fetch_failed") }}</v-message>

            <template v-else>
                <template v-for="(graph, idx) in collection.entries">
                    <v-graph :attributes="Object.assign({}, collection.attributes, graph.attributes)"
                        :graph="graph.graph" :graph-index="idx" :key="idx" :options.sync="graph.options"></v-graph>
                </template>
            </template>
        </v-content>
    </v-flex>
</template>

<script>
export default {
    data() {
        return {
            errored: false,
            loading: false,
        };
    },
    computed: {
        collection() {
            return this.$store.state.collection;
        },
        params() {
            return this.$route.params;
        },
    },
    methods: {
        fetchCollection() {
            this.errored = false;
            this.loading = true;

            this.$http.get(`/api/v1/library/${this.params.type}/${this.params.id}`, {
                params: {
                    expand: 1,
                    fields: "id,name,entries.graph,entries.options,entries.attributes,options,attributes,parent",
                },
            }).then(response => response.json()).then((response) => {
                if (this.type == "graph") {
                    this.$store.commit("collection", {
                        id: this.params.id,
                        name: response.name,
                        entries: [{
                            graph: response.id,
                            options: response.options,
                        }],
                        options: {
                            title: response.name || null,
                        },
                    });
                } else {
                    this.$store.commit("collection", response);
                }

                this.loading = false;
            }).catch(() => {
                console.error("failed to fetch collection");

                this.errored = true;
                this.loading = false;
            });
        },
    },
    watch: {
        "params.id": {
            handler() {
                this.fetchCollection();
            },
            immediate: true,
        },
    },
};
</script>
