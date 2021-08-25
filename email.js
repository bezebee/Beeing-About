window.onload = function(){document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
        emailjs.send("service_olki2n4","template_4yx0pyc", {
        "from_name": this.name.value,
        "from_email": this.email.value,
        "message": this.message.value

    }, "user_HylJEQHmK7TV8G9WBSf9D")
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("FAILED", error)
        }
    )
    return false;
})
}
