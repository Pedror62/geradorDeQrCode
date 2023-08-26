//debugger
const container = document.querySelector('.container');
const qrhederbtn = document.querySelector('#qr-form button');
const qrhederinpult = document.querySelector('#qr-form input');
const qrcodeimg = document.querySelector('#qr-code img');


//eventos
function genratioQrCode(){
    
    const qrhederinpultvalue  = qrhederinpult.value;
    if(!qrhederinpultvalue ){
        qrhederbtn.innerHTML = "Insira um link ou texto..."
        qrhederbtn.style.backgroundColor = "red";
        qrcodeimg.innerHTML = "não e possivel gerar QCode!"
     
        return 
    }; 
    
    qrhederbtn.innerHTML = "Gerando QRcode!..."
    qrcodeimg.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrcodeimg}`;
        
    qrcodeimg.addEventListener("load" , () => {
        container.classList.add("active");
        qrhederbtn.innerHTML = "QRcode Gerado!..."
        qrhederbtn.style.backgroundColor = "black";
    });  
};

qrhederbtn.addEventListener("click", () =>{
    genratioQrCode()
});

qrhederinpult.addEventListener("keydown", (e) =>{
    if(e.key === "Enter"){
        genratioQrCode();
    }
});

qrhederinpult.addEventListener("keyup", ()=>{
    if(!qrhederinpult.value){
        container.classList.remove("active");
        qrhederbtn.innerHTML = "Gerar QRcode!..."
        qrhederbtn.style.backgroundColor = "#0B5345";
    }
})
