<template>
    <component :is="connector" :settings="settings"></component>
</template>

<script>
export default {
    name: "v-connector-settings",
    props: {
        connector: {
            required: true,
            type: String,
        },
        settings: {
            required: true,
            type: Object,
        },
    },
    components: {
        facette:  () => import("./facette"),
        graphite: () => import("./graphite"),
        influxdb: () => import("./influxdb"),
        kairosdb: () => import("./kairosdb"),
        rrd:      () => import("./rrd"),
    },
};
</script>
