//deifle firebase
var DoctorID;
var array = [];
var count = [];
var start_date;
 var end_date;
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

  var selectedCountry = $("#ReportOption option:selected").val();
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



function demoFromHTML() {

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

var delayInMilliseconds = 2500; //2 second

setTimeout(function() {
  
  for (var i = 0; i<array.length ; i++) {
    $('#example').append("<tr><td>"+array[i]+"</td><td>"+count[i]+"</td></tr>"); 
   
  }

  
   document.getElementById("hedding").innerHTML="Patients Appointmets Disttribution "+start_date+" to "+end_date+".";
  

    var pdf = new jsPDF('p', 'pt', 'letter');

    var th = $('.th').val();
    pdf.setFontSize(12);

    source = $('#patient_list')[0];
  
    specialElementHandlers = {
       
        '#bypassme': function (element,renderer) {
          
            return true
        }
    };
    margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width:800
    };
  
    pdf.fromHTML(
    source, // HTML string or DOM elem ref.
    margins.left, // x coord
    margins.top, { // y coord
        'width': margins.width, // max width of content on PDF
        'elementHandlers': specialElementHandlers
    },

    function (dispose) {
        // dispose: object with X, Y of the last line add to the PDF 
        //          this allow the insertion of new lines after html
        pdf.save('Test.pdf');
    }, margins);
 }, delayInMilliseconds);
}

 
 


      