<template>
    <div>
        <div v-show="!hideFrame">
            <MyHeader> </MyHeader>
            <hr />
        </div>

        <div class="client-tool-bar" v-show="!hideFrame">
            <MyToolbar>
                <slot name="client-tool-bar"></slot>
            </MyToolbar>
            <hr />
        </div>

        <MyEntity>
            <slot></slot>
        </MyEntity>

        <div v-show="!hideFrame">
            <hr />
            <MyFooter> </MyFooter>
        </div>
    </div>
</template>

<script lang="js">

import MyHeader from './header.vue'
import MyEntity from './entity.vue'
import MyFooter from './footer.vue'
import MyToolbar from '@/components/widgets/toolbar/index.vue'


export default {

    name: 'frames-default-index',

    components: { MyHeader, MyEntity, MyFooter, MyToolbar },

    computed: {
        hideFrame() {
            const qname = 'no-frame'
            let value = this.$route.query[qname]
            return ((value == '1') | (value == 'yes') | (value == true));
        },
    },

}

</script>
