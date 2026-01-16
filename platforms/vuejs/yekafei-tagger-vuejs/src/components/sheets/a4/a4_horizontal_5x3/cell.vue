<template>
    <div class="sheets-a4-horz-5x3-cell v-border ">
        <slot></slot>
    </div>
</template>

<!---------------------------------------------------------------------------->

<script lang="js">
export default {
    name: 'sheets-a4-horz-5x3-cell',
}
</script>

<!---------------------------------------------------------------------------->

<style lang="css" scoped>
.sheets-a4-horz-5x3-cell {

    display: block;

    width: 55mm;
    height: 65mm;

    padding: 3mm;
    margin: 1mm;

}
</style>
