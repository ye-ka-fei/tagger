<template>
    <ElButton type="primary" @click='openNewPage'> 显示无框架页面 </ElButton>
</template>

<!----------------------------------------------------------------------------->

<script lang="js">
import { ElButton } from 'element-plus';


// functions


function innerCopyItems(src, dst) {
    for (let name in src) {
        dst[name] = src[name]
    }
}


function innerMakeQueryString(query) {
    let str = '?'
    let sep = '';
    for (let name in query) {
        let value = query[name];
        str = str + sep + name + '=' + value;
        sep = '&'
    }
    return str;
}


// config

export default {

    name: 'widgets-no-frame-button',


    methods: {

        openNewPage() {
            let src_query = this.$route.query;
            let dst_query = {};
            innerCopyItems(src_query, dst_query);
            dst_query['no-frame'] = 'yes';
            let qstr = innerMakeQueryString(dst_query);
            let location2 = this.$router.resolve(qstr);
            let to = location2.fullPath;
            console.log('to=' + to)
            window.open(to, '_blank')
        },

    }

}

</script>

<!----------------------------------------------------------------------------->

<style lang="css" scoped></style>
