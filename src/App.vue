<template>
    <div class="app">
        <div>
            <post-form @create="createPost" />
            <post-list :posts="posts" />
        </div>

    </div>
</template>

<script>
import PostForm from "@/Components/PostForm"
import PostList from "@/Components/PostList"

export default {

    components: {
        PostList,
        PostForm
    },

    data() {
        return {
            posts: [
                {id: 1, title: 'js post', body: 'dscription lorem'},
                {id: 2, title: 'html post 11', body: 'dscription lorem 323'},
                {id: 3, title: 'css post 12', body: 'dscription lorem 525'},
            ],
        }
    },
    methods: {
        createPost(post, second, third) {
            console.log(post, second, third);
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