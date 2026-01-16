<template>
    <div class="templates-make-new-template-form">

        <ElForm label-width="100">
            <ElFormItem label="名称">
                <ElInput v-model="template.name" placeholder="请输入模板名称"></ElInput>
            </ElFormItem>
            <ElFormItem label="参考页面">
                <ElInput v-model="template.ref" placeholder="请输入参考页面的 URL"></ElInput>
            </ElFormItem>

            <ElFormItem label="提交">
                <ElButton type="success" @click="save"> 保存 </ElButton>
            </ElFormItem>

        </ElForm>

    </div>
</template>

<!----------------------------------------------------------------------------->

<script lang="js">
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus';
import theBase64 from '@/js/base64.js'
import { useAxiosStore } from '@/stores/axios'


const theAxiosStore = useAxiosStore();


export default {

    name: 'templates-make-new-template-form',

    components: {},

    data() {
        const template = {
            name: '未命名',
            ref: '/path/to/ref/page',
        }
        return { template }
    },

    methods: {

        save() {
            let item = this.template;
            let method = 'POST'
            let url = '/api/v1/templates/insert'
            let data = {
                templates: [item]
            }
            theAxiosStore.execute({ method, url, data })
        },

        tryInitRefByQuery() {
            let q = this.$route.query;
            let ref_b64 = q.ref;
            if (ref_b64 == null || ref_b64 == '') {
                return;
            }
            let ref_plain = theBase64.decode(ref_b64);
            this.template.ref = ref_plain;
        },

    },


    mounted() {
        this.tryInitRefByQuery();
    },
}

</script>

<!----------------------------------------------------------------------------->

<style lang="css" scoped></style>
