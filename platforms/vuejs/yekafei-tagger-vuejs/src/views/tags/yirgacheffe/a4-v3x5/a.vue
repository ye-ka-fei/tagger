<template>
  <main-frame>

    <template #client-tool-bar>
      <MyNoFrameButton> </MyNoFrameButton>
    </template>

    <MySheet> </MySheet>
  </main-frame>
</template>

<script lang="js">

import MySheet from '@/components/tags/yirgacheffe/a4-v-3x5/sheet-a.vue'
import MyNoFrameButton from '@/components/widgets/no-frame-button/index.vue'


export default {

  name: 'views-tags-yirgacheffe-a4-3x5v-a-edit',

  components: { MySheet, MyNoFrameButton },

  data() {
    return {}
  },

}

</script>

<style></style>
