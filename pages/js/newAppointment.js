var config = {
    apiKey: "AIzaSyDj55UNRaxXD06-MkQxKa2Rc_CFzQWFCwo",
    authDomain: "patient-management-syste-9758b.firebaseapp.com",
    databaseURL: "https://patient-management-syste-9758b.firebaseio.com",
    projectId: "patient-management-syste-9758b",
    storageBucket: "patient-management-syste-9758b.appspot.com",
    messagingSenderId: "776974370251"
  };
  firebase.initializeApp(config);
  var patientArry=[];
  var patientIdarry=[];
  var Mobiles=[];
  var Emails=[];
  var doctor=[];
  var appointmentarry=[];
  var numberarry=[];
  var doctorIDarry=[];
  var sheduleIDarry=[];
  var consulearry=[];
  var number;
  $( document ).ready(function() {
    var patientRef = firebase.database().ref("User/patient");
    patientRef.on("child_added",snap =>{
       var fname=snap.child("FirstName").val();
       var lname=snap.child("LastName").val();
       var PhoneNo=snap.child("PhoneNo").val();
       var email=snap.child("Email").val();
       var pationID=snap.child("ID").val();
       var fullName= fname+" "+lname;
       patientIdarry.push(pationID);
       patientArry.push(fullName);
       Mobiles.push(PhoneNo);
       Emails.push(email);
    });
   var doctorRef = firebase.database().ref("User/doctor/");
   doctorRef.on("child_added",snap =>{
   var docfname=snap.child("Firstname").val();
   var doclname=snap.child("Lastname").val();
   var Spciality=snap.child("Spciality").val();
   var DoctorID=snap.child("DoctorID").val();
   
   var doctorname= docfname+" "+doclname+"-"+Spciality;
  doctor.push(doctorname);
  doctorIDarry.push(DoctorID)

   
   $("#doctor_name").val("14"); 
   var x = document.getElementById("doctor_name");
   var c = document.createElement("option");
   c.text = doctorname;
   x.options.add(c, 1);
   
   
   });
   
});


function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }

  
  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  autocomplete(document.getElementById("myInput"), patientArry);

  $("#myInput").change(function(){
   
            setTimeout(function() {
             var a = patientArry.indexOf($("#myInput").val());
             var mobileNo=Mobiles[a];
             var email=Emails[a];
            
             document.getElementById("emailtxt").value=email;
        },200);
});
$("#doctor_name").change(function(){
  $('#appointment')
  .find('option')
  .remove();
  setTimeout(function() {
   var docitem =  doctor.indexOf($("#doctor_name").val());
   var doctorID=  doctorIDarry[docitem];
   var  ref = firebase.database().ref("consultation");

   ref.orderByChild("DoctorID").equalTo(doctorID).on("child_added", function(snapshot) {
    var date=snapshot.child("Date").val();
    date=date.split("/")
    var dd=date[1];
    var mm=date[0];
    var yy=date[2];
    var formatedday=mm+" "+dd+" "+yy
    var datemills=parseInt(Date.parse(formatedday),10);
    var today = new Date();

    todaydd=today.getDate();
    todaymm=today.getMonth()+1;
    todayyy=today.getFullYear();
    var todaymillis=parseInt(Date.parse(todaymm+" "+ todaydd+" "+todayyy),10);
   
    if(todaymillis<= datemills){
    var  ScheduleID=snapshot.child("ScheduleID").val();
   
    var  shedulref = firebase.database().ref("schedule").child(ScheduleID);
    var day;
    var EndTime;
    var StartTime;
    var Room;
    shedulref.on("value",snapshots =>{
      day=snapshots.child("Day").val();
      EndTime=snapshots.child("EndTime").val();
      StartTime=snapshots.child("StartTime").val();
      Room=snapshots.child("Room").val();
    });
    
    var AppoimentNo=parseInt(snapshot.child("LastAppoimentNo").val(), 10)+1;
    
  setTimeout(function() {
    var apoointment =formatedday+" of "+ day+" from - "+ StartTime+" to - "+ EndTime;
    appointmentarry.push(apoointment);
    numberarry.push(AppoimentNo);
    sheduleIDarry.push(ScheduleID);
    consulearry.push(snapshot.key)
    $("#appointment").val("14"); 
    var x = document.getElementById("appointment");
    var c = document.createElement("option");
    c.text = apoointment;
    x.options.add(c, 1);
    console.log(snapshot.key);
 },500);
   
    }
  });
   
},200);
});

$("#appointment").click(function(){
 
  setTimeout(function() {
   var app =  appointmentarry.indexOf($("#appointment").val());
  number=numberarry[app];
   
  
   document.getElementById("mobile").value= "No-"+number;
},200);
});
$("#addApointment").click(function(){
var pationID= patientIdarry[patientArry.indexOf($("#myInput").val())] ;
var doctorID=doctorIDarry[doctor.indexOf($("#doctor_name").val())];
var sheduleID=sheduleIDarry[appointmentarry.indexOf($("#appointment").val())];
var consulID=consulearry[appointmentarry.indexOf($("#appointment").val())];
var today = new Date();
var Time;
    todaydd=today.getDate();
    todaymm=today.getMonth()+1;
    todayyy=today.getFullYear();
   today=  todaymm+"-"+todaydd+"-"+todayyy
var day,EndTime,StartTime, Room;
var  ref = firebase.database().ref("schedule").child(sheduleID);
  ref.on("value",snapshots =>{
  day=snapshots.child("Day").val();
  EndTime=snapshots.child("EndTime").val();
  StartTime=snapshots.child("StartTime").val();
  Room=snapshots.child("Room").val();
  patientNumber=snapshots.child("patientNumber").val();
  setTimeout(function() {
    Time= parseInt(EndTime)- parseInt(StartTime);
   Time=parseInt(StartTime)+ Time/parseInt(patientNumber);
   var  ref = firebase.database().ref("Appointments").push();
   ref.child("ConsultationID").set(consulID);
   ref.child("Date").set(today);
   ref.child("Number").set(number.toString());
   ref.child("Patient_ID").set( pationID);
   ref.child("patient_ID").set( pationID);
   ref.child("Time").set(Time.toString());
   var  consulref = firebase.database().ref("consultation").child(consulID);
   consulref.child("LastAppoimentNo").set (number.toString());

 },500);
});

   

});





