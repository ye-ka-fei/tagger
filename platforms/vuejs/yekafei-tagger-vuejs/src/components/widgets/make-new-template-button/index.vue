<template>
    <ElButton type="default" @click='openNewTemplatePage'> 根据当前页面创建新模板 </ElButton>
</template>

<!----------------------------------------------------------------------------->

<script lang="js">
import { ElButton } from 'element-plus';

import theBase64 from '@/js/base64.js'


// functions


// function innerCopyItems(src, dst) {
//     for (let name in src) {
//         dst[name] = src[name]
//     }
// }


// function innerMakeQueryString(query) {
//     let str = '?'
//     let sep = '';
//     for (let name in query) {
//         let value = query[name];
//         str = str + sep + name + '=' + value;
//         sep = '&'
//     }
//     return str;
// }


// config

export default {

    name: 'widgets-make-new-template-button',

    methods: {

        getCurrentPageURL() {
            return this.$route.fullPath;
        },

        openNewTemplatePage() {
            let url1 = this.getCurrentPageURL();
            let b64 = theBase64.encode(url1);
            let url2 = '/templates/new?ref=' + b64;

            console.log('from = ' + url1)
            console.log('to   = ' + url2)

            window.open(url2, '_blank')
        },

    }

}

</script>

<!----------------------------------------------------------------------------->

<style lang="css" scoped></style>
