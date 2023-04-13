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
            <li v-for="item in store.toolbar">
                <a href="#">
                    <i class="fa-solid" :class="item.icon"></i>

                    <div class="label"> {{ item.label }} </div>
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

    @keyframes bounce {
        0%, 100% {transform: translateX(0);}
        50% {transform: translateX(-1rem);}
    }

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

        li {
            position: relative;
            cursor: pointer;
        }

        .label {
            position: absolute;
            top: 0;
            right: 1.5rem;
            white-space: nowrap;
            padding: 0 .4rem;
            font-size: 14px;
            border-radius: 5px;
            color: $off-white;
            background-color: black;
            visibility: hidden;
            opacity: 0;
            transition: all .3s ease-out;

            &::after {
                content: '';
                position: absolute;
                left: 100%;
                top: 40%;
                width: 0;
                height: 0;
                border-left: 6px solid #000000;
                border-top: 5px solid transparent;
                border-bottom: 5px solid transparent;
            }
        }

        li:hover .label {
            visibility: visible;
            opacity: 1;
            transition: all .3s ease-in;
            animation: bounce .3s ease;
        }

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
