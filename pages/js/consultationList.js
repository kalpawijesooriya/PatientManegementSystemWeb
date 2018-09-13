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


 var rootRef = firebase.database().ref("consultation");
  //var t = $('#example').DataTable();
 var t = $('#example').DataTable( {
       
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    } );
  rootRef.on("child_added",snap =>{
  var date=snap.child("Date").val();
  var appointmentNumbers=snap.child("LastAppoimentNo").val();
  var nurse=snap.child("Nurse").val();
  var room=snap.child("Room").val();
  var sheduleID=snap.child("ScheduleID").val();
  var doctorID=snap.child("DoctorID").val();
  var doctorRef = firebase.database().ref("User/doctor/"+doctorID);
  doctorRef.on('value',function(snapshot) { 
    var doctorName=snapshot.child("Firstname").val()+" " +snapshot.child("Lastname").val();
    settable( sheduleID,doctorName, date,appointmentNumbers, nurse, room);  
  });
  

 });


 
 


 
    // Automatically add a first row of data
function settable(sheduleID,doctorName, date,appointmentNumbers, nurse, room)
{
        t.row.add( [
            sheduleID,
            doctorName,
            date,
            appointmentNumbers,
            nurse,
            room
            
        ] ).draw( false );
      

}         