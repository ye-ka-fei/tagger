<template>
  <main-frame>

    <template #client-tool-bar>
      <MyNoFrameButton> </MyNoFrameButton>
      <MyNewTemplateButton> </MyNewTemplateButton>
    </template>

    <MySheet> </MySheet>
  </main-frame>
</template>

<script lang="js">

import MySheet from '@/components/tags/yirgacheffe/a4-h-5x3/sheet-a.vue'
import MyNoFrameButton from '@/components/widgets/no-frame-button/index.vue'
import MyNewTemplateButton from '@/components/widgets/make-new-template-button/index.vue'

export default {

  name: 'views-tags-yirgacheffe-a4-3x5v-a-edit',

  components: { MySheet, MyNoFrameButton, MyNewTemplateButton },

  data() {
    return {}
  },

}

</script>

<style></style>
