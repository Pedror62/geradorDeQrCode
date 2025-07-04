const container = document.querySelector('.container');
const qrHeaderBtn = document.querySelector('#qr-form #BTN_generation');
const qrHeaderInput = document.querySelector('#qr-form input');
const qrcodeimg = document.querySelector('#qr-code img');
const clearBTN = document.querySelector('.BtnClear');

function generateQrCode() {
    const qrHeaderInputValue = qrHeaderInput.value;

    if (!qrHeaderInputValue) {
        qrHeaderBtn.innerHTML = "Insira um link ou texto...";
        qrHeaderBtn.style.backgroundColor = "red";
        qrcodeimg.alt = "Não é possível gerar QR Code!";
        return;
    }

    qrHeaderBtn.innerHTML = "Gerando QRcode!...";
    qrcodeimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=155x155&data=${qrHeaderInputValue}`;

    qrcodeimg.addEventListener("load", () => {
        container?.classList.add('active');
        qrHeaderBtn.textContent = 'QRcode gerado!';
        qrHeaderBtn.style.backgroundColor = 'black';
        qrHeaderBtn.disabled = true;

        // xxpira em 30 segundos
        setTimeout(limparTudo, 30000);
    }, { once: true });
}

function limparTudo() {
    qrHeaderInput.value = '';
    qrcodeimg.src = '';
    container?.classList.remove('active');
    qrHeaderBtn.textContent = 'Gerar QRcode!...';
    qrHeaderBtn.style.backgroundColor = '#0B5345';
    qrHeaderBtn.disabled = false;
}

clearBTN.addEventListener('click', limparTudo);

qrHeaderBtn.addEventListener("click", () => {
    generateQrCode();
});

qrHeaderInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        generateQrCode();
    }
});

qrHeaderInput.addEventListener("keyup", () => {
    if (!qrHeaderInput.value) {
        container.classList.remove("active");
        qrHeaderBtn.innerHTML = "Gerar QRcode!...";
        qrHeaderBtn.style.backgroundColor = "#0B5345";
    }
});
