<div class="div_doctor" >

<link href="css/dashbord.css" rel="stylesheet" />



    

<link rel="stylesheet" type="text/css" href="bodyright/common.css">
<div class="div"><!--dashbord_div-->
        
<!--..................................................................................................................................-->

<h4 style="margin-left: 20px;color: #178449;margin-top: 20px">Today Appointments</h4>
<hr class="style1" style="width: 1200px; margin-left:10px;margin-top:10px;height: 4px;border-top: 1.2px solid #178449;" >
 <div class="container" style="margin-bottom: 20px">
 <div class="row" >
        <div class="col-md-4 col-md-offset-3" ">
            <form action="" class="search-form">
                <div class="form-group has-feedback" style="margin-left:320px;width:100%">
                <label for="search" class="sr-only">Search</label>
                <input type="text" class="form-control" name="search" id="search" placeholder="search">
                  <span class="glyphicon glyphicon-search form-control-feedback"></span>
              </div>
              <div  style="margin-top: -50px;margin-left: -310px;">
                   <label style="margin-right: 10px">Doctor Name</label>
                <select class="form-control" id="selectDoctor" style="width: 60%;"></select>
              </div> 
            </form>
        </div>

    </div>
    
</div>
<div style="margin-left:10px;margin-bottom: 20px;">
     <label style="margin-left:10px" >Time : </label><p id="shedule_date" style="color:red;margin-top: -25px;margin-left: 60px; ">00.00-00.00</p>
</div>
<section style="margin-left:20px; margin-bottom: 50px">

    <table class="order-table table">
        <thead>
            <tr>
                <th>Number</th>
                <th>Patient Name</th>
                <th>Mobile Number</th>
                <th>Time</th>
                <th>Payment Status</th>
                <th>Arrival</th>
            </tr>
        </thead>
        <tbody id="appointmentTable">
           
        </tbody>
    </table>

</section>
<h4 style="margin-left: 20px;color: #178449;margin-top: 20px">Patient Registrations by Province</h4>
  <hr class="style1" style="width: 400px; margin-left:10px;margin-top: -5px;height: 4px;border-top: 1.2px solid #178449;"><br>
  <div style="margin-top: -89.5px;margin-left: 580px">
  <h4 style="margin-left: 30px;color: #178449;margin-top: 20px">Doctors' Appointments</h4>
  <hr class="style1" style="width: 400px; margin-left:20px;height: 4px;margin-top: -5px;border-top: 1.2px solid #178449;"><br>
  </div>
  <div id="piechart" style="width: 600px; height: 350px; margin-left: -60px;margin-top:-38px"></div>

  <div id="columnchart_values" style="width: 570px; height: 190px;margin-left: 550px;margin-top: -350px;"></div>

 <div id="curve_chart" style="width: 900px; height: 500px; margin-top: 200px"></div>


<!--..................................................................................................................................-->                    
</div>
        <!--dashbord_div-->
</div>
  
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>    
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script><script src="https://www.gstatic.com/firebasejs/4.9.1/firebase.js"></script>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="js/dashbord.js"></script><script type="text/javascript">


    google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    
</script>
<script>
 var consultation_ref = firebase.database().ref('consultation/'); 
 var shedule_ref = firebase.database().ref('schedule/'); 
 var doctorRef = firebase.database().ref("User/doctor/");
  
$("#selectDoctor").select2();

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy; 

  

    
$('#selectDoctor').click(function()
{ 

  var val= $(this).val();

   fname = val.split(" ")[0];
   Lname = val.split(" ")[1]; 
var dockey;

 doctorRef.orderByChild('Firstname').equalTo(fname.toString()).on("value", function(snapshot) {
   console.log(snapshot.val());
   snapshot.forEach(function(data) {
    dockey= data.key;

 consultation_ref.orderByChild('DoctorID').equalTo(dockey).on("value", function(snapshot) {
   console.log(snapshot.val());
    snapshot.forEach(function(data) {
   
   var date=data.val().Date;
  
   if(date==today)
   { 
  var appointment_ref= consultation_ref.child(data.key).child("Appointment");
  appointment_ref.on("child_added",snap =>{
   
  var Number=snap.child("Number").val();
  var Time=snap.child("Time").val();
  var patientID=snap.child("patient_ID").val();
  var PatientRef = firebase.database().ref("User/patient/"); 
  var fname,lname,name;
PatientRef.orderByChild('ID').equalTo(patientID).on("value", function(snapshot) {
   console.log(snapshot.val());
    snapshot.forEach(function(data) {
     fname=data.val().FirstName;
     lname=data.val().LastName;
    PhoneNo=data.val().PhoneNo;
     name=fname+" "+lname
     $("#appointmentTable").append("<tr><td>"+Number+"</td><td>"+ name+"</td><td>"+PhoneNo+"</td><td>"+Time+"</td><td>"+Time+"</td><td><button>Remove</button></td></tr>");
  });
});
  
 

});
 }
   
     
    });
 });
     
    });
   shedule_ref.orderByChild('DoctorID').equalTo(dockey).on("value", function(snapshot) {
   console.log(snapshot.val());
   if(snapshot.val()==null){
     // document.getElementById("shedule_date").innerHTML = "This doctor has no sheduls"; 

  }
    snapshot.forEach(function(data) {
    
      
    var start_time=data.val().StartTime;
    var end_time=data.val().EndTime;
    Shedule_ID=data.key;
    time=start_time+"-"+end_time;
     
      if(time!=null){
      document.getElementById("shedule_date").innerHTML =time ;
      }

    });
 });
 });





});

consultation_ref.orderByChild('Date').equalTo(today).on("value", function(snapshot) {
   if(snapshot.val()==null){
    console.log("NoData"); 

      }
    snapshot.forEach(function(data) {
    var doc_ID= data.val().DoctorID;
     
      if(doc_ID!=null){
     
  doctorRef.child(doc_ID).on("value",snap =>{
  var docfname=snap.child("Firstname").val();
  var doclname=snap.child("Lastname").val();
  var doctorname= docfname+" "+doclname;

  $("#selectDoctor").val("14"); 
  var x = document.getElementById("selectDoctor");
  var c = document.createElement("option");
  c.text = doctorname;
  x.options.add(c, 1);
  

});
      }

    });
 });
</script>