function register_patient()
{
	
	var title=document.getElementById("title").value
	var fname=document.getElementById("patient_fname").value
	var lname=document.getElementById("patient_lname").value
	var NIC=document.getElementById("patient_NIC").value
	var province=document.getElementById("Patient_province").value
	var district=document.getElementById("Patient_district").value
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

  var phoneNo=document.getElementById("PhoneNo").value
  var mobileNo=document.getElementById("sessionNo").value
  var addline1=document.getElementById("patient_addres_ine1").value
  var addline2=document.getElementById("patient_addres_ine2").value
  var addline3=document.getElementById("patient_addres_ine3").value
  var address=addline1+", "+addline2+", "+addline3

  var email=document.getElementById("email").value
  var password=document.getElementById("pwd").value

  var firebaseRef = firebase.database().ref('User/patient/').push();
  var ref=firebaseRef.key;

  firebaseRef.child("ID").set(ref);
  firebaseRef.child("Title").set(title);
  firebaseRef.child("FirstName").set(fname);
  firebaseRef.child("LastName").set(lname);
  firebaseRef.child("Gender").set(sex);
  firebaseRef.child("MobileNo").set(mobileNo);
  firebaseRef.child("PhoneNo").set(phoneNo);
  firebaseRef.child("Email").set(email);
  firebaseRef.child("Province").set(province);
  firebaseRef.child("District").set(district);
  firebaseRef.child("Marry").set(maritialStatus);
  firebaseRef.child("Password").set(password);
  firebaseRef.child("Address").set(address);
  firebaseRef.child("BirthDay").set(dob);
  firebaseRef.child("image").set("https://image.freepik.com/iconen-gratis/gebruiker-mannelijke-vorm-in-een-cirkel-ios-7-interface-symbool_318-35357.jpg");
 

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

}