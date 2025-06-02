// template_j8012nx
// service_u6tg75i
// blalLhMjwPmb7_1vu

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_u6tg75i',
            'template_j8012nx',
            event.target,
            'user_blalLhMjwPmb7_1vu'
        ).then(() => {            
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at Santiago.JS89@gmail.com."
            );
        })
}

let isModalOpen = false;
function toggleModal() {
    isModalOpen = !isModalOpen;
    if (isModalOpenmodalOpen) {
        return document.body.classList.remove("modal--open")
    }
    document.body.classList += " modal--open"
}