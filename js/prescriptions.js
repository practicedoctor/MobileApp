function getPrescription() {


		$.ajax({
				type: "GET",
				url: "patientData.xml",
				dataType: "xml",
				success: function(xml){
					$(xml).find('specPrescriptions').each(function(inside){
						var fullExpDate = $(this).find('expirationDate').text();
						var experationArray = fullExpDate.split('T');
						var expDate = experationArray[0];
						
						
						var recommendation = $(this).find('recommendation').text();
						var cmt = $(this).find('cmt').text();
						var  sphereOD= $(this).find('sphereOd').text();
						var sphereOS = $(this).find('sphereOs').text();
						var cylinderOD = $(this).find('cylinderOd').text();
						var cylinderOS = $(this).find('cylinderOs').text();
						var axisOD = $(this).find('axisOd').text();
						var  axisOS= $(this).find('axisOs').text();
						var  addOD= $(this).find('addOd').text();
						var  addOS= $(this).find('addOs').text();
						var  bcOD= $(this).find('bcOd').text();
						var  bcOS= $(this).find('bcOs').text();
						var  diameterOD= $(this).find('diameterOd').text();
						var  diameterOS= $(this).find('diamterOs').text();
						var  tintOD= $(this).find('tintOd').text();
						var  tintOS= $(this).find('tintOs').text();
						var  acuityOD= $(this).find('acuityOd').text();
						var  acuityOS= $(this).find('acuityOs').text();
						var  acuityOU= $(this).find('acuityOu').text();
						
						
						//var string = '<p> BrandName: ' + brandname + ' : GenericName: ' +  genericname + ' : Strength : ' + strength + '</p>' 
						var insertString = '<tr><td>' + expDate+'</td><td>' + recommendation+'</td><td>' + cmt+'</td><td>' + sphereOD+'</td><td>' + sphereOS+'</td><td>' + cylinderOD+'</td><td>' + cylinderOS+'</td><td>' + axisOD+'</td><td>' + axisOS+'</td><td>' + addOD+'</td><td>' + addOS+'</td><td>' + bcOD+'</td><td>' + bcOS+'</td><td>' + diameterOD+'</td><td>' + diameterOS+'</td><td>' + tintOD+'</td><td>' + tintOS+'</td><td>' + acuityOD+'</td><td>'+acuityOS+'</td><td>' + acuityOU +'</td><tr>'
						if (recommendation ==''){
						
						}
						else{
						
						$('#prescriptionTable').append(insertString);
						}
					});//end xml.find.each prescriptions
					
					
					
					$(xml).find('clPrescriptions').each(function(inside){
					
						var fullExpDate = $(this).find('expirationDate').text();
						var experationArray = fullExpDate.split('T');
						var expDate = experationArray[0];
						
						
						var recommendation = $(this).find('recommendation').text();
						var cmt = $(this).find('cmt').text();
						var sphereOD= $(this).find('sphereOd').text();
						var sphereOS = $(this).find('sphereOs').text();
						var cylinderOD = $(this).find('cylinderOd').text();
						var cylinderOS = $(this).find('cylinderOs').text();
						var axisOD = $(this).find('axisOd').text();
						var axisOS= $(this).find('axisOs').text();
						var addOD= $(this).find('addOd').text();
						var addOS= $(this).find('addOs').text();
						var bcOD= $(this).find('bcOd').text();
						var bcOS= $(this).find('bcOs').text();
						var diameterOD= $(this).find('diameterOd').text();
						var diameterOS= $(this).find('diamterOs').text();
						var tintOD= $(this).find('tintOd').text();
						var tintOS= $(this).find('tintOs').text();
						var acuityOD= $(this).find('acuityOd').text();
						var acuityOS= $(this).find('acuityOs').text();
						var acuityOU= $(this).find('acuityOu').text();
						
						
						//var string = '<p> BrandName: ' + brandname + ' : GenericName: ' +  genericname + ' : Strength : ' + strength + '</p>' 
						var insertString = '<tr><td>' + expDate+'</td><td>' + recommendation+'</td><td>' + cmt+'</td><td>' + sphereOD+'</td><td>' + sphereOS+'</td><td>' + cylinderOD+'</td><td>' + cylinderOS+'</td><td>' + axisOD+'</td><td>' + axisOS+'</td><td>' + addOD+'</td><td>' + addOS+'</td><td>' + bcOD+'</td><td>' + bcOS+'</td><td>' + diameterOD+'</td><td>' + diameterOS+'</td><td>' + tintOD+'</td><td>' + tintOS+'</td><td>' + acuityOD+'</td><td>'+acuityOS+'</td><td>' + acuityOU +'</td><tr>'
						if (expDate ==''){
						
						}
						else{
						
						$('#contactsRxTable').append(insertString);
						}
					});//end xml.find.each prescriptions
					
					
					
					$(xml).find('diagnosticCodes').each(function(inside){
					
						var diagnosticCode = $(this).find('code').text();
						var description = $(this).find('description').text();
						
						
						
						//var string = '<p> BrandName: ' + brandname + ' : GenericName: ' +  genericname + ' : Strength : ' + strength + '</p>' 
						var insertString = '<tr><td>' + diagnosticCode+'</td><td>'+ description +'</td><tr>'
						if (diagnosticCode ==''){
						
						}
						else{
						
						$('#diagnosticCodesTable').append(insertString);
						}
					});//end xml.find.each prescriptions
					
					
					
				}//end success
			});//end ajax
		
     
     }
