<template>
              <form @submit.prevent>
                <h4>Post creation</h4>
                <input v-model="post.title" class="input" type="text" placeholder="Name">
                <input v-model="post.body" class="input" type="text" placeholder="Description">
                <button class="btn">Add post</button>
            </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: '',
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

.btn {
    margin-top: 15px;
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color:teal;
    border: 1px solid teal;
}

</style>