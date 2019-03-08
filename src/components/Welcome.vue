<template>
    <div class="welcome">
        <el-button @click="start">开始做题</el-button>
    </div>
</template>

<script>
import Question from './Question.vue'

const APP_VERSION = '1-0-0' 

export default {
    name: 'QuestionGroup',
    components: {
        Question
    },
    data: ()=>{
        return {
            currentId: 0,
            score: 0
        }
    },
    methods: {
        start() {
            this.$router.push('/questions')
        }
    }
}
</script>

