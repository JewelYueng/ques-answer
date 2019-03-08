<template>
    <div class="question-group">
        <Question @submit='submit' :imageId='currentId' :currentId='currentId'></Question>
    </div>
</template>

<script>
import Question from './Question.vue'

export default {
    name: 'QuestionGroup',
    components: {
        Question
    },
    data: ()=>{
        return {
            currentId: 1,
            score: 0
        }
    },
    methods: {
        submit() {
            console.log(score)
        }
    }
}
</script>

