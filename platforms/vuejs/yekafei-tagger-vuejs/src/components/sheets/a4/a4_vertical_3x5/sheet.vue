<template>
    <div class=" ">
        <div class="cell-list  v-border   a4-3x5-vert  ">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="js">

export default {

    name: 'sheets-a4-3x5-vert',


}

</script>

<style lang="css" scoped>
.a4-3x5-vert {

    display: flex;
    flex-wrap: wrap;

    width: 210mm;
    height: 297mm;


    padding-top: 5mm;
    padding-left: 4mm;
    padding-bottom: 5mm;

}
</style>
