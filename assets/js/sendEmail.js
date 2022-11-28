function sendMail(contactForm) {
    emailjs.sendForm("service_kcg0vxp", "resume-rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SuCcess", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
        return false;  // To block from loading a new page
}

