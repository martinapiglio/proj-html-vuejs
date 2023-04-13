<script>
export default {
    data() {
        return {
           
        }
    },
    props: {
        listItem: String
    }
}
</script>

<template>

    <li> {{ listItem }} </li>

</template>

<style scoped lang="scss">

    @use './style/_variables.scss' as *;
    @use './style/_mixins.scss' as *;

    li {
        padding-bottom: 1rem;
        font-size: .8rem;
        font-weight: bold;
        color: #8b8b90;
    }

</style>