var Lname;
 var fname;
 var days;
 var keys;
 var time;
 var Shedule_ID;
 var day_num=5;

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

    function add_consultation()
    {
      
      var date   = document.getElementById('Date').value;
      var consultation_Ref = firebase.database().ref("consultation/").push();
    
  
      consultation_Ref.child("Date").set(date);
      consultation_Ref.child("DoctorID").set(keys);
      consultation_Ref.child("Nurse").set("employeeID");
      consultation_Ref.child("ScheduleID").set(Shedule_ID);
      consultation_Ref.child("LastAppoimentNo").set("0");
    
    }