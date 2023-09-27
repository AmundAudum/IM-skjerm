// function dropHandler(ev) {
//     console.log("File(s) dropped");
  
//     // Prevent default behavior (Prevent file from being opened)
//     ev.preventDefault();
  
//     if (ev.dataTransfer.items) {
//       // Use DataTransferItemList interface to access the file(s)
//       const files = [...ev.dataTransfer.items]
//         .filter(item => item.kind === "file")
//         .map(item => item.getAsFile());
  
//       // Send the files via EmailJS
//       sendFilesViaEmailJS(files);
//     } else {
//       // Use DataTransfer interface to access the file(s)
//       const files = [...ev.dataTransfer.files];
//       // Send the files via EmailJS
//       sendFilesViaEmailJS(files);
//     }
//   }
  
//   function sendFilesViaEmailJS(files) {
//     // Replace with your actual EmailJS user ID and template ID
//     const YOUR_EMAILJS_USER_ID = "YOUR_EMAILJS_USER_ID";
//     const YOUR_EMAILJS_TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
  
//     const templateParams = {
//       to_email: "receiver@example.com",  // Replace with the recipient's email address
//       subject: "File Attachment",
//       message: "Please find the attached file.",
//     };
  
//     // Send the files via EmailJS
//     Email.send(
//       YOUR_EMAILJS_TEMPLATE_ID,
//       YOUR_EMAILJS_USER_ID,
//       templateParams
//     ).then(
//       response => {
//         console.log("Email sent successfully!", response);
//       },
//       error => {
//         console.error("Error sending email:", error);
//       }
//     );
//   }
  

  
// const btn = document.getElementById('button');

// document.getElementById('form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Sending...';

//    const serviceID = 'default_service';
//    const templateID = 'template_boj4hn5';

//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       btn.value = 'Send Email';
//       alert('Sent!');
//     }, (err) => {
//       btn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });
  

document.addEventListener('DOMContentLoaded', function() {
    const emailElement = document.getElementById('email');
    emailElement.addEventListener('click', function() {
        const textArea = document.createElement('textarea');
        textArea.value = 'IMskjermen@gmail.com';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        emailElement.textContent = 'Email copied!';
        setTimeout(function() {
            emailElement.textContent = 'IMskjermen@gmail.com';
        }, 500);
    });
});