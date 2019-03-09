<template>
    <div class="result">
        <p>您的得分</p>
        <p class="score">{{$route.params.score}}</p>
        <el-button @click="restart" type="primary">再来一组</el-button>
        <el-button @click="goBack">返回首页</el-button>
    </div>
</template>

<script>
/* eslint-disable */
import Question from './Question.vue'

const APP_VERSION = '1-0-0' 

export default {
    name: 'QuestionGroup',
    components: {
        Question
    },
    data: ()=>{
        return {
            currentId: 0
        }
    },
    methods: {
        restart() {
            console.log('再来一组')
            this.$router.push('/questions')
        },
        goBack() {
            console.log('返回首页')
            this.$router.push('/')
        }
    }
}
</script>

<style>
    .score{
        font-size: 30px;
    }
</style>

