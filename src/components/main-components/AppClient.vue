<script>
export default {
    data() {
        return {

        }
    },
    props: {
        clientLogo: String
    }
}

</script>

<template>

    <img :src="'images/' + clientLogo" alt="">

</template>

<style scoped lang="scss">

    @use '../style/_variables.scss' as *;

    img {
        opacity: .3;
        transition: all .3s;
    }

    img:hover {
        transform: scale(120%);
        cursor: pointer;
    }

</style>