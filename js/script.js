const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})


function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "avinash6252@gmail.com",
        Password: "password",
        To: 'knyshevichartem@gmail.com',
        From: document.getElementById("exampleInputEmail1").value,
        Subject: 'Hi',
        Body: 'Hello',
    }).then(message => alert(message)
    );

}