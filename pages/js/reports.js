//deifle firebase
var DoctorID;
var array = [];
var count = [];

var start_date;
var end_date;
var selectedCountry ;
 var config = {
    apiKey: "AIzaSyDj55UNRaxXD06-MkQxKa2Rc_CFzQWFCwo",
    authDomain: "patient-management-syste-9758b.firebaseapp.com",
    databaseURL: "https://patient-management-syste-9758b.firebaseio.com",
    projectId: "patient-management-syste-9758b",
    storageBucket: "patient-management-syste-9758b.appspot.com",
    messagingSenderId: "776974370251"
  };
  firebase.initializeApp(config);
   document.getElementById('label_patient').style.display="none";

$('#ReportOption').change(function(){

   selectedCountry = $("#ReportOption option:selected").val();
   if(selectedCountry == "All")
   {
  	document.getElementById('patient_id').style.display="none";
    document.getElementById('label_patient').style.display="none";
   }
    if(selectedCountry == "PatientWise")
   {
   document.getElementById('patient_id').style.display="block";
    document.getElementById('label_patient').style.display="block";
   }

});

const pdf = new jsPDF();
const pdf2 = new jsPDF();

function demoFromHTML() {

if(selectedCountry == "All"){
 var rootRef = firebase.database().ref("Appointments");
  //var t = $('#example').DataTable();
 
  rootRef.on("child_added",snap =>{
  var ConsultationID=snap.child("ConsultationID").val();
  var Patient_ID=snap.child("patient_ID").val();
  var date=snap.child("Date").val();

  var ConsultationRef= firebase.database().ref("consultation").child(ConsultationID)
  
  ConsultationRef.on("value",snapshot =>{
  DoctorID=snapshot.child("DoctorID").val();
  
   start_date= document.getElementById("start_date").value;
   end_date=document.getElementById("end_date").value;
   

   
    var fields = date.split('-');

    var MM = fields[0];
    var dd = fields[1];
    var YY = fields[2];

   date=YY+"-"+MM+"-"+dd
    
    if((Date.parse(start_date)<=Date.parse(date))&&(Date.parse(end_date)>=Date.parse(date)))
    {
       if(array.includes(Patient_ID))
       {
          
       count[array.indexOf(Patient_ID)]= count[array.indexOf(Patient_ID)]+1;
       }else{
         array.push(Patient_ID);
         count.push(1);
       }
        
       
       
    }
    
    var day="kkk";
   });

 
 });
 start_date= document.getElementById("start_date").value;
 end_date=document.getElementById("end_date").value;
var delayInMilliseconds = 2500; //2 second
pdf.setTextColor(0,0,255);
pdf.text(25, 17, `Patients Appointmets Disttribution ${start_date} to ${end_date}`);
pdf.text(30, 30, `Patient ID`);
pdf.text(125, 30, `Appointment Amount`);
pdf.line(8, 22, 190, 22); // horizontal line
pdf.line(8, 280, 190, 280); // horizontal line
pdf.line(100, 22, 100, 280); //vertical line
pdf.line(8, 22, 8, 280); //vertical line
pdf.line(190, 22, 190, 280); //vertical line
pdf.setFontSize(12);
pdf.setTextColor(0,0,0);
setTimeout(function() {
         var j=30;
  for (var i = 0; i<array.length ; i++) {
         j=j+8;
 
    pdf.text(12, j, ` ${array[i]}`);
    pdf.text(140, j, `${count[i]}`);
  }
  pdf.line(8, 32, 190, 32); // horizontal line
  pdf.save();

 }, delayInMilliseconds);

}

if(selectedCountry == "PatientWise")
{ 
    var Patient_ID;
    var rootRef = firebase.database().ref("Appointments");
    var textPatientId=document.getElementById("patient_id").value;
    var doctorarry = [];
    var datearry = [];
    var consultationarry= [];

  rootRef.on("child_added",snap =>{
  var ConsultationID=snap.child("ConsultationID").val();
   Patient_ID=snap.child("patient_ID").val();
  var date=snap.child("Date").val();

  var ConsultationRef= firebase.database().ref("consultation").child(ConsultationID)
  
  ConsultationRef.on("value",snapshot =>{
  DoctorID=snapshot.child("DoctorID").val();
  
   start_date= document.getElementById("start_date").value;
   end_date=document.getElementById("end_date").value;
   

   
    var fields = date.split('-');

    var MM = fields[0];
    var dd = fields[1];
    var YY = fields[2];

   date=YY+"-"+MM+"-"+dd


    if((Date.parse(start_date)<=Date.parse(date))&&(Date.parse(end_date)>=Date.parse(date)))
    {
        var pid = Patient_ID.toString();
        var tpid=textPatientId.toString();
        console.log(" go to Date");  
        if(pid==tpid)
        {
            consultationarry.push(ConsultationID);
            datearry.push(date);
            doctorarry.push(DoctorID);
            console.log(ConsultationID +" "+ date+" "+DoctorID);  
       }
       else
       {
        
         console.log(ConsultationID+" "+date+" "+DoctorID +" "+ Patient_ID);  
       
       }
    }
     else
    {
     
      console.log("not go to Date");  
    
    }

    
    var day="kkk";
   });

 
 });
 start_date= document.getElementById("start_date").value;
 end_date=document.getElementById("end_date").value;
var delayInMilliseconds = 3000; //2 second
pdf2.setTextColor(0,0,255);
pdf2.text(25, 10, `Patients Appointmets Disttribution ${start_date} to ${end_date}`);
pdf2.text(50, 20, ` ${textPatientId}`);
pdf2.text(12, 30, `Consultation ID`);
pdf2.text(88, 30, `Date`);
pdf2.text(150, 30, `Doctor ID`);
pdf2.line(8, 22, 200, 22); // horizontal line
pdf2.line(8, 280, 100, 280); // horizontal line

pdf2.setFontSize(12);
pdf2.setTextColor(0,0,0);
setTimeout(function() {
         var j=30;
  for (var i = 0; i<datearry.length ; i++) {
         j=j+8;
      
    pdf2.text(12, j, ` ${consultationarry[i]}`);
    pdf2.text(80, j, `${datearry[i]}`);
    pdf2.text(140, j, `${doctorarry[i]}`);
  }
  pdf2.line(8, 32, 190, 32); // horizontal line
  pdf2.save();

 }, delayInMilliseconds);

}


}
 
 


      