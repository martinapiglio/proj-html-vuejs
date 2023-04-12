<script>
import { store } from '../store';
import AppListItem from './AppListItem.vue';

export default {
    data() {
        return {
            store,
            adressInfo: [
                '382 NE 191st St # 87394 Miami, FL 33179-3899',
                '+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)',
                'support@maxcoach.com'
            ],
            exploreLinks: [
                'start here',
                'blog',
                'about us',
                'success story',
                'courses',
                'contact us'
            ],
            infoLinks: [
                'membership',
                'purchase guide',
                'privacy policy',
                'terms of service'
            ]
        }
    },
    components: {
        AppListItem
    }
}
</script>

<template>

    <footer>

        <div class="container">

            <section id="footer-left">
    
                <h3>adress</h3>

                <ul>
                    <AppListItem v-for="item in adressInfo" :listItem="item"></AppListItem>
                </ul>

                <ul id="social-media-icons">
                    <li v-for="icon in store.icons">
                        <a href="#">
                            <i class="fa-brands" :class="icon"></i>
                        </a>
                    </li>
                </ul>

            </section>
    
            <section id="footer-right">
    
                <div id="explore">
    
                    <h3>explore</h3>

                    <ul>
                        <AppListItem v-for="item in exploreLinks" :listItem="item"></AppListItem>
                    </ul>

                </div>
    
                <div id="information">
    
                    <h3>information</h3>

                    <ul>
                        <AppListItem v-for="item in infoLinks" :listItem="item"></AppListItem>
                    </ul>
                    
                </div>
                
            </section>

        </div>

        <div id="credits">
            <i class="fa-regular fa-copyright"></i> 2020 Maxcoach. All Rights Reserved
        </div>

    </footer>

</template>

<style scoped lang="scss">

    @use './style/_variables.scss' as *;
    @use './style/_mixins.scss' as *;

    footer {
        padding: 3rem 0;
        background-color: #171621;

        .container {
            @include flex(row, wrap, flex-start, flex-start, center);
            @include centerMaxWidth();
            padding-bottom: 3rem;

            h3 {
                padding-bottom: 1rem;
                font-size: 1rem;
                text-transform: capitalize;
                font-weight: bold;
                color: $off-white;
            }
    
            #footer-left {
                width:50%;

                #social-media-icons {
                    @include flex(row, wrap, flex-start, flex-start, center);
                    gap: 1rem;
                    font-size: 1.2rem;
                    color: #8b8b90;

                    i {
                        transition: all .2s;
                    }
                }

                #social-media-icons i:hover {
                    color: $off-white;
                }

            }

            #footer-right {
                @include flex(row, wrap, flex-start, flex-start, center);
                width:50%;
                text-transform: capitalize;

                li:hover {
                    text-decoration: underline;
                    cursor: pointer;
                }

                #explore {
                    width: 50%;

                    ul {
                        @include flex(column, wrap, flex-start, flex-start, flex-start);
                        column-gap: 3rem;
                        max-height: 100px;
                    }
                }

            }

        }

        #credits {
            color: #8b8b90;
            font-size: .8rem;
            font-weight: bold;
            text-align: center;
        }
    }

</style>