<script>
export default {
    data() {
        return {

        }
    },
    props: {
        statistic: Object
    }
}

</script>

<template>

    <div class="statistic">
        <div class="stat-number"> {{ statistic.number }} </div>
        <div class="stat-text"> {{ statistic.text }} </div>
    </div>

</template>

<style scoped lang="scss">

    @use '../style/_variables.scss' as *;

    .statistic {
        position: relative;
        text-align: center;
        width: calc(100% / 4);

        .stat-number {
            padding-bottom: .8rem;
            color: $mint-green;
            font-size: 1.8rem;
            font-weight: bold;
        }

        .stat-text {
            text-transform: uppercase;
            font-size: .9rem;
        }
    }

    .statistic::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 2px;
        background-image: url('images/background-pattern-grid-line-06.png');
    }

    .statistic:last-child::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 2px;
        background-image: url('images/background-pattern-grid-line-06.png');
    }

</style>