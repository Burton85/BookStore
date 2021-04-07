<template>
  <book-list />
  <router-view></router-view>
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
