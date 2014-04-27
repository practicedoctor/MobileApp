function getAppointments() {
	var todayDate = new Date();
	var isoTodayDate = todayDate.toISOString();
	
	var otherDate = new Date();
		$.ajax({
				type: "GET",
				url: "patientAppointment.xml",
				dataType: "xml",
				success: function(xml){
					$(xml).find('appointment').each(function(){
						var appointmentDate = $(this).find('date').text();
						
						var appDateArray= appointmentDate.split('T');
						var appFullDate = appDateArray[0];
						var appFullDateArray = appFullDate.split('-');
						var year = appFullDateArray[0];
						var month = appFullDateArray[1];
						var day = appFullDateArray[2];
						var time = appDateArray[1];
												
						
						
						otherDate.setFullYear(year,month-1,day)
						
						
						var task =$(this).find('task');
						var taskName =$(this).find('taskName').text();
						//var insertString = "<li>"+ appFullDate + "  <b>Reason</b>  : "+ taskName +"</li>";
						
						var insertString = '<tr><td>' + appFullDate+'</td><td>'+ time +'</td><td>' + taskName+'</td><tr>'
						if (otherDate > todayDate){
							$('#FutureAppointmentsTable').append(insertString);
						}
						else{
							$('#PreviousAppointmentsTable').append(insertString);
						}
						
						
																
						
						
					});//end xml.find.each prescriptions
				}//end success
			});//end ajax
		
     
     }
