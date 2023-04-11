<script>
export default {
    data() {
        return {
            icons: [
                'fa-magnifying-glass',
                'fa-cart-shopping',
                'fa-heart',
                'fa-signal'
            ],
        }
    },
    
    props: {
        bookInfo: Object
    }

}
</script>

<template>
    <div class="book">
        <div class="book-img">
            <img :src=" 'images/' + bookInfo.img" alt="">
            <ul>
                <li v-for="icon in icons">
                    <a href="#">
                        <i class="fa-solid" :class="icon"></i>
                    </a>
                </li>
            </ul>

        </div>

        <div class="book-title"> {{ bookInfo.title }} </div>
        <div class="book-price"> {{ bookInfo.price }} </div>

    </div>
</template>

<style scoped lang="scss">

    @use '../style/_variables.scss' as *;
    @use '../style/_mixins.scss' as *;

    .book {
        width: calc(100% / 2);
        text-align: center;
        transition: all .2s;

        .book-img {
            position: relative;

            img {
                width: 100%;
                padding-bottom: .5rem;
            }

            ul {
                display: none;
            }
        }

        .book-title {
            padding-bottom: .5rem;
            color: $indigo;
            font-weight: bold;
            line-height: 1.5;
        }

        .book-price {
            padding-bottom: .8rem;
            color: $mint-green;
            font-weight: bold;
        }

    }

    .book:hover {
        box-shadow: 2px 2px 15px rgba(0, 0, 0, .2);
        transform: scale(101%);

        ul {
            display: block;
            position: absolute;
            top: 20%;
            right: 10%;

            li {
                @include flex(column, nowrap, center, center, center);
                width: 2.2rem;
                height: 2.2rem;
                padding: .5rem;
                font-size: .8em;
                margin-bottom: .5em;
                color: $dark-grey;
                border-radius: 50%;
                background-color: $off-white;
                cursor: pointer;
                transition: all .2s;
            }

            li:hover {
                color: $mint-green;
            }
        }
    }
    
</style>
