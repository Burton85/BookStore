import { ref,watch,computed } from 'vue';
import {dataGetter,dataPatcher} from '../plugin/dataController'
import { useRoute } from 'vue-router'
import useAlert from '@/composition/useAlert';

export default function() {
    const {msg,msgtype,showAlert}=useAlert()
    const route = useRoute()
    
    const rawBookDetail=ref({})
    const bookDetail=ref({price:0,count:0})
    const getBookDetail=()=>{
        dataGetter.getData('https://fe-interview-api.unnotech.com/profile/'+route.params.bookId).then(value=>{//獲取book detail資料            
            rawBookDetail.value={price:value.price,count:value.count}//將原始數據淺拷貝出來
            bookDetail.value=value
        }).catch(err=>{
            rawBookDetail.value={price:0,count:0}
            bookDetail.value={price:0,count:0}
            showAlert('查無資料','fail')
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
     
    watch(id, ()=>{
        getBookDetail()
    })



    function isCountEqual(object1:any, object2:any) {
      return object1.count === object2.count;
    }
    function isPriceEqual(object1:any, object2:any) {
        return object1.price === object2.price;
    }
    const submitData=()=>{
        if(isCountEqual(rawBookDetail.value,bookDetail.value)&&isPriceEqual(rawBookDetail.value,bookDetail.value)){
            showAlert('請修改後再提交','warn')
        }else{
            dataPatcher.updateData("https://fe-interview-api.unnotech.com/profile/"+id.value,{price:bookDetail.value.price,count:bookDetail.value.count})
            .then(res=>{
                if(res.status==200){
                    showAlert('修改成功','suss')
                }else{
                    showAlert('網路異常','fail')
                }
            }).catch(err=>{
                rawBookDetail.value={price:0,count:0}
                bookDetail.value={price:0,count:0}
                showAlert('查無資料','fail')
            })
        }
    }

    getBookDetail()
    return {
        msg,
        msgtype,
        addCount,
        reduceCount,
        addPrice,
        reducePrice,
        bookDetail,
        submitData
    };
}
