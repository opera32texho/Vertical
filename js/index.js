
$( "#choosename tbody tr td:first-child" ).each(function( index ) {
	$("#selectname").append('<option>' + $(this).text() + '</option>');	
});
$('#submit-button').on('click', function () {
	$("#choosename tbody tr").each(function(){
		if($(this).find('td:first-child').text() == $("#selectname").val())
			$(this).find("td:last-child" ).text('$' + $('#price-item').val());
	});
});



$('#price-item').on('input', function (){
	
	if(!$.isNumeric($(this).val())){
		
		$(this).addClass('invalid');
		$('#submit-button').attr('disabled' , true);
		$('#modal1').openModal();
		
	}else{
		$(this).removeClass('invalid');
		$('#submit-button').attr('disabled' , false);
	}
});



