<template>
    <article>
        <v-actionbar>
            <h1>
                {{ $t("label.system") }}
                <v-icon class="v-separator" icon="chevron-right"></v-icon>
                {{ $t("label.info._") }}
            </h1>

            <v-spacer></v-spacer>

            <a href="https://facette.io/" rel="external" target="_blank">{{ $t("label.info.website") }}</a>
        </v-actionbar>

        <v-spinner :loading="loading" v-if="loading"></v-spinner>

        <v-message type="placeholder" v-else-if="!loading && error">
            <p>{{ $t("mesg.fetch_failed") }}</p>
        </v-message>

        <dl v-else>
            <dt v-if="info.version">{{ $t("label.info.version") }}</dt>
            <dd v-if="info.version">{{ info.version }}</dd>

            <dt v-if="info.branch">{{ $t("label.info.branch") }}</dt>
            <dd v-if="info.branch">{{ info.branch }}</dd>

            <dt v-if="info.revision">{{ $t("label.info.revision") }}</dt>
            <dd v-if="info.revision">{{ info.revision }}</dd>

            <dt v-if="info.compiler">{{ $t("label.info.compiler") }}</dt>
            <dd v-if="info.compiler">{{ info.compiler }}</dd>

            <dt v-if="info.build_date">{{ $t("label.info.build_date") }}</dt>
            <dd v-if="info.build_date">{{ info.build_date }}</dd>

            <dt>{{ $t("label.info.connectors") }}</dt>
            <dd :key="name" v-for="name in connectors">{{ name }}</dd>
        </dl>
    </article>
</template>

<script>
export default {
    data() {
        return {
            error: false,
            info: {},
            loading: true,
        };
    },
    computed: {
        connectors() {
            return this.$store.state.connectors;
        },
    },
    methods: {
        fetchVersion() {
            this.$http.get("/api/v1/version").then(response => response.json()).then((info) => {
                this.info = info;

                this.error = false;
                this.loading = false;
            }).catch((response) => {
                this.error = true;
                this.loading = false;

                this.$notifier.enqueue(this.$t("mesg.fetch_error", [response.statusText]), "error");
            });
        },
    },
    mounted() {
        this.fetchVersion();
    },
};
</script>
