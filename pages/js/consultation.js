var Lname;
 var fname;
 var days;
 var keys;
 var time;
 var Shedule_ID;
 var day_num=5;
 var roomNo="room1";
var avalable_rooms_amount=0;
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


//document.getElementById("shedule_date").innerHTML = "New text!";

var ref = firebase.database().ref('User/doctor/');
var shedule_ref = firebase.database().ref('schedule/'); 
$('#doctor_name').change(function()
{ 

  var val= $(this).val();

   fname = val.split(" ")[0];
   Lname = val.split(" ")[1]; 


 ref.orderByChild('Firstname').equalTo(fname.toString()).on("value", function(snapshot) {
   console.log(snapshot.val());
    snapshot.forEach(function(data) {
    keys= data.key;
     
    });
 });

   shedule_ref.orderByChild('DoctorID').equalTo(keys).on("value", function(snapshot) {
   console.log(snapshot.val());
   if(snapshot.val()==null){
      document.getElementById("shedule_date").innerHTML = "This doctor has no sheduls"; 

      }
    snapshot.forEach(function(data) {
    days= data.val().Day;
      if(days=="Monday")
         {day_num=1;}
      if(days=="Sunday")
         {day_num=0;}
      if(days=="Tuesday")
         {day_num=2;}
      if(days=="Wednesday")
         {day_num=3;}
      if(days=="Thursday")
         {day_num=4;}
      if(days=="Friday")
         {day_num=5;}
      if(days=="Saturday")
         {day_num=6;}
    var start_time=data.val().StartTime;
    var end_time=data.val().EndTime;
    Shedule_ID=data.key;
    time="["+start_time+"-"+end_time+"]";
     
      if(days!=null){
       	document.getElementById("shedule_date").innerHTML =days+" "+time ;

      }
     if(days==null)
      {
         document.getElementById("shedule_date").innerHTML = "This doctor has no sheduls"; 
      }

    });
 });

});
   $(function(){
        $("#Date").datepicker(
            {
            beforeShowDay: function (date) {
            
            var today = new Date();
           
          
            if (today.getDate()<date.getDay()) {
                return [false, ''];
            }

            if (date.getDay() == day_num ) {
                return [true, ''];
            }

           
            return [false, ''];
           }
        });
    });

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

function add_consultation()
{
  
  var date   = document.getElementById('Date').value;
  var consultation_Ref = firebase.database().ref("consultation/").push();

  consultation_Ref.child("Room").set(roomNo);
  consultation_Ref.child("Date").set(date);
  consultation_Ref.child("DoctorID").set(keys);
  consultation_Ref.child("Nurse").set("employeeID");
  consultation_Ref.child("ScheduleID").set(Shedule_ID);
  consultation_Ref.child("LastAppoimentNo").set("0");

}
 
