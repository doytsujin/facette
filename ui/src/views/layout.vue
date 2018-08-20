<template>
    <v-app>
        <router-view name="toolbar" ref="toolbar"></router-view>
        <router-view name="sidebar"></router-view>
        <router-view></router-view>
    </v-app>
</template>

<style lang="scss">
@font-face {
    font-display: swap;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    src: local("Roboto Regular"),
         local("Roboto-Regular"),
         url("~typeface-roboto/files/roboto-latin-400.woff2") format("woff2"),
         url("~typeface-roboto/files/roboto-latin-400.woff") format("woff");
}

@font-face {
    font-display: swap;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    src: local("Roboto Medium"),
         local("Roboto-Medium"),
         url("~typeface-roboto/files/roboto-latin-500.woff2") format("woff2"),
         url("~typeface-roboto/files/roboto-latin-500.woff") format("woff");
}

* {
    box-sizing: border-box;
}

html,
body {
    margin: 0;
    min-height: 100vh;
    padding: 0;
}

body {
    font-family: "Roboto", sans-serif;
    font-size: 13px;
    line-height: 1.5;
}

a {
    color: inherit;
}

b, h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
}

::placeholder {
    opacity: 0.35;
}
</style>
