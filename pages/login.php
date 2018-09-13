<!DOCTYPE html>
<html>
    <head>
    <title>Login</title>
    <link rel="shortcut icon" type="image/x-icon" href="img/hospitals.png" />
        <link rel="stylesheet" type="text/css" href="../css/stylelogin.css">
        <link rel="stylesheet" type="text/css" href="../css/styledoctorlist.css">
        <link rel="stylesheet" type="text/css" href="../vendor/font-awesome/css/font-awesome.min.css"">
        <link rel="stylesheet" href="https://use.fontawesome.com/e8f81ad6c9.css">
        <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
        <script src="https://use.fontawesome.com/6da6e61ca4.js"></script>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">


    <link rel="stylesheet" href="bodyright/common.css"> 

   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Bootstrap Core CSS -->
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../vendor/metisMenu/metisMenu.min.css" rel="stylesheet">

    <!-- DataTables CSS -->
    <link href="../vendor/datatables-plugins/dataTables.bootstrap.css" rel="stylesheet">

    <!-- DataTables Responsive CSS -->
    <link href="../vendor/datatables-responsive/dataTables.responsive.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->



    <script src="../vendor/datatables/js/jquery.dataTables.js"></script>
   <!-- search in data table -->
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <!-- Bootstrap Core CSS -->
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- morrisCSS for charts -->
    <link href="../vendor/morrisjs/morris.css" rel="stylesheet">
    <link href="css/intlTelInput.css" rel="stylesheet"/>
    <link rel="stylesheet"  href="bodyright/common.css">
   
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>  
   
  

    <!-- Custom CSS -->
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">

   

    <!-- Custom Fonts -->
    <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!-- Latest compiled and minified CSS -->


