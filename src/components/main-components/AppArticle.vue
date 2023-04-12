<script>
export default {
    data() {
        return {

        }
    },
    props: {
        articleInfo: Object
    }
}

</script>

<template>

    <div class="article">

        <div class="article-img">
            <img :src=" 'images/' + articleInfo.img" alt="">
        </div>

        <div class="article-text">

            <div class="article-date"> <i class="fa-regular fa-calendar"></i> {{ articleInfo.date }} </div>

            <div class="article-title"> {{ articleInfo.title }} </div>

            <div class="article-desc">
                
                <p> {{ articleInfo.desc }} </p>

            </div>

        </div>

    </div>

</template>

<style scoped lang="scss">

    @use '../style/_variables.scss' as *;
    @use '../style/_mixins.scss' as *;

    .article {
        width: calc(100% / 4 - 1.4em / 4 * 3);
        max-height: 300px;
        border-radius: 5px;
        text-align: left;
        overflow: hidden;
        transition: all .2s;
            
        img {
            width: 100%;
            margin-bottom: 1rem;
        }

        .article-text {
            padding: .2rem;

            .article-title {
                padding-bottom: .8rem;
                color: $indigo;
                font-weight: bold;
                line-height: 1.5;
            }

            .article-date,
            .article-desc {
                padding-bottom: .4rem;
                color: $dark-grey;
                font-size: .8rem;
                line-height: 1.5;
            }

            .article-date {

                i {
                    margin-right: .3rem;
                }
            }
        }

    }

    .article:hover {
        transform: scale(102%);
        cursor: pointer;
    }

</style>