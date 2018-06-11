 firebase.auth().onAuthStateChanged(function(user) {
if (user) {
    // User is signed in.
   document.getElementById('user_div').style.display="block";
   document.getElementById('login_div').style.display="none";
    
   
  } else {
   document.getElementById('user_div').style.display="none";
   document.getElementById('login_div').style.display="block";

}    
});
 

 function login()
 {
 	var user_email=document.getElementById('email_field').value;
 	var user_pass=document.getElementById('password_field').value;
   
firebase.auth().signInWithEmailAndPassword(user_email, user_pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  window.alert("Error : "+errorMessage);
});
        
 	
 }

 function logout()
 {
  firebase.auth().signOut();
 }

function register_doctor()
 {

  var fname   = document.getElementById('doctor_fname').value;
  var lname   = document.getElementById('doctor_lname').value;
  var nic     = document.getElementById('doctor_NIC').value;
  var slmc_no = document.getElementById('slmc_no').value;
  var title   = document.getElementById("title").value;
  var dob     = document.getElementById("dob").value;
  var fee     = document.getElementById("fee").value;
  var mobile  = document.getElementById("sessionNo").value;
  var home    = document.getElementById("htp").value;
  var email    = document.getElementById("email").value;
  var Emarperson  = document.getElementById("person").value;
  var Emarrelation    = document.getElementById("relationship").value;
  var Emartp    = document.getElementById("emarTp").value;

  var doctorAddtess    = document.getElementById("doctor_addres_ine1").value +","+ document.getElementById("doctor_addres_ine2").value+","+document.getElementById("doctor_addres_ine3").value;
  doctor_addres_ine1
  var firebaseRef = firebase.database().ref('User/doctor/').push();
  var ref=firebaseRef.key;

  var spciality;
  if(document.getElementById('select_speciality').checked) {
  //select_speciality radio button is checked
   spciality=document.getElementById("select_doctors").value;

  }else if(document.getElementById('type_speciality').checked) {
  //type_speciality radio button is checked
  spciality=document.getElementById("input_doctors").value;
  }

  var sex;
  if(document.getElementById('male').checked) {
  //male radio button is checked
   sex="male";
  }else if(document.getElementById('female').checked) {
  //female radio button is checked
   sex="female";
  }

  var hospital;
  if(document.getElementById('selecthos').checked) {
  //select_hospital radio button is checked
   hospital=document.getElementById("select_hospitals").value;

  }else if(document.getElementById('typehos').checked) {
  //type_hospital radio button is checked
  hospital=document.getElementById("input_hospitals").value;
  }
 
  


  firebaseRef.child("DoctorID").set(ref);
  firebaseRef.child("Title").set(title);
  firebaseRef.child("Firstname").set(fname);
  firebaseRef.child("Lastname").set(lname);
  firebaseRef.child("NICNo").set(nic);
  firebaseRef.child("SLMC_Number").set(slmc_no);
  firebaseRef.child("Spciality").set(spciality);
  firebaseRef.child("Sex").set(sex);
  firebaseRef.child("DOB").set(dob);
  firebaseRef.child("Hospital").set(hospital);
  firebaseRef.child("Doctor_fee").set(fee);
  firebaseRef.child("Mobile_no").set(mobile);
  firebaseRef.child("Home_no").set(home);
  firebaseRef.child("E-mail").set(email);
  firebaseRef.child("Doctor_Address").set(doctorAddtess);
  firebaseRef.child("Emargency_person ").set(Emarperson);
  firebaseRef.child("Emargency_reletionship ").set(Emarrelation);
  firebaseRef.child("Emargency_TP").set(Emartp);



 
 
 }