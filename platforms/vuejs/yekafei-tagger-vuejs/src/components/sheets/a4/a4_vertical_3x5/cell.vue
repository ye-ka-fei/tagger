<template>
    <div class="sheets-a4-vert-3x5-cell v-border ">
        <slot></slot>
    </div>
</template>

<!---------------------------------------------------------------------------->

<script lang="js">
export default {
    name: 'sheets-a4-vert-3x5-cell',
}
</script>

<!---------------------------------------------------------------------------->

<style lang="css" scoped>
.sheets-a4-vert-3x5-cell {

    display: block;

    width: 65mm;
    height: 55mm;


    padding: 3mm;
    margin: 1mm;

}
</style>
