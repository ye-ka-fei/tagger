<template>
  <MySheet>
    <MyCell v-for="cell in cells" :index="cell.index" :name="cell.name" :label="cell.label" :info="cell"> </MyCell>
  </MySheet>
</template>

<script lang="js">

import MyCell from './cell-a.vue'
import MySheet from '@/components/sheets/a4/a4_vertical_3x5/sheet.vue'

export default {

  name: 'tags-yirgacheffe-a4-3x5v-a-sheet',

  components: { MySheet, MyCell },


  data() {
    const cells = [];
    const count_cells = 15;
    for (let i = 0; i < count_cells; i++) {
      let item = {
        index: i,
        name: 'cell_' + i,


        label: '大头×野咖啡: 烘焙咖啡豆',

        country: '埃塞俄比亚',
        region: '耶加雪菲',

        flavour: '核果/柠檬茶/百香果/坚果',
        process: '日晒',
        grade: 'G2',
        weight: '100g',
        logo: '/a/url/to/logo',
        illustration: '/a/url/to/illust.',
        variety: '74110 + 74112 + 传家宝',
        roast: '中',

      }
      cells.push(item);
    }
    return { cells }
  },


}

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
