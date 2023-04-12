<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    data() {
        return {
            store
        }
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    }
}
</script>

<template>

        <!-- toolbar options  -->
        <ul id="toolbar-options">
            <li v-for="icon in store.toolbarIcons">
                <a href="#">
                    <i class="fa-solid" :class="icon"></i>
                </a>
            </li>
        </ul>

        <!-- page scroll up element  -->
        <a class="page-scroll-up" href="#">
            <i class="arrow-top fa-solid fa-arrow-up"></i>
            <i class="arrow-bottom fa-solid fa-arrow-up"></i>
        </a>

        <!-- components -->
        <AppHeader></AppHeader>
        <AppMain></AppMain>
        <AppFooter></AppFooter>
    
</template>

<style scoped lang="scss">

    @use './components/style/_variables.scss' as *;

    #toolbar-options {
        position: fixed;
        top: 25%;
        right: 0;
        padding: .5rem .7rem;
        line-height: 2.5;
        border-right: 0;
        border-radius: 5px 0 0 5px;
        background: $off-white;
        text-align: center;
        box-shadow: -3px 0 10px -2px rgba(0,0,0,.1);
    }

    .page-scroll-up {
        position: fixed;
        right: 1%;
        bottom: 2%;
        z-index: 999;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        width: 50px;
        aspect-ratio: 1;
        border-radius: 50%;
        text-align: center;
        font-size: 1.5rem;
        background-color: $mint-green;
        cursor: pointer;
        overflow: hidden;

        i {
            display: block;
            color: $off-white;
            transition: all .2s;
        }

        .arrow-top {
            transform: translateY(50%);
        }

        .arrow-bottom {
            transform: translateY(120%);
        }

        &:hover .arrow-top {
            transform: translateY(-120%);
        }

        &:hover .arrow-bottom {
            transform: translateY(-50%);
        }
    }

</style>
