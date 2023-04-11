<script>
export default {
    data() {
        return {
            
        }
    },

    props: {
        onlineCourse: Object
    },

    methods: {

        getIntegerNumbersStr(str) {
             let integerNumberStr = str.slice(0, 3);
             return integerNumberStr;
        },

        getDecimalsNumbersStr(str) {
             let decimalNumberStr = str.slice(-3);
             return decimalNumberStr;
        }
    }
}
</script>

<template>  

    <div class="card">
        <img :src="'images/' + onlineCourse.image" alt="">
        <div class="card-text">

            <div class="card-price"> 
                <span> {{ getIntegerNumbersStr(onlineCourse.price) }} </span>
                <span> {{ getDecimalsNumbersStr(onlineCourse.price) }} </span> 
            </div>
            <div class="card-title"> {{ onlineCourse.title }} </div>
            <div class="card-nums">
                <i class="fa-regular fa-file-lines"></i>
                <span> {{ onlineCourse.lessons }} </span>
                <span v-if="onlineCourse.lessons > 1" class="card-text-small"> Lessons</span> <span v-else class="card-text-small"> Lesson</span> 
                
                <i class="fa-regular fa-user"></i>
                <span> {{ onlineCourse.students }} </span>
                <span v-if="onlineCourse.students > 1" class="card-text-small"> Students</span> <span v-else class="card-text-small"> Student</span> 

            </div>

        </div>
    </div>

</template>

<style scoped lang="scss">

    @use '../style/_variables.scss' as *;
    @use '../style/_mixins.scss' as *;

    .card {
        width: calc(100% / 3 - 1.4em / 3 * 2);
        border-radius: 5px;
        overflow: hidden;
        transition: all .3s;

        img {
            width: 100%;
        }

        .card-text {
            padding: 1rem;

            .card-price {
                padding-bottom: .8rem;
                color: $mint-green;
                font-weight: bold;

                span:first-child {
                    font-size: 1.4rem;
                }
            }

            .card-title {
                padding-bottom: .8rem;
                color: $indigo;
                font-weight: bold;
                line-height: 1.5;
            }

            .card-nums {
                color: $dark-grey;
                font-size: .8rem;
                
                i {
                    padding-right: .5rem;
                }

                .card-text-small {
                    padding-right: 1.5rem;
                }

            }
        }
    }

    .card:hover {
        transform: scale(105%);
        box-shadow: 3px 3px 15px rgba(0, 0, 0, .2);
        cursor: pointer;
    }

</style>