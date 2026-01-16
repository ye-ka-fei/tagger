<template>
    <div class="cell-list  v-border  sheets-a4-h5x3-sheet ">
        <slot></slot>
    </div>
</template>

<script lang="js">
export default {
    name: 'sheets-a4-h5x3-sheet',
}
</script>

<style lang="css" scoped>
.sheets-a4-h5x3-sheet {

    display: flex;
    flex-wrap: wrap;

    height: 210mm;
    width: 297mm;


    padding-top: 4.5mm;
    padding-left: 6mm;
    padding-bottom: 5mm;


    /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */

    font-family: sans-serif;

}
</style>
