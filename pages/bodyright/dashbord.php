
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	 <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
      data.addColumn('string', 'Day');
      data.addColumn('number', 'Patient');

      data.addRows([
        ["Jan",   41.8],
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
    </script>
    

<link rel="stylesheet" type="text/css" href="bodyright/common.css">
<div class="div"><!--dashbord_div-->
           <h2 class="h2">Dash board</h2>  
<!--..................................................................................................................................-->
          <div  id="curve_chart" style="width: 900px; height: 500px; margin-left:180px"></div>
<!--..................................................................................................................................-->                    
</div>
        <!--dashbord_div-->

