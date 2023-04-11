<script>
import AppStatistic from './main-components/AppStatistic.vue';
import AppAboutMe from './main-components/AppAboutMe.vue';
import AppCourse from './main-components/AppCourse.vue';

export default {
    data() {
        return {
            stats: [
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
            ],
            onlineCoursesTitle: 'latest online courses',
            onlineCourses: [
                {
                    image: 'motivation-course-06-480x298.jpg',
                    price: '$30.00',
                    title: 'How to be Successful: Create a Growth Mindset For Success',
                    lessons: 3,
                    students: 50
                },
                {
                    image: 'motivation-course-05-480x298.jpg',
                    price: '$30.00',
                    title: 'How to Build Confidence in Your Abilities' ,
                    lessons: 1,
                    students: 50
                },
                {
                    image: 'motivation-course-04-480x298.jpg',
                    price: '$20.00',
                    title: 'Productivity Machine - Focus in a Ditracted World' ,
                    lessons: 5,
                    students: 50
                },
                {
                    image: 'motivation-course-03-480x298.jpg',
                    price: '$20.00',
                    title: 'Effective Time Management Mastery - Complete Guide',
                    lessons: 18,
                    students: 50
                },
                {
                    image: 'motivation-course-02-480x298.jpg',
                    price: '$25.99',
                    title: 'Body Language Secrets for Enterpreneurs',
                    lessons: 19,
                    students: 50
                },
                {
                    image: 'motivation-course-01-480x298.jpg',
                    price: '$19.99',
                    title: 'Management Skills: The Science of Leadership',
                    lessons: 17,
                    students: 50
                }
            ]
        }
    },

    components: {
        AppStatistic,
        AppAboutMe,
        AppCourse
    },

    methods: {

        getLastWords(string) {
            let lastWordsStr = string.split(" ").slice(-2).join(' ');
            return lastWordsStr;
        },

        getFirstWord(string) {
            let firstWordsStr = string.split(" ")[0];
            return firstWordsStr + ' ';
        }
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

            <section id="courses">
                <span class="pre-title">begin your journey at maxcoach</span>
                <h2 class="title">
                    <span> {{ getFirstWord(onlineCoursesTitle) }} </span>
                    <span> {{ getLastWords(onlineCoursesTitle) }} </span>
                </h2>

                <div class="courses-container">
                    <AppCourse v-for="course in onlineCourses" :onlineCourse="course"></AppCourse>
                </div>
                
                <button class="btn"><span class="btn-text">view all courses</span><i class="fa-solid fa-arrow-right"></i></button>

            </section>

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

            #courses {
                
                .pre-title {
                    display: block;
                    color: $dark-grey;
                    padding-bottom: 1rem;
                    text-align: center;
                }

                .title {
                    font-size: 2rem;
                    font-weight: 400;
                    padding-bottom: 2.5rem;
                    color: $indigo;
                    text-align: center;

                    span {
                        font-family: 'Playfair Display', serif;
                    }

                    span:last-child {
                        color: $mint-green;
                    }
                }

                .courses-container {
                    @include flex(row, wrap, space-between, flex-start, center);
                    gap: 1.4rem;
                    padding-bottom: 2.5rem;
                }
            }
        }

    }

</style>