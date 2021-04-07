<template>
    <div class="home">
        <book-list />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BookList from '../components/BookList.vue';

export default defineComponent({
    name: 'Home',
    components: {
        BookList,
    },
});
</script>
