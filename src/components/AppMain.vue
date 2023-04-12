<script>
import AppStatistic from './main-components/AppStatistic.vue';
import AppAboutMe from './main-components/AppAboutMe.vue';
import AppCourse from './main-components/AppCourse.vue';
import AppBooks from './main-components/AppBooks.vue';
import AppClient from './main-components/AppClient.vue';
import AppRealStories from './main-components/AppRealStories.vue';
import AppArticle from './main-components/AppArticle.vue';

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
            ],
            clientsList: [
                'client-logo-05-primary.png',
                'client-logo-06-primary.png',
                'client-logo-07-primary.png',
                'client-logo-04-primary.png',
                'client-logo-03-primary.png',
                'client-logo-02-primary.png'
            ],
            articlesTitle: 'Interesting articles updated daily',
            articles: [
                {
                    img: 'motivation-blog-04-480x325.jpg',
                    date: 'May 13, 2020',
                    title: 'How to Stay True to Your Personal Brand',
                    desc: 'When it comes to your business or carees, you want to lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'
                },
                {
                    img: 'motivation-blog-03-480x325.jpg',
                    date: 'May 13, 2020',
                    title: '5 Vital Lessons in 5 Years of Freelancing',
                    desc: "Being self-employed and working from home, it's eay to get lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                },
                {
                    img: 'motivation-blog-02-480x325.jpg',
                    date: 'May 13, 2020',
                    title: '11 Super Useful Tips for Small-Business Owners',
                    desc: 'Being a small-business owner poses a ton of challenges. We lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
                },
                {
                    img: 'motivation-blog-01-480x325.jpg',
                    date: 'May 13, 2020',
                    title: 'How to Give Yourself Grace to Start Again',
                    desc: 'Forgive yourself for bad habits you may have started or lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
                },
            ]
        }
    },

    components: {
        AppStatistic,
        AppAboutMe,
        AppCourse,
        AppBooks,
        AppClient,
        AppRealStories,
        AppArticle
    },

    methods: {

        getLastWords(string, end) {
            let lastWordsStr = string.split(" ").slice(end).join(' ');
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
    <!-- main section -->
    <main>

        <div class="container">

            <!-- statistics section -->
            <div class="stats-container">
                <AppStatistic v-for="stat in stats" :statistic="stat"></AppStatistic>
            </div>
            
            <!-- about me section in a separate component -->
            <AppAboutMe></AppAboutMe>

            <!-- online courses section -->
            <section id="courses">
                
                <span class="pre-title">begin your journey at maxcoach</span>
                <h2 class="title">
                    <span> {{ getFirstWord(onlineCoursesTitle, 0, 1) }} </span>
                    <span> {{ getLastWords(onlineCoursesTitle, -2) }} </span>
                </h2>

                <div class="courses-container">
                    <AppCourse v-for="course in onlineCourses" :onlineCourse="course"></AppCourse>
                </div>
                
                <button class="btn"><span class="btn-text">view all courses</span><i class="fa-solid fa-arrow-right"></i></button>

            </section>

            <!-- books section -->
            <section id="books-section">

                <div id="books-section-text">

                    <span class="pre-title">book store online</span>
                    <h2 class="title">
                        <span> {{ getFirstWord(booksTitle, 0, 3) }} </span>
                        <span> {{ getLastWords(booksTitle, -2) }} </span>
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

            <!-- clients section -->
            <section id="clients-section">
                <AppClient v-for="client in clientsList" :clientLogo="client"></AppClient>
            </section>

        </div>

        <!-- real stories section - slider -->
        <AppRealStories></AppRealStories>

        <div class="container">

            <!-- blog section -->
            <section id="blog-section">
    
                <span class="pre-title">blog updated</span>
                <h2 class="title">
                    <span> {{ getFirstWord(articlesTitle, 0, 1) }} </span>
                    <span> {{ getFirstWord(articlesTitle, 1, 3) }} </span>
                    <span> {{ getLastWords(articlesTitle, -1) }} </span>
                </h2>
                
                <div class="articles-container">
                    <AppArticle v-for="article in articles" :articleInfo="article"></AppArticle>
                </div>

                <div id="link-all">
                    <a href="#">view all posts</a>
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

        .container {
            @include centerMaxWidth();

            .stats-container {
                @include flex(row, wrap, space-around, center, center);
            }

            #courses {
                text-align: center;

                .courses-container {
                    @include flex(row, wrap, space-between, flex-start, center);
                    gap: 1.4rem;
                    padding-bottom: 2.5rem;
                }

            }

            #books-section {
                @include flex(row, wrap, space-between, center, center);
                padding: 3rem 0 10rem;

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

            #clients-section{
                @include flex(row, wrap, space-between, center, center);
                padding-bottom: 5rem;
            }

        }

        #blog-section {
            padding: 7rem 0 0;

            .title {

                span {
                    font-family: 'Playfair Display', serif;
                    color: $indigo;
                    text-transform: none;
                }

                span:nth-child(2) {
                    color: $mint-green;
                }
            }

            .articles-container {
                @include flex(row, wrap, space-between, flex-start, center);
                gap: 1.4rem;
                padding-bottom: 2.5rem;
            }

            & #link-all:last-child {
                text-align: center;

                a {
                    position: relative;
                    text-transform: uppercase;
                    color: $mint-green;
                }
    
                a::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    transform: scaleX(0);
                    height: 2px;
                    top: 1.2rem;
                    left: 0;
                    background-color: $mint-green;
                    transform-origin: bottom right;
                    transition: transform 0.25s ease-out;
                }
    
                a:hover::after {
                    transform: scaleX(1);
                    transform-origin: bottom left;
                }

            }
        }

    }

</style>