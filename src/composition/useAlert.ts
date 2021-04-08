import { ref } from 'vue';

export default function() {
    const msg=ref('')
    const msgtype=ref('')

    const showAlert=(mymsg:string,mytype:string)=>{
        if(msg.value==''){
            msg.value=mymsg;
            msgtype.value=mytype;
            var hideMsg = window.setTimeout(( () => {
                msg.value='';
                msgtype.value='';
                window.clearInterval(hideMsg);
            }), 1500);
        }
    }
    return {
        msg,
        msgtype,
        showAlert
    };
}
