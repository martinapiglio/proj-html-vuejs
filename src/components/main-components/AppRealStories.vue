<script>
import { store } from 'C:/Boolean/esercizio-mid-term/proj-html-vuejs/src/store.js';

export default {
    data() {
        return {
            store,
            testimonialsInformation: [
                {
                    quote: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
                    profilePic: 'testimonial-avata-02.jpg',
                    name: 'Mina Hollace',
                    job: ' / Freelancer'
                },
                {
                    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat.',
                    profilePic: 'testimonial-avata-01.jpg',
                    name: 'Gabriel Hall',
                    job: ' / Designer'
                },
                {
                    quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident.',
                    profilePic: 'testimonial-avata-03.jpg',
                    name: 'Elliot Foster',
                    job: ' / Developer'
                },
                {
                    quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
                    profilePic: 'testimonial-avata-04.jpg',
                    name: 'Liam Green',
                    job: ' / Consultant'
                },
            ],
            autoplay: '',
        }
    },

    methods: {

        next() {

            if (this.store.currentIndex < this.testimonialsInformation.length - 1) {
                this.store.currentIndex++;
            } else {
                this.store.currentIndex = 0;
            };

        },

        prev() {

            if (this.store.currentIndex == 0) {
                this.store.currentIndex = this.testimonialsInformation.length - 1;
            } else {
                this.store.currentIndex--;
            };

        },

        cardsAutoplay() {
            this.autoplay = setInterval(this.next,3000);
        },

        stopCardsAutoplay() {
            clearInterval(this.autoplay);
        }

    }

}

</script>

<template>

    <div class="real-stories-container">

        <div @mouseover="cardsAutoplay" @mouseleave="stopCardsAutoplay"  id="real-stories">
            <span class="pre-title">real stories</span>

                <div class="testimonials">
                    <p class="testimonials-quote"> {{ testimonialsInformation[store.currentIndex].quote }} </p>
                    <img :src=" 'images/' + testimonialsInformation[store.currentIndex].profilePic" alt="">
                    <span class="testimonials-name"> {{ testimonialsInformation[store.currentIndex].name }} </span>
                    <span class="testimonials-job"> {{ testimonialsInformation[store.currentIndex].job }} </span>
                </div>

            <div id="slider-btn">
                <i @click="prev()" class="fa-solid fa-chevron-up"></i>
                <span> {{ store.currentIndex + 1}} / 4 </span>
                <i @click="next()" class="fa-solid fa-chevron-down"></i>
            </div>
            
        </div>

        <div id="real-stories-img">
            <img src="images/home-movation-testimonial-image.jpg" alt="">
        </div>

    </div>

</template>

<style scoped lang="scss">

    @use '../style/_variables.scss' as *;
    @use '../style/_mixins.scss' as *;

    .real-stories-container {
        @include flex(row, wrap, space-between, center, center);
        position: relative;
        height: fit-content;
        background-color: #f3f3fa;
        background-image: url('images/background-pattern-wavify.png');

        #real-stories {
            width: 50%;

            .pre-title {
                display: block;
                text-align: center;
                color: $mint-green;
            }

            #slider-btn {
                @include flex(column, nowrap, space-between, center, center);
                position: absolute;
                top: calc(50% - 2.5rem);
                left: calc(50% - 2.5rem);
                width: 5rem;
                aspect-ratio: 1;
                padding: .4rem;
                text-align: center;
                border-radius: 50%;
                background-color: $off-white;

                i {
                    color: $dark-grey;
                    font-size: smaller;
                    cursor: pointer;
                }

            }

            .testimonials {
                @include flex(column, nowrap, center, center, center);
                padding-top: 3rem;
                .testimonials-quote {
                    max-width: 390px;
                    margin-bottom: 1.5rem;
                    text-align: center;
                    font-size: 1.2rem;
                    line-height: 1.5;
                }

                img {
                    margin-bottom: 1rem;
                    width: 5rem;
                    border-radius: 50%;
                }

                .testimonials-name {
                    margin-bottom: 1rem;
                    font-weight: bold;
                }

                .testimonials-job {
                    color: $dark-grey;
                    font-size: .8rem;
                }
            }

        }

        #real-stories-img {
            width: 50%;

            img {
                display: block;
                width: 100%;
            }
        }
    }


</style>