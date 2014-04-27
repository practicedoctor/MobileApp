function getMedication() {
		
		medicationDIV = document.getElementById("medicationDIV");
		$.ajax({
				type: "GET",
				url: "patientData.xml",
				dataType: "xml",
				success: function(xml){
					$(xml).find('rcopiaMedications').each(function(inside){
						//var fullStartDate = $(this).find('startDate').text();
						//var startDateArray = fullStartDate.split('T');
						//var startDate = startDateArray[0];
						
										
						var dose = $(this).find('sigDose').text();
						var doseUnit = $(this).find('sigDoseUnit').text();
						var doseTiming = $(this).find('sigDoseTiming').text();
						
						
						var rcopiaDrug = $(this).find('rcopiaDrug');
						var brandname = $(rcopiaDrug).find('brandName').text();
						var genericname = $(rcopiaDrug).find('genericName').text();
						//var strength = $(rcopiaDrug).find('strength').text();
						
						var insertString = '<tr><td>' + brandname+'</td><td>' + genericname+'</td><td>'+dose+'</td><td>' + doseUnit +'</td><td>' + doseTiming +'</td><tr>'
						if (brandname =='' || genericname ==''){
						//do nothing
						}
						else{
						
						$('#medicationTable').append(insertString);
						}
						
						
					});//end xml.find.each medications
					
					
					$(xml).find('rcopiaPrescriptions').each(function(inside){
						//var fullStartDate = $(this).find('startDate').text();
						//var startDateArray = fullStartDate.split('T');
						//var startDate = startDateArray[0];
						
						var dose = $(this).find('sigDose').text();
						var doseUnit = $(this).find('sigDoseUnit').text();
						var doseTiming = $(this).find('sigDoseTiming').text();
						
						var rcopiaDrug = $(this).find('rcopiaDrug');
						var brandname = $(rcopiaDrug).find('brandName').text();
						var genericname = $(rcopiaDrug).find('genericName').text();
						//var strength = $(rcopiaDrug).find('strength').text();
						
						
						
						var insertString = '<tr><td>' + brandname+'</td><td>' + genericname+'</td><td>'+dose+'</td><td>' + doseUnit +'</td><td>' + doseTiming +'</td><tr>'
						if (brandname =='' || genericname ==''){
						//do nothing
						}
						else{
						$('#prescribedMedicationTable').append(insertString);
						}
												
					});//end xml.find.each medications
					
				}//end success
			});//end ajax
		
     
     }
