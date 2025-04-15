var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
	alphabets_only = /^[A-Za-z ]+$/,
	email_regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
	mobile_number_length = 10,
	numbers_only = /^[0-9]+$/,
	location_list = ['Mumbai','Delhi','Bengaluru','Chennai','Hyderabad','Ahmedabad','Vizag'];

get_location_list();
function get_location_list() {
	var location_list_html = '<option value="">Select Location</option>';
	for (var i = 0; i < location_list.length; i++) {
		location_list_html += '<option value="'+location_list[i]+'">'+location_list[i]+'</option>';
	}
	$('#contact-us-location').html(location_list_html);
}

$('#contact-us-full-name').on('keyup blur', function() {
	check_contact_us_full_name();
});

$('#contact-us-company-name').on('keyup blur', function() {
	check_contact_us_company_name();
});

$('#contact-us-email-id').on('keyup blur', function() {
	check_contact_us_email_id();
});

$('#contact-us-location').on('change', function() {
	check_contact_us_location();
});

$('#contact-us-phone-number').on('keyup', function() {
	check_contact_us_phone_number_keyup();
});

$('#contact-us-phone-number').on('blur', function() {
	check_contact_us_phone_number_blur();
});

$('#contact-us-message').on('keyup blur', function() {
	check_contact_us_message();
});

function check_contact_us_full_name() {
	var contact_us_full_name = $('#contact-us-full-name').val();
	if (contact_us_full_name != '') {
		if(!isNaN(contact_us_full_name) || !alphabets_only.test(contact_us_full_name)) {
	      $('#contact-us-full-name-error-msg').html('<span class="text-danger error-msg-small">Name should only have alphabets.</span>');
	      $('#contact-us-full-name').val(contact_us_full_name.slice(0,-1));
	    } else {
	      $('#contact-us-full-name-error-msg').html('');
	    }
	} else {
		$('#contact-us-full-name-error-msg').html('<span class="text-danger error-msg-small">Please enter your full name.</span>');
	}
}

function check_contact_us_company_name() {
	var contact_us_company_name = $('#contact-us-company-name').val();
	if (contact_us_company_name != '') {
		$('#contact-us-company-name-error-msg').html('');
	} else {
		$('#contact-us-company-name-error-msg').html('<span class="text-danger error-msg-small">Please enter your company name.</span>');
	}
}

function check_contact_us_email_id() {
	var contact_us_email_id = $('#contact-us-email-id').val().toLowerCase();
  	if (contact_us_email_id != '') {
      	if(!email_regex.test(contact_us_email_id)) {
        	$('#contact-us-email-id-error-msg').html('<span class="text-danger error-msg-small">Please enter a valid email id.</span>');
      	} else {
        	$('#contact-us-email-id-error-msg').html('');
      	}
  	} else {
    	$('#contact-us-email-id-error-msg').html('<span class="text-danger error-msg-small">Please enter a valid email id.</span>');
  	}
}

function check_contact_us_location() {
	var contact_us_location = $('#contact-us-location').val();

	var location_list_html = '<option value="">Select Location</option>';
	var contact_us_location_count = 0;
	if (contact_us_location != '') {
		for (var i = 0; i < location_list.length; i++) {
			if (contact_us_location.toLowerCase() == location_list[i].toLowerCase()) {
				contact_us_location_count++;
			}
			location_list_html += '<option value="'+location_list[i]+'">'+location_list[i]+'</option>';
		}
		if (contact_us_location_count <= 0) {
			$('#contact-us-location').html(location_list_html);
			$('#contact-us-location-error-msg').html('<span class="text-danger error-msg-small">Please select a valid location</span>');
		} else {
			$('#contact-us-location-error-msg').html('');
		}
	} else {
		$('#contact-us-location-error-msg').html('<span class="text-danger error-msg-small">Please select a location</span>');
	}
}

function check_contact_us_phone_number_keyup() {
	var contact_us_phone_number = $('#contact-us-phone-number').val();
    if (contact_us_phone_number != '') {
        if (!numbers_only.test(contact_us_phone_number)) {
            $('#contact-us-phone-number').val(contact_us_phone_number.slice(0,-1));
            $('#contact-us-phone-number-error-msg').html('<span class="text-danger error-msg-small">Phone number can be only digits.</span>');
        } else if (contact_us_phone_number.length > mobile_number_length) {
            $('#contact-us-phone-number').val(contact_us_phone_number.slice(0,mobile_number_length));
            $('#contact-us-phone-number-error-msg').html('<span class="text-danger error-msg-small">Phone number should be of max '+mobile_number_length+' digits.</span>');
        } else if (contact_us_phone_number < 0){
            $('#contact-us-phone-number').val('');
            $('#contact-us-phone-number-error-msg').html('<span class="text-danger error-msg-small">Phone number should be of 10 digits.</span>');
        } else {
            $('#contact-us-phone-number-error-msg').html('');
        }
    } else {
        $('#contact-us-phone-number-error-msg').html('<span class="text-danger error-msg-small">Please enter your phone number.</span>');
    }
}

