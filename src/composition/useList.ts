import { ref,watch } from 'vue';
import {dataGetter} from '../plugin/dataController'
import { useRouter } from 'vue-router'

export default function() {
    const router = useRouter()
    
    const rawList = ref([]);//完整book list
    const filterList = ref([]);//四筆book list
    const curIndex=ref(0);//目前瀏覽的book list index
    const listStatus=ref('leftmost')//書列是否到底
    const selectId = ref('');//選中的book id
    const clickBookHandler = (id:string) => {//選中效果
        selectId.value=id+''
        router.push('/books/'+id)
        
        let app = document.getElementById('app')||{scrollHeight:0}
        window.scroll(0,app.scrollHeight);
    };
    const getBookList=()=>{
        dataGetter.getData('https://fe-interview-api.unnotech.com/books').then(value=>{//獲取book list資料            
            rawList.value=value;
            filterList.value=value.slice(0,4)
        })
    }
    const nextBook = () => {//book list往後
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
    const pervBook = () => {//book list往前
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
    watch(curIndex, ()=>{//監聽book list狀態
        filterList.value=rawList.value.slice(curIndex.value,curIndex.value+4)
    })

    getBookList()
    return {
        curIndex,
        nextBook,
        pervBook,
        filterList,
        rawList,
        listStatus,
        selectId,
        clickBookHandler
    };
}
