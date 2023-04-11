<script>
import AppStatistic from './main-components/AppStatistic.vue';
import AppAboutMe from './main-components/AppAboutMe.vue';

export default {
    data() {
        return {
            stats : [
                {
                    number: '1.926',
                    text: 'finished sessions'
                },
                {
                    number: '100%',
                    text: 'satisfaction rate'
                },
                {
                    number: '3092+',
                    text: 'enrolled learners'
                },
                {
                    number: '200',
                    text: 'online instructors'
                }
            ]
        }
    },
    components: {
        AppStatistic,
        AppAboutMe
    }
}
</script>

<template>

    <main>

        <div class="container">

            <div class="stats-container">
                <AppStatistic v-for="stat in stats" :statistic="stat"></AppStatistic>
            </div>
    
            <AppAboutMe></AppAboutMe>

        </div>


    </main>

</template>

<style scoped lang="scss">

    @use './style/_variables.scss' as *;
    @use './style/_mixins.scss' as *;

    main {
        padding: 6rem 0;

        .container {
            @include centerMaxWidth();
            
            .stats-container {
                @include flex(row, wrap, space-around, center, center);
            }
        }

    }

</style>