function check_contact_us_phone_number_blur() {
	var contact_us_phone_number = $('#contact-us-phone-number').val();
    if (contact_us_phone_number != '') {
        if (!numbers_only.test(contact_us_phone_number)) {
            $('#contact-us-phone-number').val(contact_us_phone_number.slice(0,-1));
            $('#contact-us-phone-number-error-msg').html('<span class="text-danger error-msg-small">Phone number can be only digits.</span>');
        } else if (contact_us_phone_number.length != mobile_number_length) {
            $('#contact-us-phone-number').val(contact_us_phone_number.slice(0,mobile_number_length));
            $('#contact-us-phone-number-error-msg').html('<span class="text-danger error-msg-small">Phone number should be of max '+mobile_number_length+' digits.</span>');
        } else if (contact_us_phone_number < 0){
            $('#contact-us-phone-number').val('');
            $('#contact-us-phone-number-error-msg').html('<span class="text-danger error-msg-small">Phone number should be of 10 digits.</span>');
        } else {
            $('#contact-us-phone-number-error-msg').html('');
        }
    } else {
        $('#contact-us-phone-number-error-msg').html('<span class="text-danger error-msg-small">Please enter your phone number.</span>');
    }
}

function check_contact_us_message() {
	var contact_us_message = $('#contact-us-message').val();
	if (contact_us_message != '') {
		$('#contact-us-message-error-msg').html('');
	} else {
		$('#contact-us-message-error-msg').html('<span class="text-danger error-msg-small">Please leave your message here.</span>');
	}
}

function submit_contact_us_details() {
	var contact_us_full_name = $('#contact-us-full-name').val();
	var contact_us_company_name = $('#contact-us-company-name').val();
	var contact_us_email_id = $('#contact-us-email-id').val().toLowerCase();
	var contact_us_location = $('#contact-us-location').val();
	var contact_us_message = $('#contact-us-message').val();
	var contact_us_phone_number = $('#contact-us-phone-number').val();
	var location_list_html = '<option value="">Select Location</option>';
	var contact_us_location_count = 0;
	
	if (contact_us_location != '') {
		for (var i = 0; i < location_list.length; i++) {
			if (contact_us_location.toLowerCase() == location_list[i].toLowerCase()) {
				contact_us_location_count++;
			}
			location_list_html += '<option value="'+location_list[i]+'">'+location_list[i]+'</option>';
		}
		if (contact_us_location_count <= 0) {
			$('#contact-us-location').html(location_list_html);
			$('#contact-us-location-error-msg').html('<span class="text-danger error-msg-small">Please select a valid location</span>');
		} else {
			$('#contact-us-location-error-msg').html('');
		}
	} else {
		$('#contact-us-location-error-msg').html('<span class="text-danger error-msg-small">Please select a location</span>');
	}

	if (contact_us_full_name != '' && alphabets_only.test(contact_us_full_name) && contact_us_company_name != '' && contact_us_email_id != '' && contact_us_phone_number != '' 
		&& numbers_only.test(contact_us_phone_number) && contact_us_phone_number.length == mobile_number_length && email_regex.test(contact_us_email_id) && contact_us_location != '' 
		&& contact_us_location_count > 0 && contact_us_message != '') {

		var formdata = new FormData();
        formdata.append('contact_us_full_name', contact_us_full_name);
        formdata.append('contact_us_email_id', contact_us_email_id);
        formdata.append('contact_us_company_name', contact_us_company_name);
		formdata.append('contact_us_location', contact_us_location);
	    formdata.append('contact_us_message', contact_us_message);
	    formdata.append('contact_us_phone_number', contact_us_phone_number);
	   
	    $('#submit-contact-details-btn').prop('disabled',true);
	    $('#submit-contact-details-btn').css('background','#b3b3b3');
	    $('#contact-us-error-msg-div').html('<span class="text-warning error-msg-small">Please wait while we are generating your request.</span>');

	    $.ajax({
	        type: "POST",
	        url: base_url+"ContactUs/add_contact_us_details",
	        data: formdata,
	        dataType: "json",
	        contentType: false,
	        processData: false,
	        success: function(data) {
	            if (data.status == '1') {
	                toastr.success('Your request has been generated successfully.');
	                $('#contact-us-full-name').val('');
	                $('#contact-us-company-name').val('');
					$('#contact-us-email-id').val('');
					$('#contact-us-location').val('');
					$('#contact-us-message').val('');
					$('#contact-us-phone-number').val('');
	            } else {
	                toastr.error('OOPS! Something went wrong while generating your request. Please try again.');
	            }
	            $('#submit-contact-details-btn').prop('disabled',false);
	            $('#submit-contact-details-btn').css('background','#FFFFFF 0% 0% no-repeat padding-box');
	            $('#contact-us-error-msg-div').html('');
	        },
	        error: function(data) {
	            toastr.error('OOPS! Something went wrong while generating your request. Please try again.');
	            $('#submit-contact-details-btn').prop('disabled',false);
	            $('#submit-contact-details-btn').css('background','#005799');
	            $('#contact-us-error-msg-div').html('');
	        }
	    });

	} else {
		check_contact_us_full_name();

		check_contact_us_company_name();

		check_contact_us_email_id();

		check_contact_us_location();

		check_contact_us_phone_number_blur()

		check_contact_us_message();
	}
}