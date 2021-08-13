<template>
    <div>
        <div>
            <button>Like</button>
            <button>Dislike</button>
        </div>
        <div>Likes count {{ likes }}</div>
        <div>Likes count {{ dislikes }}</div>             
    </div>
</template>

<script>
export default {

    data() {
        return {
            likes: 0,
            dislikes: 0,

        }
    },
    methods: {
        addLike() {
            this.likes +=1;
        },
        addDislike() {
            this.likes +=1;
        }
    }
    
}
</script>

<style>

</style>