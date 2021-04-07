<template>
    <div class="h-64 grid grid-rows-10 grid-flow-col gap-4">
        <div v-for="book in list" :key="book.id"><img :src="book.image" alt="" />{{ book.name }}</div>
    </div>
</template>
<script lang="ts">
import useList from '../composition/List';
export default {
    props: {
        id: String,
    },
    setup(props: any) {
        return useList();
    },
};
</script>
