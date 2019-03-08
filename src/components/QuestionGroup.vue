<template>
    <div class="question-group">
        <Question @finished='nextImg' @submit='submit' :imageSrc='imageSrc' :currentId='currentId'></Question>
    </div>
</template>

<script>
/* eslint-disable */
import Question from './Question.vue'

const IMAGE_ARR = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
export default {
    name: 'QuestionGroup',
    components: {
        Question
    },
    data: ()=>{
        return {
            currentId: 0,
            score: 0,
            quesArr: []
        }
    },
    computed: {
        imageSrc(){
            return require(`./../assets/${this.quesArr[this.currentId]}.jpg`)
        }
    },
    created(){
        // 随机抽五张图
        this.quesArr = IMAGE_ARR.sort((a,b) => {return Math.random()>.5 ? -1 : 1}).slice(0,5)
    },
    methods: {
        nextImg(ans) {
            this.currentId ++
            console.log(ans)
        },
        submit(ans) {
            this.$router.push('/result')
        }
    }
}
</script>

