<script>
import AppNavbar from './header-components/AppNavbar.vue';
import AppGetStarted from './header-components/AppGetStarted.vue';

export default {
    data() {
        return {
            
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
        <AppNavbar></AppNavbar>
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