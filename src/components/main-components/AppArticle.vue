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
                
                 {{ articleInfo.desc }} 

            </div>

        </div>

    </div>

</template>

<style scoped lang="scss">

    @use '../style/_variables.scss' as *;
    @use '../style/_mixins.scss' as *;

    .article {
        width: calc(100% / 4 - 1.4em / 4 * 3);
        max-height: fit-content;
        border-radius: 5px;
        text-align: left;
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
                display: -webkit-box;
                
                max-height: 40px;
                padding-bottom: .4rem;
                color: $dark-grey;
                font-size: .8rem;
                line-height: 1.5;
                overflow: hidden;
                white-space: pre-wrap; 
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                text-overflow: ellipsis;
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