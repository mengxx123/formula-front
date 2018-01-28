<template>
    <my-page title="公式编辑器">
        <div id="kfEditorContainer" class="kf-editor"></div>
        <ui-raised-button class="btn" primary label="导出为 PNG 图片" @click="downloadPng" />
        <img :src="resultSrc" v-if="resultSrc">
    </my-page>
</template>

<script>
    const kf = window.kf
//    const saveAs = window.saveAs

    export default {
        data () {
            return {
                resultSrc: null
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let factory = kf.EditorFactory.create(document.getElementById('kfEditorContainer'), {
                    render: {
                        fontsize: 40
                    },
                    resource: {
                        path: '/static/resource/'
                    }
                })
                factory.ready(function (KFEditor) {
                    // this指向KFEditor
                    this.execCommand('render', '\\placeholder')
                    this.execCommand('focus')
                    this.registerCommand('clear', this, function (str) {
                        console.log('情况' + str)
                        // $$.publish( 'data.select', '\\approx')
                    })
                    this.execCommand('clear', 'all')
                    window.kfe = this
                })
            },
            downloadPng() {
                window.kfe.execCommand('get.image.data', data => {
                    console.log(data)
                    console.log(data.img)
                    this.resultSrc = data.img
//                    let file = new File(data.img, '测试.png', {type: 'image/png'})
//                    saveAs(file)
//                    jQuery('#base64').val(data.img)
//                    jQuery('#form-download').submit()
                })
            }
        }
    }
</script>

<style scoped>
    .btn {
        display: block;
    }
</style>
