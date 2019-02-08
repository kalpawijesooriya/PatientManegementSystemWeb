//deifle firebase

var deleteKey;
 var config = {
    apiKey: "AIzaSyDj55UNRaxXD06-MkQxKa2Rc_CFzQWFCwo",
    authDomain: "patient-management-syste-9758b.firebaseapp.com",
    databaseURL: "https://patient-management-syste-9758b.firebaseio.com",
    projectId: "patient-management-syste-9758b",
    storageBucket: "patient-management-syste-9758b.appspot.com",
    messagingSenderId: "776974370251"
  };
  firebase.initializeApp(config);


 var rootRef = firebase.database().ref("Appointments");
  //var t = $('#example').DataTable();
 var t = $('#example').DataTable( {
       
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    } );
  rootRef.on("child_added",snap =>{
  var ConsultationID=snap.child("ConsultationID").val();
  var Date=snap.child("Date").val();
  var Number=snap.child("Number").val();
  var Patient_ID=snap.child("Patient_ID").val();
  key=snap.key;
 var payment= "Not"
  var appDate,docName,DoctorID,patientName
  var  ref = firebase.database().ref("consultation").child(ConsultationID);
  ref.on("value",snapshots =>{
    appDate=snapshots.child("Date").val();
    DoctorID=snapshots.child("DoctorID").val();
    var  refs = firebase.database().ref("User").child("doctor").child(DoctorID);
    refs.on("value",snapshotss =>{
       var Firstname=snapshotss.child("Firstname").val();
       var Lastname=snapshotss.child("Lastname").val();
        docName= Firstname+ " "+ Lastname;
        var  refss = firebase.database().ref("User").child("patient").child(Patient_ID);  
        refss.on("value",snapshotsss =>{
            var Firstname=snapshotsss.child("FirstName").val();
            var Lastname=snapshotsss.child("LastName").val();
            patientName=Firstname+" "+ Lastname;
            
            settable(patientName,docName,Date,appDate,Number,payment,key)
        });
    });
  });



//$('#example').append("<tr><td>"+title+"</td><td>"+fname+"</td><td>"+lname+"</td><td>"+hospital+"</td><td>"+speciality+"</td><td>"+"Rs."+fee+".00"+"</td><td>"+mobile+"</td><td>"+address+"</td></tr>");

 });

 

 
 


 
    // Automatically add a first row of data
function  settable(patientName,docName,Date,appDate,Number,payment,key)
{ 

        t.row.add( [
            patientName,
            docName,
            Date,
            appDate,
            Number,
            payment,
           
            '<td><button class="btn btn-danger"class="delete" style=margin-right:10px; id="'+key+'" onclick="DeleteFunction(this.id)">Delete</button></td>'
           

            
        ] ).draw( false );
      
       

}   

function DeleteFunction(key)
{
    deleteKey=key;
   $("#deleteAlert").show('fade'); 
    // if (confirm('Do you want to Delete this Doctor records')) {
    //     
    // }else{//do nothing
    // }
  
}
$("#linkClose").click(function(){
    $("#deleteAlert").hide("fade");
}); 

function EditFuction (key)
{
    alert(key);
}
$("#deleteConfi").click(function(){
    rootRef.child(deleteKey).remove();
    $("#deleteAlert").hide("fade");
}); 