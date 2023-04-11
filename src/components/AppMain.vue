<script>
import AppStatistic from './main-components/AppStatistic.vue';
import AppAboutMe from './main-components/AppAboutMe.vue';
import AppCourse from './main-components/AppCourse.vue';
import AppBooks from './main-components/AppBooks.vue';

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
            ],
            booksTitle: "be alpha with wingman's book",
            booksItems: [
                'Help you understand yourself better',
                'Revealing mature tips',
                'Give the right advice',
                'Fascinating examples of alpha men'
            ],
            books: [
                {
                    img: 'product-book-11-400x400.jpg',
                    title: 'Alpha man by Maxcoach',
                    price: '$29.00'
                },
                {
                    img: 'product-book-10-400x400.jpg',
                    title: 'Real man 4.0 by Maxcoach',
                    price: '$39.00'
                },
            ]
        }
    },

    components: {
        AppStatistic,
        AppAboutMe,
        AppCourse,
        AppBooks
    },

    methods: {

        getLastWords(string) {
            let lastWordsStr = string.split(" ").slice(-2).join(' ');
            return lastWordsStr;
        },

        getFirstWord(string, start, end) {
            let firstWordsStr = string.split(" ").slice(start, end).join(' ');
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
                    <span> {{ getFirstWord(onlineCoursesTitle, 0, 1) }} </span>
                    <span> {{ getLastWords(onlineCoursesTitle) }} </span>
                </h2>

                <div class="courses-container">
                    <AppCourse v-for="course in onlineCourses" :onlineCourse="course"></AppCourse>
                </div>
                
                <button class="btn"><span class="btn-text">view all courses</span><i class="fa-solid fa-arrow-right"></i></button>

            </section>

            <section id="books-section">

                <div id="books-section-text">
                    <span class="pre-title">book store online</span>
                    <h2 class="title">
                        <span> {{ getFirstWord(booksTitle, 0, 3) }} </span>
                        <span> {{ getLastWords(booksTitle) }} </span>
                    </h2>
                    <ul>
                        <li v-for="item in booksItems"> {{ item }} </li>
                    </ul>
                    <button class="btn"><span class="btn-text">get free ebooks</span></button>
                </div>

                <div id="books-section-img">
                    <AppBooks v-for="book in books" :bookInfo="book"></AppBooks>
                </div>

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

            .pre-title {
                display: block;
                color: $dark-grey;
                padding-bottom: 1rem;
                }

                .title {
                    font-size: 2rem;
                    font-weight: 400;
                    padding-bottom: 2.5rem;
                    color: $indigo;

                    span {
                        font-family: 'Playfair Display', serif;
                    }

                    span:last-child {
                        color: $mint-green;
                    }
                }

            #courses {

                .courses-container {
                    @include flex(row, wrap, space-between, flex-start, center);
                    gap: 1.4rem;
                    padding-bottom: 2.5rem;
                }

            }

            #books-section {
                @include flex(row, wrap, space-between, center, center);
                padding: 3rem 0;

                #books-section-text {
                    width: 35%;
                    
                    ul {
                        @include flex(column, wrap, space-between, flex-start, baseline);
                        gap: .7rem;
                        padding-bottom: 2.5rem;
                        font-size: .8rem;

                        li::before {
                            content: "\2713"; 
                            font-weight: bold;
                            padding-right: 1rem;
                            color: $mint-green; 
                        }
                    }
                }
    
                #books-section-img {
                    @include flex(row, nowrap, space-between, center, center);
                    gap: 1.5rem;
                    width: 65%;
                }
            }

        }

    }

</style>