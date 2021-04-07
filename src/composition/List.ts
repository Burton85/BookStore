import { ref, onMounted } from 'vue';
import {dataGetter} from '../plugin/getdata'
export default function() {
    const list = ref([]);

    dataGetter.getData('https://fe-interview-api.unnotech.com/books').then(value=>{
        list.value=value
    })
    return {
        list,
    };
}
