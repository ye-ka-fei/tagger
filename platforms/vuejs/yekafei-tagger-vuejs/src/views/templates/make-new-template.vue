<template>
    <user-frame>
        <div class="">
            <h1> 新建模板 </h1>

            <MyForm> </MyForm>
        </div>
    </user-frame>
</template>

<!----------------------------------------------------------------------------->

<script lang="js">

import MyForm from '@/components/templates/make-new-template-form.vue'

export default {

    name: 'views-templates-make-new',

    components: { MyForm },

    data() { },
    methods: {}
}

</script>

<!----------------------------------------------------------------------------->

<style lang="css" scoped></style>
