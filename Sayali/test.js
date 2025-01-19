// JavaScript to handle form submission
// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Collect form data
//     const formData = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         number: document.getElementById("number").value,
//         message: document.getElementById("message").value,
//     };

//     // Send email using EmailJS
//     emailjs
//         .send("service_ru0n5nd", "template_16gzyi3", formData)
//         .then(function(response) {
//             alert("Message sent successfully!");
//             console.log("SUCCESS", response.status, response.text);
//         })
//         .catch(function(error) {
//             alert("Failed to send the message. Please try again.");
//             console.error("FAILED", error);
//         });
// });













// function sendMail(){
//     const formData = {
//                 name: document.getElementById("name").value,
//                 email: document.getElementById("email").value,
//                 number: document.getElementById("number").value,
//                 message: document.getElementById("message").value,
//              }
//              emailjs
//             .send("service_ru0n5nd", "template_16gzyi3", parms).then(alert("Email sent!!"));
        
// }