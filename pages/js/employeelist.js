
 var config = {
    apiKey: "AIzaSyDj55UNRaxXD06-MkQxKa2Rc_CFzQWFCwo",
    authDomain: "patient-management-syste-9758b.firebaseapp.com",
    databaseURL: "https://patient-management-syste-9758b.firebaseio.com",
    projectId: "patient-management-syste-9758b",
    storageBucket: "patient-management-syste-9758b.appspot.com",
    messagingSenderId: "776974370251"
  };
  firebase.initializeApp(config);


 var rootRef = firebase.database().ref("User/employee");
  //var t = $('#example').DataTable();
 var t = $('#example').DataTable( {
       
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    } );
  rootRef.on("child_added",snap =>{
  var fullName=snap.child("FullName").val();
  var id=snap.child("ID").val();
  var dob=snap.child("BirthDay").val();
  var address=snap.child("Address").val();
  var mobile=snap.child("MobileNo").val();
  var hometp=snap.child("HomeNo").val();
  var sex=snap.child("Gender").val();
  var emargancyperson=snap.child("Emargency_person").val();
  var emargancyrelationship=snap.child("Emargency_reletionship").val();
  var emargancymobile=snap.child("Emargency_TP").val();
  var nic=snap.child("NICNo").val();
  var title=snap.child("Title").val();



//$('#example').append("<tr><td>"+title+"</td><td>"+fname+"</td><td>"+lname+"</td><td>"+hospital+"</td><td>"+speciality+"</td><td>"+"Rs."+fee+".00"+"</td><td>"+mobile+"</td><td>"+address+"</td></tr>");
settable(title,fullName,mobile,address,emargancymobile,emargancyperson);
 });


 
 


 
    // Automatically add a first row of data
function settable(title,fullName,mobile,address,emargancymobile,emargancyperson)
{
        t.row.add( [
            title,
            fullName,
            mobile,
            address,
            emargancyperson,
            emargancymobile
        ] ).draw( false );
      

}         