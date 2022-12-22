//===============Start Request Location Form  Credit to Webslesson  =========================//
$(document).ready(function() {
    //load location data
    load_json_data('location');
  
    function load_json_data(id, parent_id) {
        let item = ''; 
        $.getJSON('ie.json', function(data) {
  
            item += '<option value="">Select ' + id + '</option>';

            $.each(data, function(key, value) {
                if (id == 'location') {
                    if (value.parent_id == '0') {
                        item += '<option value="' + value.id + '">' + value.city + '</option>';
                    }
                } else {
                    if (value.parent_id == parent_id) {
                        item += '<option value="' + value.id + '">' + value.city + '</option>';
                    }
                }
            });
            $('#' + id).html(item);
        });
  
    }
  
    $(document).on('change', '#location', function() {
        let location_id = $(this).val();
        if (location_id != '') {
            load_json_data('area', location_id);
        } else {
            $('#area').html('<option value="">Select Area</option>');
        }
    });
    
  });
  //===============End Request Location Form=========================//


function sendMail(contactForm) {
    emailjs.send("service_jjtjd9i", "template_fqa1rfl", {
        name: contactForm.name.value,
        email: contactForm.email.value,
        phone: contactForm.phone.value,
        message : contactForm.time.value,
        location : contactForm.message2.value,
        area : contactForm.message3.value,
        radio : contactForm.message4.value
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