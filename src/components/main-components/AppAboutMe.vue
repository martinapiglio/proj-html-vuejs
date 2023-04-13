<script>
export default {
    data() {
        return {

        }
    },

}
</script>

<template>

    <section id="about-me-section">

        <span id="section-title" class="pre-title">about me</span>
    
        <section id="text-section">    
            <h2 class="title">how to be an alpha male: the 15 habits of true alphas</h2>

            <div>
                <p id="text-section-title">Want to learn how to be <span>an alpha male</span>? How to be more masculine? How to be the man you always wanted to be?</p>
                <p id="text-section-text">Your goal is to show the consistency of business, core values, and customer care. Punctuality, responsibility, 
                    individuality, accuracy, enthusiasm - you have to clearly explain how these qualities are applicable to your work. 
                    And the important thing is you do love what you do.    
                </p>
            </div>

        </section>
    
        <section id="video-section">
            <iframe width="550" height="380" src="https://www.youtube-nocookie.com/embed/zADtAUDHmDA?modestbranding=1&rel=0&fs=0&showinfo=0" frameborder="0" allowfullscreen></iframe>
            <div id="video-quote">
                <p>"Every morning you have two choices: continue to sleep with your dreams, or wake up and chase them."</p>
                <img src="images/home-movation-shape-01.png" alt="">
                <span id="name">Kaixa Stark</span>
                <span id="wingman">wingman</span>
            </div>
        </section>

    </section>

</template>

<style scoped lang="scss">

    @use '../style/_variables.scss' as *;
    @use '../style/_mixins.scss' as *;

    #about-me-section {
        padding: 6rem 0;

        #section-title {
            display: block;
            padding-bottom: 1rem;
            color: $mint-green;
        }
    
        #text-section {
            @include flex(row, wrap, space-between, center, center);
            padding-bottom: 4rem;
    
            h2 {
                width: 35%;
                font-size: 2rem;
                font-weight: 400;
            }

            div {
                width: 55%;

                #text-section-title {
                    font-weight: bold;
                    padding-bottom: 1rem;
                    line-height: 1.8;

                    span {
                        color: $mint-green;
                    }
                }

                #text-section-text {
                    font-size: .9rem;
                    line-height: 1.3;
                    color: $dark-grey;
                }

            }
        }

        #video-section {
            @include flex(row, wrap, flex-start, center, center);

            iframe {
                border-radius: 7px;
                box-shadow: 2px 10px 50px rgba(0, 0, 0, .2);
            }

            #video-quote {
                padding-left: 3rem;
                width: 35%;

                p {
                    padding-bottom: 3rem;
                    font-family: 'Playfair Display', serif;
                    font-size: 1.2rem;
                    font-weight: 400;
                    line-height: 2;
                }

                #name {
                    padding: 1rem 0 .8rem;
                    display: block;
                    font-weight: bold;
                }

                #wingman {
                    text-transform: uppercase;
                    font-size: .8rem;
                    color: $dark-grey;
                }
            }
        }

    }

    @media screen and (max-width: 850px) {

        #about-me-section {
            #video-section {
                text-align: center;
                #video-quote {
                    padding-top: 1rem;
                    width: 100%; 
                }
            }
        }

    }

</style>