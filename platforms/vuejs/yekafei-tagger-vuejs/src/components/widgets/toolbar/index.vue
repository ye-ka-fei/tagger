<template>
    <div class="toolbar">
        <slot> </slot>
    </div>
</template>

<!----------------------------------------------------------------------------->

<script lang="js">
export default {
    name: 'widgets-toolbar'
}
</script>

<!----------------------------------------------------------------------------->

<style lang="css" scoped>
.toolbar {
    display: flex;
    flex-direction: row;
}
</style>
