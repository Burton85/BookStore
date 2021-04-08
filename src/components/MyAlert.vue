<template>
    <transition name="rise">
        <div v-if="msgtype=='suss'" class="absolute w-8/12 sm:w-6/12 inset-center bg-green-100 border-t-4 border-green-500 rounded-b text-green-900 px-4 py-3 shadow-md" role="alert">
            <div class="flex">
                <div class="py-1"><svg class="fill-current h-6 w-6 text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                <div>
                <p class="font-bold  text-green-900 leading-loose">{{msg}}</p>
                </div>
            </div>
        </div>
    </transition>
    <transition name="rise">
        <div v-if="msgtype=='fail'" class="absolute w-8/12 sm:w-6/12 inset-center bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md" role="alert">
            <div class="flex">
                <div class="py-1"><svg class="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                <div>
                <p class="font-bold  text-red-900 leading-loose">{{msg}}</p>
                </div>
            </div>
        </div>
    </transition>
    <transition name="rise">
        <div v-if="msgtype=='warn'" class="absolute w-8/12 sm:w-6/12 inset-center   bg-yellow-100 border-t-4 border-yellow-500 rounded-b text-yellow-900 px-4 py-3 shadow-md" role="alert">
            <div class="flex">
                <div class="py-1"><svg class="fill-current h-6 w-6 text-yellow-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                <div>
                <p class="font-bold  text-yellow-900 leading-loose">{{msg}}</p>
                </div>
            </div>
        </div>
    </transition>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'myAlert',
    props: {
        msg: String,
        msgtype:String  
    },
});
</script>
