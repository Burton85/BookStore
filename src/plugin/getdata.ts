import axios from 'axios';

const dataGetter={
    getData : async (url:string) => {
        let value = await axios
            .get(url,{headers: {'Content-Type': 'application/json' },   responseType: 'json',})
            .then((response:any) => {
                return response.data;
            })
            .catch((error:any) => {
                alert(error);
            });
        return value;
    },

}
export { dataGetter};