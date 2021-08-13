<template>
              <form @submit.prevent>
                <h4>Post creation</h4>
                <input v-model="post.title" class="input" type="text" placeholder="Name">
                <input v-model="post.body"   class="input" type="text" placeholder="Description">
                <my-button @click="createPost" class="btn">Add post</my-button>
            </form>
</template>

<script>
import MyButton from './UI/MyButton.vue';
export default {
  components: { MyButton },
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();  
            this.$emit('create', this.post)
            this.post = {
                title : '',
                body : ''
            }
        }
    }
}
</script>

<style>

form {
    display: flex;
    flex-direction: column;
}

.input {
    border: 2px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
}


</style>