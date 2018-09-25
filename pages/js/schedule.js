
var avalable_rooms_amount=0;
var doctoekey2
var doctoekey1
var octorID
var roomNo="room1";

function  add_schedule()
{
	
	var scheduleRef = firebase.database().ref("schedule/").push();

  var doctor_name   = document.getElementById('doctor_name').value;
  var day   = document.getElementById('day').value;
  var startTime    = document.getElementById('startTime').value;
  var endTime = document.getElementById('endTime').value;
  var patientNumber = document.getElementById('patientNumber').value;

  //var doctorID = firebase.database().ref("User/doctor/");
  
  var fname = doctor_name.split(" ", 1);
  var laname = doctor_name.split(" ", 2);
    console.log("fname is :"+fname);
  
  var ref = firebase.database().ref('User/doctor/');
 
 
 ref.orderByChild('Firstname').equalTo(fname.toString()).on("value", function(snapshot) {
   console.log(snapshot.val());
    doctorkey1= snapshot.val();
    snapshot.forEach(function(data) {

  
      scheduleRef.child("DoctorID").set(data.key);
 
    });
});


  
  scheduleRef.child("Day").set(day);
  scheduleRef.child("StartTime").set(startTime);
  scheduleRef.child("EndTime").set(endTime);
  scheduleRef.child("patientNumber").set(patientNumber);
  scheduleRef.child("Room").set(roomNo);
  alert("New Shedule Added")
}


	var doctorRef = firebase.database().ref("User/doctor/");
    doctorRef.on("child_added",snap =>{
    var docfname=snap.child("Firstname").val();
    var doclname=snap.child("Lastname").val();
    var doctorname= docfname+" "+doclname;
   
    $("#doctor_name").val("14"); 
    var x = document.getElementById("doctor_name");
    var c = document.createElement("option");
    c.text = doctorname;
    x.options.add(c, 1);
  

});

