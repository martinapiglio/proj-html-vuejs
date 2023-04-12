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
    }
}
</script>

<template>

    <nav>

        <div class="container">

            <img src="images/dark-logo.png" alt="">

            <ul id="links">

                <li v-for="link in navLinks">

                    <a href="#">{{ link }}</a>
                    <i class="fa-solid fa-chevron-down"></i>

                    <!-- to be filled with links -->
                    <div class="dropdown-menu"> 
                    </div>
                    <!-- // -->

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
                    transition: all .2s;

                    a {
                        position: relative;
                        padding-right: 3px;
                    }

                    a::after {
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

                }

                li:hover {
                    color: $mint-green;
                    cursor: pointer;

                    a::after {
                        transform: scaleX(1);
                        transform-origin: bottom left;
                    }

                    i {
                        transform: rotate(180deg);
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