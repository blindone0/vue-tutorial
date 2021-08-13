<template>
    <div class="app">
        <div>
            <post-form/>
            <post-list/>
        </div>

    </div>
</template>

<script>
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"

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
            title: '',
            body: ''

        }
    },
    methods: {
        createPost() {
            const newPost = {
                id : Date.now(),
                title: this.title,
                body: this.body,
            }
            this.posts.push(newPost);
            this.title = '';
            this.body = '';
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