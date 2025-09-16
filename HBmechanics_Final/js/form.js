(function(){
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key
})();

document.getElementById('booking-form').addEventListener('submit', function(event){
    event.preventDefault();

    const serviceID = "YOUR_SERVICE_ID";   // Replace with your EmailJS Service ID
    const templateID = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS Template ID

    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send(serviceID, templateID, templateParams)
    .then(function(response) {
        document.getElementById('form-status').innerText = "Booking request sent! Thank you.";
    }, function(error) {
        document.getElementById('form-status').innerText = "Oops! Something went wrong, please try again.";
    });

    this.reset();
});
