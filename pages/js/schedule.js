var roomNo="room1";
var avalable_rooms_amount=0;
var doctoekey2
var doctoekey1
var octorID



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
  scheduleRef.child("patientNumber").set(endTime);
  
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