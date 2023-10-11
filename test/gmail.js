function sendMail() {
    
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
        file : document.getElementById("fileInput").value,
    };

    const serviceID = "service_csydwlj";
    const templateID = "template_0ku8im8";

    emailjs
    .send(serviceID,templateID,params)
    .then((res) => {
        document.getElementById("name").value ="";
        document.getElementById("email").value ="";   
        document.getElementById("message").value ="";
        document.getElementById("fileInput").value ="";
        console.log(res);
        alert("Your email was sent sucsessfully!");
    })
    .catch(err=>console.log(err));
}

