<template>
    <div>
        <h4>Posts List</h4>
        <post-item
            v-for="post in posts"
            :post="post"
            :key="post.id"
            @remove="$emit('remove', post)"
        />
    </div>

</template>

<script>
import PostItem from "@/Components/PostItem";
export default {
    components: {
        PostItem
    },

    props: {
        posts: {
            type: Array,
            required: true
        }
    }

}
</script>

<style scoped>

</style>