$("#endTime").change(function(){
  var startTimes    = document.getElementById('startTime').value.split(':');
  var endTimes = document.getElementById('endTime').value.split(':');
  var startTime  = startTimes[0]+startTimes[1]
  var endTime = endTimes[0]+endTimes[1]
  var sheduleRef = firebase.database().ref("schedule");
  var day   = document.getElementById('day').value;
 
  sheduleRef.on("child_added",snap =>{
    var databaseDay=snap.child("Day").val(); 
    if(day==databaseDay){
      var databaseStartTime=snap.child("StartTime").val();
      var databaseEndTime=snap.child("EndTime").val();
      var roomID=snap.child("Room").val();
      if( dateRangeOverlaps(databaseStartTime,databaseEndTime,startTime, endTime))
      {
        
        $( "#"+roomID  ).fadeOut( "slow" );
        //document.getElementById(roomID).style.backgroundColor = "#d90f0f";

      }
      else{}
    }
    
    
  });
});
function dateRangeOverlaps(a_start, a_end, b_start, b_end) {

  if (a_start <= b_start && b_start <= a_end) return true; // b starts in a
  if (a_start <= b_end   && b_end   <= a_end) return true; // b ends in a
  if (b_start <  a_start && a_end   <  b_end) return true; // a in b
 
  return false;
 
}
function setroom(room_number)
{
 var room1= document.getElementById('room1'); 
 var room2= document.getElementById('room2');
 var room3= document.getElementById('room3');
 var room4= document.getElementById('room4');
 var room5= document.getElementById('room5');
 var room6= document.getElementById('room6');
 var room7= document.getElementById('room7');
 var room8= document.getElementById('room8');
 var room9= document.getElementById('room9');
 var room10= document.getElementById('room10');

 if (room_number==1) 
 {
 	var color = $('#room1').css("background-color");
 	 if(color=="rgb(49, 179, 109)")
 	 {
 	 	room1.style.backgroundColor = "#035ab4";
 	 	room2.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room3.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room4.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room5.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room6.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room7.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room8.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room9.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room10.style.backgroundColor = "rgb(49, 179, 109)";
 	 	roomNo="room1";

 	 }


 	
 	
 }

  if (room_number==2) 
 {
 	
 	var color = $('#room2').css("background-color");
 	 if(color=="rgb(49, 179, 109)")
 	 {
 	 	room1.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room2.style.backgroundColor = "#035ab4";
 	 	room3.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room4.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room5.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room6.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room7.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room8.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room9.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room10.style.backgroundColor = "rgb(49, 179, 109)";
 	 	roomNo="room2";

 	 }
 	 

 }

  if (room_number==3) 
 {
 	
 	 var color = $('#room3').css("background-color");
 	 if(color=="rgb(49, 179, 109)")
 	 {
 	 	room3.style.backgroundColor = "#035ab4";
 	 	room1.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room2.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room4.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room5.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room6.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room7.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room8.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room9.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room10.style.backgroundColor = "rgb(49, 179, 109)";
 	 	roomNo="room3";
 	 }
 	 
 }

  if (room_number==4) 
 {
 	
 	 var color = $('#room4').css("background-color");
 	 if(color=="rgb(49, 179, 109)")
 	 {
 	 	room4.style.backgroundColor = "#035ab4";
 	 	room3.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room1.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room2.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room5.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room6.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room7.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room8.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room9.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room10.style.backgroundColor = "rgb(49, 179, 109)";
 	 	roomNo="room4";
 	 }
 	
 }

  if (room_number==5) 
 {
 	
 	var color = $('#room5').css("background-color");
 	 if(color=="rgb(49, 179, 109)")
 	 {
 	 	room5.style.backgroundColor = "#035ab4";
 	 	room4.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room3.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room1.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room2.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room6.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room7.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room8.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room9.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room10.style.backgroundColor = "rgb(49, 179, 109)";
 	 	roomNo="room5";
 	 }
 	 
 }

  if (room_number==6) 
 {
 	
 	var color = $('#room6').css("background-color");
 	 if(color=="rgb(49, 179, 109)")
 	 {
 	 	room6.style.backgroundColor = "#035ab4";
 	 	room5.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room4.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room3.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room1.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room2.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room7.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room8.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room9.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room10.style.backgroundColor = "rgb(49, 179, 109)";
 	 	roomNo="room6";
 	 }
 	 
 }

  if (room_number==7) 
 {
 	
 	 var color = $('#room7').css("background-color");
 	 if(color=="rgb(49, 179, 109)")
 	 {
 	 	room7.style.backgroundColor = "#035ab4";
 	 	room6.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room5.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room4.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room3.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room1.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room2.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room8.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room9.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room10.style.backgroundColor = "rgb(49, 179, 109)";
 	 	roomNo="room7";
 	 }
 	 
 }
 if (room_number==8) 
 {
 	
 	 var color = $('#room8').css("background-color");
 	 if(color=="rgb(49, 179, 109)")
 	 {
 	 	room8.style.backgroundColor = "#035ab4";
 	 	room6.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room5.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room4.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room3.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room1.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room2.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room7.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room9.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room10.style.backgroundColor = "rgb(49, 179, 109)";
 	 	roomNo="room8";
 	 }
 	 
 }
 if (room_number==9) 
 {
 	
 	var color = $('#room9').css("background-color");
 	 if(color=="rgb(49, 179, 109)")
 	 {
 	 	room9.style.backgroundColor = "#035ab4";
 	 	room6.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room5.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room4.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room3.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room1.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room2.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room7.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room8.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room10.style.backgroundColor = "rgb(49, 179, 109)";
 	 	roomNo="room9";
 	 }
 	 
 }
 if (room_number==10) 
 {
 	
 	var color = $('#room10').css("background-color");
 	 if(color=="rgb(49, 179, 109)")
 	 {
 	 	room10.style.backgroundColor = "#035ab4";
 	 	room6.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room5.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room4.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room3.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room1.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room2.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room7.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room8.style.backgroundColor = "rgb(49, 179, 109)";
 	 	room9.style.backgroundColor = "rgb(49, 179, 109)";
 	 	roomNo="room10";
 	 }
 	 
 	  
 }

}
$( "#reset" ).click(function() {
  $( "#room1" ).show( "slow" );
  $( "#room2" ).show( "slow" );
  $( "#room3" ).show( "slow" );
  $( "#room4" ).show( "slow" );
  $( "#room5" ).show( "slow" );
  $( "#room6" ).show( "slow" );
  $( "#room7" ).show( "slow" );
  $( "#room8" ).show( "slow" );
  $( "#room9" ).show( "slow" );
  $( "#room10" ).show( "slow" );
});

 