<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


    </head>
    <body>
        
 
        <div class="containner" id="login_div">

            <img src="../img/pf.png">
            <form>
                <div class="form-input">
                    <input type="email" name="username" id="email_field" placeholder="Enter Username"/>
                </div>
                <div class="form-input">
                 <input id="password_field" type="password" placeholder=" Enter Password" name="password">
                </div>
                 
            </form>
            <button  class="btn-login" onclick="login()">Login</button><br>
                <a href="#" id="demo">Forget password?</a>
           
         </div>










   

         <div id="user_div">

            <div  style="background-color: #fff">
                
            <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0; ">
                <div class="navbar-header" style="margin-left:260px" >
                    <img src="../img/hospital.jpg" style="width: 150px" style="height: 100px" style="float:right">
                    <a class="navbar-brand" >Viweka Hospital</a>     
                </div>

           
            <ul class="nav navbar-top-links navbar-right" >

                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-envelope fa-fw" style="font-size: 24px; color: white "></i> <i class="fa fa-caret-down" style="font-size: 24px; color: white "></i>
                    </a>
                    <ul class="dropdown-menu dropdown-messages">
                        <li>
                            <a href="#">
                                <div>
                                    <strong>John Smith</strong>
                                    <span class="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <strong>John Smith</strong>
                                    <span class="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <strong>John Smith</strong>         
                                  
                                    <span class="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a class="text-center" href="#">
                                <strong>Read All Messages</strong>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                    <!-- /.dropdown-messages -->
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-tasks fa-fw" style="font-size: 24px; color: white "></i> <i class="fa fa-caret-down" style="font-size: 24px; color: white "></i>
                    </a>
                    <ul class="dropdown-menu dropdown-tasks">
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 1</strong>
                                        <span class="pull-right text-muted">40% Complete</span>
                                    </p>
                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                                            <span class="sr-only">40% Complete (success)</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 2</strong>
                                        <span class="pull-right text-muted">20% Complete</span>
                                    </p>
                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                                            <span class="sr-only">20% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 3</strong>
                                        <span class="pull-right text-muted">60% Complete</span>
                                    </p>
                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                                            <span class="sr-only">60% Complete (warning)</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 4</strong>
                                        <span class="pull-right text-muted">80% Complete</span>
                                    </p>
                                    <div class="progress progress-striped active">
                                        <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
                                            <span class="sr-only">80% Complete (danger)</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a class="text-center" href="#">
                                <strong>See All Tasks</strong>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                    <!-- /.dropdown-tasks -->
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-bell fa-fw" style="font-size: 24px; color: white "></i> <i class="fa fa-caret-down" style="font-size: 24px; color: white "></i>
                    </a>
                    <ul class="dropdown-menu dropdown-alerts">
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-comment fa-fw"></i> New Comment
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-twitter fa-fw"></i> 3 New Followers
                                    <span class="pull-right text-muted small">12 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-envelope fa-fw"></i> Message Sent
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-tasks fa-fw"></i> New Task
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-upload fa-fw"></i> Server Rebooted
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a class="text-center" href="#">
                                <strong>See All Alerts</strong>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                    <!-- /.dropdown-alerts -->
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw" style="font-size: 24px; color: white "></i> <i class="fa fa-caret-down" style="font-size: 24px; color: white "></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                        </li>
                        <li class="divider"></li>
                        <li onclick="logout()"><a href="#"><i  class="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->

            <div class="navbar-default sidebar" style="margin-top:-4px; position:fixed;" role="navigation" style="height: 100%">
                <div style="background-color:#178449" style="height:200px" >
            <img src="../img/logo.png" style="width: 250px;height:117px;" >
           </div>
                <div class="sidebar-nav navbar-collapse"  padding-left: 60;>
                    <ul class="nav" id="side-menu">
                        
                        <li>
                            <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'" style="color: #fff;"  href="login.php?dash_bord"><i class="fa fa-dashboard fa-fw" style="font-size:18px;" ></i> Dashboard</a>
                        </li>
                       
                         <li >
                            <a   onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'"  style="color: #fff;"><i class="fa fa-user-md" style="font-size:20px;"></i>  Doctor<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'" href="login.php?doctor" >Add New Doctor</a>
                                </li>
                                <li>
                                    <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'" href="login.php?doctorlist">Doctor List</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'" href="tables.html" style="color: #fff;"> <i class="fa fa-wheelchair" style="font-size:20px"></i> Patient<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a  onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'" href="login.php?Add_Patient">Add Patient</a>
                                </li>
                                <li>
                                    <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'" href="login.php?patientlist">Patient List</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'" style="color: #fff;"><i class="glyphicon glyphicon-user" style="font-size:18px"></i> Employee<span class="fa arrow"></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a  onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'" href="login.php?Add_Employee">Add Employee</a>
                                </li>
                                <li>
                                    <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'" href="login.php?Employeelist">Employee List</a>
                                </li> 
                            </ul>
                        </li>
                        <li>
                            <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'" style="color: #fff;" ><i class="glyphicon glyphicon-calendar" style="font-size:18px" ></i> Schedule<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'" href="login.php?Add_Schedule">Add Schedule</a>
                                </li>
                                <li>
                                    <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'" href="login.php?Schedule_List">Schedule List</a>
                                </li>
                               
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                         <li >
                            <a   onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'"  style="color: #fff;"><i class="fa fa-ambulance" style="font-size:20px;"></i> Consultation<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'" href="login.php?add_consultation" >Add New Consultation</a>
                                </li>
                                <li>
                                    <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'" href="login.php?consultation_list">Consultation List</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'"  style="color: #fff;"><i class="fa fa-sitemap fa-fw" style="font-size:18px;"></i> Appointment<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'">Second Level Item</a>
                                </li>
                                <li>
                                    <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'"  >Second Level Item</a>
                                </li>
                                <li>
                                    <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'">Third Level <span class="fa arrow"></span></a>
                                    <ul class="nav nav-third-level">
                                        <li>
                                            <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'" >Third Level Item</a>
                                        </li>
                                        <li>
                                            <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'"  >Third Level Item</a>
                                        </li>
                                        <li>
                                            <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'"  >Third Level Item</a>
                                        </li>
                                        <li>
                                            <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'" >Third Level Item</a>
                                        </li>
                                    </ul>
                                    <!-- /.nav-third-level -->
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'" style="color: #fff;" ><i class="fa fa-comments-o" style="font-size:18px;"></i> Messeges<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'"  href="login.php?chat">Chat</a>
                                </li>
                                <li>
                                    <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'"  href="login.php?testchat" ">Push Notifications</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'"  style="color: #fff;"><i class="fa fa-plus-square" style="font-size:18px;"></i> New Advertiestments<span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'"  href="login.php?promotion">Add new Promotion</a>
                                </li>
                                <li>
                                    <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'"  href="login.php?heth_addvice">Add new Heath Addvice</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                          <li>
                            <a onMouseOver="this.style.backgroundColor='#989FA7'" onMouseOut="this.style.backgroundColor='#5A6978'" href="login.php?reports" style="color: #fff;" ><i class="    glyphicon glyphicon-list" style="font-size:18px" ></i> Reports</a>
                           
                        </li>
                    </ul>
                </div>
               <!-- /.sidebar-collapse -->
               
            </div>
            </nav>
           
            <?php 
        if(isset($_GET['dash_bord']))
    {
        include 'bodyright/dashbord.php';
    }
    if(isset($_GET['doctor']))
    {
        include 'bodyright/doctor.php';
    }
    if(isset($_GET['doctorlist']))
    {
        include 'bodyright/doctorlist.html';
    }
    if(isset($_GET['chat']))
    {
        
         include 'bodyright/chat2.html';
    }
    if(isset($_GET['promotion']))
    {   
         include 'bodyright/promotion.html';

    }
     if(isset($_GET['heth_addvice']))
    {   
         include 'bodyright/heth_addvice.html';

    }
    if(isset($_GET['Add_Schedule']))
    {   
         include 'bodyright/Add_Schedule.html';

    }
    if(isset($_GET['Schedule_List']))
    {   
         include 'bodyright/Schedule_List.html';

    }
     if(isset($_GET['reports']))
    {   
         include 'bodyright/reports.html';

    }
    if(isset($_GET['add_consultation']))
    {   
         include 'bodyright/new_consultation.html';


    }
    if(isset($_GET['consultation_list']))
    {   
         include 'bodyright/consultation_List.html';

    }
     if(isset($_GET['Add_Patient']))
    {   
         include 'bodyright/addPatient.html';

    }
      if(isset($_GET['patientlist']))
    {   
         include 'bodyright/patientList.html';

    }
     if(isset($_GET['Add_Employee']))
    {   
         include 'bodyright/addEmployee.html';

    }
     if(isset($_GET['Employeelist']))
    {   
         include 'bodyright/Employeelist.html';

    }
    ?> 
            <!-- /.navbar-static-side -->
      
   <div>
    <?php
        include 'bodyright.php';
    ?>
        
    </div>
