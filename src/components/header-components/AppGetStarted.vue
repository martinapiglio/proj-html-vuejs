<script>

</script>

<template>

    <div class="container">

        <section id="get-started-introduction">
            <span>i'm wingman</span>
            <h1>peace on earth a wonderful wish but no way</h1>
            <p>Success isn't overnight. It's when everyday you get a little better than the day before. It all adds up.</p>
            <button><span>get started for free</span><i class="fa-solid fa-arrow-right"></i></button>
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

            span {
                text-transform: uppercase;
            }

            h1 {
                padding: 1rem 0 2rem;
                font-family: 'Playfair Display', serif;
                text-transform: capitalize;
                font-size: 2.8rem;
                font-weight: 400;
            }

            p {
                padding-bottom: 2rem;
                line-height: 1.8;
            }

            button {
                padding: 1rem 2.5rem;
                color: $off-white;
                border: none;
                border-radius: 5px;
                background-color: $mint-green;
                transition: all .2s;

                span {
                    font-weight: bold;
                    font-size: 13px;
                    text-transform: capitalize;
                    padding-right: .8rem;
                }
            }

            button:hover {
                background-color: $indigo;
                cursor: pointer;
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