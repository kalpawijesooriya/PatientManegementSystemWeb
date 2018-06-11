 var config = {
    apiKey: "AIzaSyDj55UNRaxXD06-MkQxKa2Rc_CFzQWFCwo",
    authDomain: "patient-management-syste-9758b.firebaseapp.com",
    databaseURL: "https://patient-management-syste-9758b.firebaseio.com",
    projectId: "patient-management-syste-9758b",
    storageBucket: "patient-management-syste-9758b.appspot.com",
    messagingSenderId: "776974370251"
  };

  firebase.initializeApp(config);
  var rootRef = firebase.database().ref("User/patient");
  var Northern=0,NorthWestern=0,Western=0,NorthCentral=0,Central=0,Sabaragamuwa=0,Eastern=0,Uva=0,Southern=0;
  
  rootRef.on("child_added",snap =>{
  var District=snap.child("District").val();
  var Province=snap.child("Province").val();
  if (Province=="Northern"){Northern++}if (Province=="North Western"){NorthWestern++;}if (Province=="Western"){Western++;}if (Province=="North Central"){NorthCentral++}if (Province=="Central"){Central++}
  	if (Province=="Sabaragamuwa"){Sabaragamuwa++}if (Province=="Eastern"){Eastern++}if (Province=="Uva"){Uva++}if (Province=="Southern"){Southern++}
  

   google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Northern',     Northern],
          ['North Western',     NorthWestern],
          ['Western',  Western],
          ['North Central', NorthCentral],
          ['Sabaragamuwa',   Sabaragamuwa],
          ['Eastern',   Eastern],
          ['Central',   Central],
          ['Uva',   Uva],
          ['Southern',   Southern]
        ]);

        var options = {
          title: ' '
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      
     
      var data = google.visualization.arrayToDataTable([
        ["Doctor", "Amount", { role: "style" } ],
        ["kalpa ", 10, "#b87333"],
        ["Pathum ", 20, "silver"],
        ["Dayani ", 18, "gold"],
        ["sandun ", 21, "color: #e5e4e2"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        
        width: 500,
        height: 300,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
      chart.draw(view, options);
  }



 });



google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Day');
      data.addColumn('number', 'Patient');

      data.addRows([
        ["Jan",  Western],
        ["Feb",  32.4],
        ["Mar",   25.7],
        ["Jan",  10.5],
        ["Jan",  10.4],
        ["Jan",  7.7],
        ["Jan",    9.6],
        ["Jan",  10.6],
        ["Jan",  14.8],
        ["Jan", 11.6],
        ["Jan",   4.7],
        ["Jan",   5.2],
        ["Jan",   3.6],
        ["Jan",   100]
      ]);

      var options = {
        chart: {
          title: 'Patient Registration on previous months',
          subtitle: 'in millions of dollars (USD)'
        },
        width: 900,
        height: 500
      };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}

