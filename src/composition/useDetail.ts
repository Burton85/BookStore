import { ref,watch,computed } from 'vue';
import {dataGetter,dataPatcher} from '../plugin/dataController'
import { useRoute } from 'vue-router'

export default function() {
    const route = useRoute()
    
    const rawBookDetail=ref({})
    const bookDetail=ref({price:0,count:0})
    const getBookDetail=()=>{
        dataGetter.getData('https://fe-interview-api.unnotech.com/profile/'+route.params.bookId).then(value=>{//獲取book detail資料            
            rawBookDetail.value={price:value.price,count:value.count}//將原始數據淺拷貝出來
            bookDetail.value=value
        })
    }
    const addPrice=()=>{
        return bookDetail.value.price++
    }
    const reducePrice=()=>{
        if(bookDetail.value.price>0){
            return bookDetail.value.price--
        }
    }
    const addCount=()=>{
        return bookDetail.value.count++
    }
    const reduceCount=()=>{
        if(bookDetail.value.count>0){
            return bookDetail.value.count--
        }
    }
    const id = computed(() => {//不能直接監聽route 會導致洩漏
        return route.params.bookId
     })
    function isCountEqual(object1:any, object2:any) {
        console.log(object1,object2)
      return object1.count === object2.count;
    }
    function isPriceEqual(object1:any, object2:any) {
        return object1.price === object2.price;
    }
    const submitData=()=>{
        if(isCountEqual(rawBookDetail.value,bookDetail.value)&&isPriceEqual(rawBookDetail.value,bookDetail.value)){
            alert('請修改後再提交')
        }else{
            console.log(1)
            dataPatcher.updateData("https://fe-interview-api.unnotech.com/profile/"+id.value,{price:bookDetail.value.price,count:bookDetail.value.count})
            .then(res=>{
                if(res.status==200){
                    alert('修改成功')
                }else{
                    alert('網路異常')
                }
            })
        }
    }
    watch(id, ()=>{
        getBookDetail()
    })
    getBookDetail()
    return {
        addCount,
        reduceCount,
        addPrice,
        reducePrice,
        bookDetail,
        submitData
    };
}
