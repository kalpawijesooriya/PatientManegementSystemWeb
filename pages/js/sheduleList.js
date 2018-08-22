//deifle firebase

 var config = {
    apiKey: "AIzaSyDj55UNRaxXD06-MkQxKa2Rc_CFzQWFCwo",
    authDomain: "patient-management-syste-9758b.firebaseapp.com",
    databaseURL: "https://patient-management-syste-9758b.firebaseio.com",
    projectId: "patient-management-syste-9758b",
    storageBucket: "patient-management-syste-9758b.appspot.com",
    messagingSenderId: "776974370251"
  };
  firebase.initializeApp(config);


 var rootRef = firebase.database().ref("schedule");

  //var t = $('#example').DataTable();
 var t = $('#example').DataTable( {
       
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    } );

  
  rootRef.on("child_added",snap =>{
  var day=snap.child("Day").val();
  var startTime=snap.child("StartTime").val();
  var endTime=snap.child("EndTime").val();
  var noOfPatients=snap.child("patientNumber").val();
  var doctorID=snap.child("DoctorID").val();
  var doctorName="kkkk";

var rootRefDoc = firebase.database().ref().child("User").child("doctor").child(doctorID);
rootRefDoc.on('value',function(snapshot) {
    doctorName = snapshot.val().Firstname +" " +snapshot.val().Lastname;
    settable(day,startTime,endTime,noOfPatients,doctorName);
   
  });
 });


 
 


 
    // Automatically add a first row of data
function settable(day,startTime,endTime,noOfPatients,doctorName)
{
        t.row.add( [
            doctorName,
            day,
            startTime,
            endTime,
            noOfPatients    
        ] ).draw( false );
      

}         