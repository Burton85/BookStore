<template>
    <div class="book-list mt-24">
        <div class="h-100 w-8/12 flex flex-col m-auto flex-nowrap md:flex-row">
            <transition-group name="fade">
                <book-card
                    v-for="book in filterList"
                    :key="book.id"
                    :book="book"
                    @click="clickBookHandler(book.id)"
                    :selected-id="selectId"
                ></book-card>
            </transition-group>
        </div>
        <div class="flex justify-center">
            <button class="focus:outline-none" @click="pervBook">
                <svg
                    class="h-10 w-10 text-gray-800"
                    :class="listStatus == 'leftmost' ? 'opacity-50' : 'opacity-100'"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M18 15l-6-6l-6 6h12" transform="rotate(270 12 12)" />
                </svg>
            </button>
            <button class="focus:outline-none " @click="nextBook">
                <svg
                    class="h-10 w-10 text-gray-800"
                    :class="listStatus == 'rightmost' ? 'opacity-50' : 'opacity-100'"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M18 15l-6-6l-6 6h12" transform="rotate(90 12 12)" />
                </svg>
            </button>
        </div>
    </div>
</template>
<script lang="ts">
import useList from '@/composition/useList';
import BookCard from '@/components/BookCard.vue';
export default {
    props: {
        id: String,
    },
    components: {
        BookCard,
    },
    setup(props: any) {
        return useList();
    },
};
</script>
