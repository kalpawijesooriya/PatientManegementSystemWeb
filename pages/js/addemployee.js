function register_employee()
{
	
	var title=document.getElementById("title").value
	var fname=document.getElementById("employee_fullname").value
	var NIC=document.getElementById("employee_NIC").value
	var dob=document.getElementById("dob").value

  var sex;
  if(document.getElementById('male').checked) {
  //male radio button is checked
   sex="male";
  }else if(document.getElementById('female').checked) {
  //female radio button is checked
   sex="female";
  }

  var maritialStatus;
  if(document.getElementById('marry').checked) {
  //male radio button is checked
   maritialStatus="Marry";
  }else if(document.getElementById('Unmarry').checked) {
  //female radio button is checked
   maritialStatus="Unmarry";
  }

  var nicNo=document.getElementById("employee_NIC").value
  var phoneNo=document.getElementById("PhoneNo").value
  var mobileNo=document.getElementById("sessionNo").value
  var addline1=document.getElementById("employee_addres_ine1").value
  var addline2=document.getElementById("employee_addres_ine2").value
  var addline3=document.getElementById("employee_addres_ine3").value
  var Emarperson  = document.getElementById("person").value;
  var Emarrelation    = document.getElementById("relationship").value;
  var Emartp    = document.getElementById("emarTp").value;

  var address=addline1+", "+addline2+", "+addline3


  var firebaseRef = firebase.database().ref('User/employee/').push();
  var ref=firebaseRef.key;

  firebaseRef.child("ID").set(ref);
  firebaseRef.child("NICNo").set(nicNo);
  firebaseRef.child("Title").set(title);
  firebaseRef.child("FullName").set(fname);
  firebaseRef.child("Gender").set(sex);
  firebaseRef.child("MobileNo").set(mobileNo);
  firebaseRef.child("HomeNo").set(phoneNo);
  firebaseRef.child("Marry").set(maritialStatus);
  firebaseRef.child("Address").set(address);
  firebaseRef.child("BirthDay").set(dob);
  firebaseRef.child("Emargency_person").set(Emarperson);
  firebaseRef.child("Emargency_reletionship ").set(Emarrelation);
  firebaseRef.child("Emargency_TP").set(Emartp);
  
 

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

}