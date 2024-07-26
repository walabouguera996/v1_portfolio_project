const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail(){
const bodyMessage = ' Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}<br> ';

    email.send({
    Host : "smtp.elasticemail.com",
    Username : "admevariious@gmail.com",
    Password : "9E0F71C08A67B47A9CA9799787F1B7FDA677",
    To : 'admevariious@gmail.com',
    From : "this subject",
    Subject : subject.value,
    Body : bodyMessage
}).then(
message => {
    if (message =="OK") {
        Swal.fire({
            title: "Success",
            text: "Message send successfully!",
            icon: "success"
        });
}
}
);
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
})
