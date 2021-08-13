<template>
    <div>
        <div class="post" v-for="post in posts">
            <div><strong>Name: </strong> {{ post.title }}</div>
            <div><strong>Description: </strong> {{ post.body }}</div>
        </div>
    </div>
</template>

<script>
export default {

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
        addLike() {
            this.likes +=1;
        },
        addDislike() {
            this.dislikes +=1;
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

.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
}
</style>