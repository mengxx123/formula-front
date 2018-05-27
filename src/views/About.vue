<template>
    <my-page title="关于">
        <div>这是关于页面</div>
        <div>版本：{{ version }}</div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                version: ''
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
</style>
