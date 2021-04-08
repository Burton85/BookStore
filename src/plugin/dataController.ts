import axios from 'axios';

const dataGetter={
    getData : async (url:string) => {
        let value = await axios
            .get(url,{headers: {'Content-Type': 'application/json' },   responseType: 'json',})
            .then((response:any) => {
                return response.data;
            })
            .catch((error:any) => {
                console.log(error);
            });
        return value;
    },
}
const dataPatcher={
    updateData : async (url:string,myData:any) => {
        let value= await axios({
            method: 'patch',
            url: url,
            data: myData,
            headers: {
                'Content-Type': 'application/json',
                'responseType': 'json'
            }
            }).then((response:any) => {
                return response;
            }).catch((error:any) => {
                console.log(error);
            });
        return value;
    },
}
export { dataGetter,dataPatcher};
