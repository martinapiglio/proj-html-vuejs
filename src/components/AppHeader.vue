<script>
import AppNavbar from './header-components/AppNavbar.vue';
import AppGetStarted from './header-components/AppGetStarted.vue';

export default {
    data() {
        return {
            navLinks: [
                'Home',
                'Pages',
                'Courses',
                'Features',
                'Blog',
                'Shop'
            ],
            menuLinks: [
                'Start Here',
                'Success Story',
                'About me',
                'About us 01',
                'About us 02',
                'About us 03',
                'Contact me',
                'Contact us',
                'Purchase Guide',
                'Privacy Policy',
                'Terms of Service'
            ]
        }
    },
    components: {
        AppNavbar,
        AppGetStarted
    }
}
</script>

<template>
    <header>
        <AppNavbar :menuLinks="menuLinks" :navLinks="navLinks"></AppNavbar>
        <AppGetStarted></AppGetStarted>
    </header>
</template>

<style scoped lang="scss">

    @use './style/_variables.scss' as *;
    @use './style/_mixins.scss' as *;

    header {
        background-color: $dirty-white;
        background-image: url('images/background-pattern-wavify.png');
    }

</style>