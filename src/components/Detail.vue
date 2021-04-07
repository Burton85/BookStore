<template>
    <form
        class="detail bg-gray-200 bg-opacity-75 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-6/12 m-auto my-10 flex border-4 border-gray-500 border-opacity-50"
    >
        <div class="input-container w-1/2">
            <div class="md:flex md:items-center my-6">
                <div class="md:w-1/4">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        價格
                    </label>
                </div>
                <button @click="reducePrice()" class="md:w-1/8 focus:outline-none hover:text-yellow-500">
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                </button>
                <input
                    class="md:w-2/4 bg-gray-300 appearance-none rounded w-full py-2 mx-8 text-center text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                    type="number"
                    :placeholder="bookDetail.price"
                />
                <button @click="addPrice()" class="md:w-1/8 focus:outline-none hover:text-yellow-500">
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                </button>
            </div>
            <div class="md:flex md:items-center my-6">
                <div class="md:w-1/4">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        數量
                    </label>
                </div>
                <button @click="reduceCount()" class="md:w-1/8 focus:outline-none hover:text-yellow-500">
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2 "
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                </button>
                <input
                    class="md:w-2/4 bg-gray-300 appearance-none rounded w-full py-2 mx-8 text-center text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"
                    type="number"
                    :placeholder="bookDetail.count"
                />
                <button @click="addCount()" class="md:w-1/8 focus:outline-none hover:text-yellow-500">
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>

        <div class="submit-button md:flex md:items-center w-1/2">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
                <button
                    class="shadow bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                    @click="submitData()"
                >
                    確認修改
                </button>
            </div>
        </div>
    </form>
</template>
<script lang="ts">
import useDetail from '@/composition/useDetail';

export default {
    setup(props: any) {
        return useDetail();
    },
};
</script>
