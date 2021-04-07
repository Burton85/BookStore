<template>
    <div class="book-list h-80 w-6/12 flex m-auto flex-nowrap">
        <transition-group name="fade">
            <div v-for="book in filterList" :key="book.id" class="flex-1 m-2"><img :src="book.image" alt="book.name" />{{ book.name }}</div>
        </transition-group>
    </div>
    <div class="flex justify-center	">
        <button class="focus:outline-none " @click="pervBook">
            <svg class="h-10 w-10" :class="listStatus=='leftmost'?'text-white':'text-black-800'" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M18 15l-6-6l-6 6h12" transform="rotate(270 12 12)" /></svg>
        </button>
        <br/>
        <button class="focus:outline-none " @click="nextBook">
            <svg class="h-10 w-10" :class="listStatus=='rightmost'?'text-white':'text-black-800'"  width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M18 15l-6-6l-6 6h12" transform="rotate(90 12 12)" /></svg>
        </button>
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
<style>
.book-list{
    position: relative;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-leave-to{
    display: none;
}

</style>
