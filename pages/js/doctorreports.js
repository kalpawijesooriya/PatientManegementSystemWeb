var doctorId;

var Doctorfee
  var docRef = firebase.database().ref("User/doctor/");
    docRef.on("child_added",snap =>{
    var docfname=snap.child("Firstname").val();
    var doclname=snap.child("Lastname").val();
  
   var doctorname=docfname+" "+doclname;
   
    $("#doctorList").val("14"); 
    var x = document.getElementById("doctorList");
    var c = document.createElement("option");
    c.text = doctorname;
    x.options.add(c, 1);
    });
    //click on PDF btn
    var slectedslectedDoctor; //variable for hold selected doctor name
    $( "#monthlyDoctorbtn" ).click(function() {
       var doctorName=slectedslectedDoctor.split(' ');
       var docFname= doctorName[0];
       var docLname= doctorName[1];
     
      if(AuthanticateID(docFname,docLname)==true)
      {
        getAppointmentData(doctorId,slectedslectedDoctor)
      }
      else {}

    });
      //Select the Doctor
    $( "#doctorList" ).click(function() {
        slectedslectedDoctor=  $("#doctorList option:selected").val();
     });  

     function  AuthanticateID(docFname,docLname)// fuction for check wather doctor ID is same for first name and Lastname
     {
        var ID1;
        var ID2;
        docRef.orderByChild('Firstname').equalTo( docFname.toString()).on("value", function(snapshot1) {
            console.log(snapshot1.val());
             doctorkey1= snapshot1.val();
             snapshot1.forEach(function(data1) {
               ID1= data1.key;
              
            });
          });
          docRef.orderByChild('Lastname').equalTo( docLname.toString()).on("value", function(snapshot2) {
           console.log(snapshot2.val());
            doctorkey1= snapshot2.val();
            snapshot2.forEach(function(data2) {
               ID2=data2.key;
               
                 Doctorfee=data2.child("Doctor_fee").val();
           });
         });

         if(ID1==ID2)
               {
                 doctorId=  ID1;
                 return true;
               }
               
          return false;
            
     }

     function createMothlyDocReport(patientNames,date,count,doctorName)
     {
        const pdf = new jsPDF();
        pdf.setTextColor(0,0,255);
        pdf.text(35, 15, "Dr."+doctorName+" Monthly Appoinment History");
        pdf.setTextColor(0,0,0);
        
        pdf.line(8, 22, 210, 22); // horizontal line
        pdf.text(25, 29,"Patient Name");
        pdf.text(160, 29,"Date");
        pdf.line(8, 32, 210, 32); // horizontal line
        pdf.line(8, 270, 210, 270); // horizontal line 
        pdf.line(8, 280, 210, 280); // horizontal line 
       var j=30;
        for (var i = 0; i<patientNames.length ; i++) {
             j=j+8;
            pdf.text(6, j, ` ${i+1}.`);
            pdf.text(12, j, ` ${patientNames[i]}`);
            pdf.text(150, j, `${date[i]}`);
           
          }
          count="Rs."+ Doctorfee+".00" +"X" +count +"="+ Doctorfee*count;
          pdf.text(20, 277,"Total income");
          pdf.text(130, 277,`${count}`);
        pdf.save();
     }

     function getAppointmentData(doctorId,doctorName)
     {
      var patientNames=[];
      var dates=[];
      var count=0;
     
      var appointmetRef =firebase.database().ref("Appointments"); 
      appointmetRef.on("child_added",snap =>{
        var consulId=snap.child("ConsultationID").val();
        var PatientId=snap.child("Patient_ID").val()
        var date=snap.child("Date").val()
        
        var ConsultationRef =firebase.database().ref("consultation").child(consulId);
        ConsultationRef.on("value",snapshot =>{
          DoctorID=snapshot.child("DoctorID").val();
         
         
          if(DoctorID==doctorId)
          { 
            count++;
            parentRef=firebase.database().ref("User/patient").child(PatientId); 
            parentRef.on("value",patientsnapshot =>{
            patientname=patientsnapshot.child("FirstName").val()+ " " +patientsnapshot.child("LastName").val();
           
            patientNames.push(patientname)
            dates.push(date)
             
            });
          }
        });  
      });
      //call to create report fuction
      var delayInMilliseconds = 4000; //3 second
      setTimeout(function() {
        //for (var i = 0; i<patientNames.length ; i++) {alert(dates[i]);}
 
      createMothlyDocReport(patientNames,dates,count,doctorName)
    }, delayInMilliseconds);
     }