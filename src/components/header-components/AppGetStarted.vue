<script>

</script>

<template>

    <div class="container">

        <section id="get-started-introduction">
            <span class="pre-title">i'm wingman</span>
            <h1 class="title">peace on earth a wonderful wish but no way</h1>
            <p>Success isn't overnight. It's when everyday you get a little better than the day before. It all adds up.</p>
            <button class="btn"><span class="btn-text">get started for free</span><i class="fa-solid fa-arrow-right"></i></button>
        </section>
    
        <section id="get-started-img">
            <img src="images/home-movation-hero-image.png" alt="">
        </section>

    </div>

</template>

<style scoped lang="scss">

    @use '../style/_variables.scss' as *;
    @use '../style/_mixins.scss' as *;

    .container {
        @include centerMaxWidth();
        @include flex(row, wrap, space-between, center, center);
        height: fit-content;

        #get-started-introduction {
            width: 40%;
            padding: 3rem 0;

            .pre-title {
                text-transform: uppercase;
            }

            h1 {
                padding: 1rem 0 2rem;
                
                font-size: 2.8rem;
                font-weight: 400;
            }

            p {
                padding-bottom: 2rem;
                line-height: 1.8;
            }

        }

        #get-started-img {
            width: 50%;
            padding-top: 2rem;
            background-image: url('images/home-movation-shape-face.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: bottom;
            
            img {
                display: block;
                height: 100%;
                width: 95%;
            }

        }
    }

</style>