<!--user_div-->


  <!-- jQuery -->
    <script src="../vendor/jquery/jquery.min.js"></script>
    <script src="../vendor/jquery/jquery.min.js"></script>

    <script src="https://code.jquery.com/jquery-3.1.0.js"></script>

    
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script> 
    <!-- Bootstrap Core JavaScript -->
    <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="../vendor/metisMenu/metisMenu.min.js"></script>

    <!-- Morris Charts JavaScript -->
    <script src="../vendor/raphael/raphael.min.js"></script>
    

    <!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>
    <script src="https://www.gstatic.com/firebasejs/4.9.1/firebase.js"></script>

<script type="text/javascript" src="js/doctor.js"></script>
    
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDj55UNRaxXD06-MkQxKa2Rc_CFzQWFCwo",
    authDomain: "patient-management-syste-9758b.firebaseapp.com",
    databaseURL: "https://patient-management-syste-9758b.firebaseio.com",
    projectId: "patient-management-syste-9758b",
    storageBucket: "patient-management-syste-9758b.appspot.com",
    messagingSenderId: "776974370251"
  };
  firebase.initializeApp(config);



</script>


<script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="../vendor/metisMenu/metisMenu.min.js"></script>

   
 
    <!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>

    <!-- Page-Level Demo Scripts - Tables - Use for reference -->
    <script>
    $(document).ready(function() {
        $('#dataTables-example').DataTable({
            responsive: true
        });
    });
    </script>
 <script src="../vendor/jquery/login.js"></script>
  
 
    </body>
</html>