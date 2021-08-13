<template>
    <div>
        <div class="post">
            <div><strong>Name: </strong> Post about js</div>
            <div><strong>Desk: </strong> Vierd js syntax</div>
        </div>         
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
}
</style>