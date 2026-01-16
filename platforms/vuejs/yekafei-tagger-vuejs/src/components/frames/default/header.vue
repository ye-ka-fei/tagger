<template>
    <div>
        <h1>
            <img src="/image/coffee-bean.png" />

            野咖啡 - 标签生成器
        </h1>

        <nav class="nav-bar">
            <RouterLink class="nav-item" to="/">Home</RouterLink>
            <RouterLink class="nav-item" to="/about">About</RouterLink>

            <RouterLink class="nav-item" to="/pages">Pages</RouterLink>
            <RouterLink class="nav-item" to="/tags">Tags</RouterLink>
            <RouterLink class="nav-item" to="/templates">Templates</RouterLink>
        </nav>

    </div>
</template>

<!----------------------------------------------------------------------------->

<script lang="js">

export default {

    name: 'frames-default-header',

}

</script>

<!----------------------------------------------------------------------------->

<style lang="css" scoped>
.nav-item {
    background-color: rgb(219, 219, 219);
    margin: 2px;
    padding: 5px;
}
</style>
