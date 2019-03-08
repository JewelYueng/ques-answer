<template>
    <div class="result">
        <p>{{score}}</p>
        <el-button @click="restart">再来一组</el-button>
        <el-button @click="goBack">返回首页</el-button>
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
        restart() {
            console.log('再来一组')
        },
        goBack() {
            console.log('返回首页')
        }
    }
}
</script>

