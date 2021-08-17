<template>
    <button class="btn">
        <h1>different element</h1>
        <slot></slot>
    </button>  
</template>

<script>
export default {
    name: 'my-button2'
}
</script>

<style>
.btn {
    margin-top: 15px;
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    color:teal;
    border: 1px solid teal;
}

</style>