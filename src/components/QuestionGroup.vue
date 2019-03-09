<template>
    <div class="question-group">
        <Question @finished='nextImg' @submit='submit' :imageSrc='imageSrc' :currentId='currentId' ></Question>
        <div></div>
    </div>
</template>

<script>
/* eslint-disable */
import Question from './Question.vue'

const IMAGE_ARR = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
const IMAGES = [{
    name: 'Bact_1',
    pro: [52, 46, 0, 0]
}, {
    name: 'Bact_2',
    pro: [85, 13, 0, 0]
}, {
    name: 'Bact_3',
    pro: [94, 5, 0, 0]
}, {
    name: 'Fungal_1',
    pro: [0, 99, 0, 0]
}, {
    name: 'Fungal_2',
    pro: [0, 99, 0, 0]
}, {
    name: 'Fungal_3',
    pro: [40, 58, 0, 1]
}, {
    name: 'Fungal_4',
    pro: [3, 95, 0, 0]
}, {
    name: 'Fungal_5',
    pro: [2, 97, 0, 0]
}, {
    name: 'Virus_1',
    pro: [0, 0, 98, 1]
}, {
    name: 'Virus_2',
    pro: [0, 1, 94, 3]
}, {
    name: 'Virus_3',
    pro: [0, 0, 99, 0]
}, {
    name: 'Virus_4',
    pro: [0, 0, 99, 0]
}, {
    name: 'Virus_5',
    pro: [0, 1, 65,32]
}, {
    name: 'Virus_6',
    pro: [0, 0, 87, 12]
}, {
    name: 'Virus_7',
    pro: [0, 0, 82, 17]
}, {
    name: 'Virus_8',
    pro: [0, 3, 48, 47]
}, {
    name: 'Other_1',
    pro: [6, 0, 36, 56]
}, {
    name: 'Other_2',
    pro: [0, 0, 0, 99]
}, {
    name: 'Other_3',
    pro: [0, 0, 47, 52]
}]
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
            return require(`./../assets/photo/${IMAGES[this.quesArr[this.currentId]].name}.jpg`)
        }
    },
    created(){
        // 随机抽五张图
        this.quesArr = IMAGE_ARR.sort((a,b) => {return Math.random()>.5 ? -1 : 1}).slice(0,5)

    },
    methods: {
        nextImg(ans) {
            let anses = IMAGES[this.quesArr[this.currentId]].pro
            if(parseInt(ans) === anses.indexOf(Math.max(...anses)) + 1){
                this.score ++
            }
            this.currentId ++
        },
        submit(ans) {
            this.$router.push({name:'result', params: {score: this.score}})
        }
    }
}
</script>

