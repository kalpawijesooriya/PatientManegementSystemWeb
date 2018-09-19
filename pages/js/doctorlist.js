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


 var rootRef = firebase.database().ref("User/doctor");
  //var t = $('#example').DataTable();
 var t = $('#example').DataTable( {
       
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    } );
  rootRef.on("child_added",snap =>{
  var fname=snap.child("Firstname").val();
  var lname=snap.child("Lastname").val();
  var id=snap.child("DoctorID").val();
  var dob=snap.child("DOB").val();
  var address=snap.child("Doctor_Address").val();
  var email=snap.child("E-mail").val();
  var mobile=snap.child("Mobile_no").val();
  var hometp=snap.child("Home_no").val();
  var sex=snap.child("Sex").val();
  var hospital=snap.child("Hospital").val();
  var slmcno=snap.child("SLMC_Number").val();
  var speciality=snap.child("Spciality").val();
  var emargancyperson=snap.child("Emargency_person").val();
  var emargancyrelationship=snap.child("Emargency_reletionship").val();
  var emargancymobile=snap.child("Emargency_TP").val();
  var fee=snap.child("Doctor_fee").val();
  var nic=snap.child("NICNo").val();
  var title=snap.child("Title").val();



//$('#example').append("<tr><td>"+title+"</td><td>"+fname+"</td><td>"+lname+"</td><td>"+hospital+"</td><td>"+speciality+"</td><td>"+"Rs."+fee+".00"+"</td><td>"+mobile+"</td><td>"+address+"</td></tr>");
settable(title,fname,lname,hospital,speciality,fee,mobile,address,emargancymobile,snap.key);
 });

 

 
 


 
    // Automatically add a first row of data
function settable(title,fname,lname,hospital,speciality,fee,mobile,address,emargancymobile,key)
{ 

        t.row.add( [
            title,
            fname,
            lname,
            hospital,
            speciality,
           "Rs."+ fee+".00",
            mobile,
            address,
            emargancymobile,
            '<td><button class="btn btn-danger"class="delete" style=margin-right:10px; id="'+key+'" onclick="DeleteFunction(this.id)">Delete</button><button class="btn btn-info" id="'+key+'" onclick=EditFuction(this.id)>Edit<Button</td>'
           

            
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