import { ref, onMounted,watch } from 'vue';
import {dataGetter} from '../plugin/getdata'
export default function() {
    const rawList = ref([]);
    const filterList = ref([]);
    const curIndex=ref(0);
    const listStatus=ref('leftmost')
    const nextBook = () => {
        if(curIndex.value>rawList.value.length-5){
            listStatus.value='rightmost'
            return
        }else{
            curIndex.value++
            if(curIndex.value>rawList.value.length-5){
                listStatus.value='rightmost'
            }
        }
    };
    const pervBook = () => {
        if(curIndex.value<=0){
            listStatus.value='leftmost'
            return
        }else{
            curIndex.value--
            if(curIndex.value<=0){
                listStatus.value='leftmost'
            }
        }
    };
    dataGetter.getData('https://fe-interview-api.unnotech.com/books').then(value=>{
            rawList.value=value;
            filterList.value=value.slice(0,4)
    })
    watch(curIndex, ()=>{
        filterList.value=rawList.value.slice(curIndex.value,curIndex.value+4)
    })

    return {
        curIndex,
        nextBook,
        pervBook,
        filterList,
        listStatus
    };
}
