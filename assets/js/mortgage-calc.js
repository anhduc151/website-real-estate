
function calcLoan() {
   
    let amount = parseFloat(document.getElementById("amount").value);
    let iterest_rate = parseFloat(document.getElementById("iterest_rate").value);
    let years = parseFloat(document.getElementById("years").value);
  
    
    let interest = (amount * (iterest_rate * 0.01)) / years ;
    
    let payment = ((amount / (years * 12)) + interest).toFixed(2);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
    document.getElementById("payment").innerHTML = "MONTHLY REPAYMENTS  €" + payment;
  }




function sendMail(contactForm) {
  emailjs.send("service_jjtjd9i", "template_fqa1rfl", {
      name: contactForm.name.value,
      email: contactForm.email.value,
      phone: contactForm.phone.value,
      message : contactForm.time.value
  })
  .then(function(res) {
      alert('Your mail is sent!');
      console.log("success", res.status);
  },
  function(error) {
      alert('Oops... ' + JSON.stringify(error));
      console.log("Failed", error);
  });
 
  document.getElementById("myForm").reset();
  return false;
}