<script>
import { store } from 'C:/Boolean/esercizio-mid-term/proj-html-vuejs/src/store.js';

export default {
    data() {
        return {
            store,
            navLinks: [
                'Home',
                'Pages',
                'Courses',
                'Features',
                'Blog',
                'Shop'
            ]
        }
    },
    props: {
        menuLinks: Array
    }
}
</script>

<template>

    <nav>

        <div class="container">

            <img src="images/dark-logo.png" alt="">

            <ul id="links">

                <li v-for="link in navLinks">

                    <a href="#" class="nav-links">{{ link }}</a>
                    <i class="fa-solid fa-chevron-down"></i>

                    <div class="dropdown-menu"> 
                        <a href="#" v-for="item in menuLinks"> {{ item }} </a>
                    </div>

                </li>

            </ul>

            <ul id="social-media">
                <li v-for="icon in store.icons">
                    <a href="#">
                        <i class="fa-brands" :class="icon"></i>
                    </a>
                </li>
            </ul>

        </div>

    </nav>

</template>

<style scoped lang="scss">

    @use '../style/_variables.scss' as *;
    @use '../style/_mixins.scss' as *;

    nav {
        padding: 1.5rem 0;

        .container {
            @include centerMaxWidth();
            @include flex(row, nowrap, space-between, center, center);

            img {
                max-width: 100px;
                min-width: 50px;
                cursor: pointer;
            };

            ul {
                @include flex(row, nowrap, space-between, center, center);
                gap: 1.5rem;
            }
    
            #links {
                color: $indigo;
                font-size: .8rem;
                font-weight: bold;

                li {
                    @include flex(row, nowrap, space-between, center, center);
                    position: relative;
                    transition: all .2s;
                    height: 2rem;

                    .nav-links {
                        position: relative;
                        padding-right: 3px;
                    }

                    .nav-links::after {
                        content: '';
                        position: absolute;
                        width: 100%;
                        transform: scaleX(0);
                        height: 2px;
                        top: 1rem;
                        left: 0;
                        background-color: $mint-green;
                        transform-origin: bottom right;
                        transition: transform 0.25s ease-out;
                    }

                    i {
                        font-size: .5rem;
                        transition: .5s;
                    }

                    .dropdown-menu {
                        display: none;
                    }

                }

                li:hover {
                    color: $mint-green;
                    cursor: pointer;

                    .nav-links::after {
                        transform: scaleX(1);
                        transform-origin: bottom left;
                    }

                    i {
                        transform: rotate(180deg);
                    }

                    .dropdown-menu {
                        @include flex(column, nowrap, space-between, flex-start, center);
                        position: absolute;
                        top: 100%;
                        right: 0;
                        border-bottom: 2px solid $mint-green;
                        background-color: $dirty-white;
                        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);

                        a {
                            color: $dark-grey;
                            width: 100%;
                            white-space: nowrap;
                            padding: .8rem 3rem .8rem .8rem;
                            transition: all .2s;
                        }

                        a:hover {
                            color: #8b8b90;
                            background-color: $dark-beige;
                        }

                    }
                }

            };

            #social-media {
                li {
                    i {
                        transition: all .2s;
                    }

                    i:hover {
                        color: $dark-grey;
                        cursor: pointer;
                    }
                }
            }

        }

    }

</style>