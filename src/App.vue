<template>
    <div class="app">
        <h1>Post page</h1>
        <my-button @click="fetchPosts">Fetch posts</my-button>
        <input type="text" v-model.trim="modificatorValue">
        <my-button
            @click="showDialog"
            style="margin: 15px 0;"
        >Create post</my-button>
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost" />
        </my-dialog>
            
        <post-list :posts="posts" @remove="removePost" />

    </div>
</template>

<script>
import PostForm from "@/Components/PostForm"
import PostList from "@/Components/PostList"
import MyButton from './Components/UI/MyButton.vue'
import axios from 'axios';


export default {

    components: {
        PostList,
        PostForm,
        MyButton
    },

    data() {
        return {
            posts: [
                // {id: 1, title: 'js post', body: 'dscription lorem'},
                // {id: 2, title: 'html post 11', body: 'dscription lorem 323'},
                // {id: 3, title: 'css post 12', body: 'dscription lorem 525'},
            ],
            dialogVisible: false,
            modificatorValue: '',
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post)
            this.dialogVisible = false
        },
        removePost(post) {
            console.log("removePost call")
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true
        },
        async  fetchPosts() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                this.posts = response.data;
            } catch (e) {
                alert("Error")
            }
        }
    }
    
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: 'border-box';
}

.app {
    padding: 20px;
}


</style>