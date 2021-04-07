<template>
    <div
        class="book-card flex-1 m-2 rounded bg-white border-4 border-gray-500 border-opacity-50 cursor-pointer transform hover:-translate-y-2 hover:shadow-xl duration-200"
        @click="$emit('click', book.id)"
        :class="
            book.id == selectedId ? '-translate-y-2 shadow-xl border-yellow-500' : 'translate-y-0 * border-gray-500'
        "
    >
        <img :src="book.image" alt="book.name" class="object-contain m-auto w-50 h-60 p-3" />
        <h1 class="p-3 h-20 text-sm" :class="book.id == selectedId ? 'bg-yellow-300' : 'bg-gray-300'">
            {{ book.name }}
        </h1>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BookCard',
    props: {
        book: Object,
        selectedId: String,
    },
});
</script>
