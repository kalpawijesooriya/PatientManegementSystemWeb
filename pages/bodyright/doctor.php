<script type="text/javascript" src="js/doctor.js"></script>
<div class="div">
  

   <div  class="div_doctor">

                <div class="col-lg-12">

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Add new doctor
                        </div>
                        <div class="panel-body">
                            <h3>Personal Details</h3>
                            <div class="row">
							 <form role="form" >
                                <div class="col-lg-6">
                                    
									<label>Title</label>
                                            <select class="form-control" class="select_doctor_title" style="margin-bottom: 15px" id="title">
                                                <option>Mr.</option>
                                                <option>Ms.</option>
                                                <option>Mrs.</option>
                                                
                                            </select>
                                        <div class="form-group">
                                            <label>First Name</label>
                                            <input class="form-control" id="doctor_fname">
                                            
                                        </div>
										<div class="form-group">
                                            <label>Last Name</label>
                                            <input class="form-control" id="doctor_lname">
                                           
                                        </div>
                                        <div class="form-group">
                                            <label>NIC Number</label>
                                            <input class="form-control" placeholder="943343519V" id="doctor_NIC">
                                        </div>
										<div class="form-group">
                                            <label>SLMC Registration Number</label>
                                            <input class="form-control" placeholder="23450" id="slmc_no">
                                        </div>
										<div class="div_spcility">
										<label>Specialist</label><br>
                                                <p>
                                                    <input type="radio" name="options_special" checked="checked" 
                                                    id="select_speciality"  onclick="select_specialitys()">Select the specialist
                                                </p>
										 <select class="form-control" class="select_doctor_title" id="select_doctors" >
                                                <option>Allergist or Immunologist</option>
                                                <option>Anesthesiologist</option>
                                                <option>Cardiologist</option>
												<option>Dermatologist</option>
												<option>Gastroenterologist </option>
												<option>Hematologist/Oncologist</option>
												<option>Internal Medicine Physician</option>
												<option>Nephrologist</option>
												<option>Neurosurgeon</option>
												<option>Obstetrician</option>
												<option>Gynecologist</option>
												<option>Nurse-Midwifery</option>
												<option>Occupational Medicine Physician</option>
												<option>Ophthalmologist</option>
												<option>Oral and Maxillofacial Surgeon</option>
												<option>Pathologist</option>
												<option>Pediatrician</option>
												<option>Plastic Surgeon</option>
												<option>Podiatrist</option>
												<option>Diagnostic Radiologist</option>
												<option>Radiation Onconlogist</option>
                                            </select> 
                                            <p>
                                    
                                    <input type="radio" name="options_special" value="customurl"  id="type_speciality"  onclick="type_specialitys()">Enter the specialist
                                            </p>  
                                        <div class="form-group">
                                            <input class="form-control" id="input_doctors" disabled="disabled">
                                           
                                        </div>

                                       </div>
                                       
                                    
                                        <div class="sex">
                                            <label>sex<i class="lable_sex">*</i> 
                                            <div class="div_sex">
                                                <input type="radio" name="sex" class="radio_male" id="male" checked="checked">
                                                <h5 class="male">Male</h5>
                                                </div>

                                            <div class="div_female">
                                                <input type="radio" name="sex" class="input_female" id="female">
                                                <h5 style="">Female</h5>
                                            </div>
                                        </div>
                                    </label>
                                         <label>Datae of Birth</label>       
                                         <input class="form-control" type="date" name="bday" id="dob">

                                         <div class="form-group">
                                            <label>Doctor Fee</label>
                                            <input class="form-control" type="Number" placeholder="1200" id="fee">
                                           
                                    </div>
                                       <div class="div_hospital">
                                        <label>Hospital</label><br>
                                                <p>
                                                    <input type="radio" name="options_hospital" checked="checked"  
                                                    onclick="select_hospital()" id="selecthos">Select the Hospital
                                                </p>
                                         <select class="form-control" style="margin-bottom:15px" id="select_hospitals" >
                                                <option>District General Hospital Gampaha</option>
                                                <option>District General Hospital Negombo</option>
                                                <option>Provincial General Hospital Kurunegala</option>
                                                <option>National Hospital of Sri Lanka colombo</option>
                                                <option>Base Hospital Type A - Wathupitiwala</option>
                                                <option>Base Hospital Type B - Mirigama</option>
                                                <option>Base Hospital Type B - Kirobathgoda</option>
                                                <option>Divisional Hospital Type A - Divulapitiya</option>
                                                <option>North Colombo Teaching Hospital Ragama</option>
                                                <option>National Eye Hospital Colombo</option>
                                                <option>Castle Street Hospital</option>
                                                <option>De Soysa Hospital</option>
                                                <option> Lady Ridgeway Hospital</option>
                                                <option>Sirimavo Bandaranayake Hospital</option>
                                                <option>Oral and Maxillofacial Surgeon</option>
                                                <option>Teaching Hospital - Welisara</option>
                                                
                                            </select> 
                                            <p>
                                                
                                    
                                    <input type="radio" name="options_hospital" value="customurl" onclick="type_hospital()" id="typehos">Enter the Hospital
                                            </p>  
                                        <div class="form-group">
                                            <input class="form-control" id="input_hospitals" disabled="disabled">
                                           
                                        </div>
                                    </div>

                                     
                                    
                                        
                                        
                                        
                                       
                                       
                                       
                                  
                                </div>
                                <!-- /.col-lg-6 (nested) -->


                                <div class="col-lg-6" style="margin-top: -57px;">
                                    <h3>Contact Details</h3>
                                    <form role="form">
                                       
                                        <div class="form-group">
                                            <label>Mobile Number</label><br>
                                            <input class="form-control" type="tel" id="sessionNo" name="sessionNum" onKeyDown="limitText(this,10);" onKeyUp="limitText(this,10);" >

                                            <script src="js/jquery.min.js"></script>
                                            <script src="js/intlTelInput.js"></script>
                                            <script src="js/defaultCountryIp.js"></script>
                                            <script>
                                                  
                                                  $('#sessionNo').intlTelInput({ initialCountry: "auto",
                                                   geoIpLookup: function(callback){
                                                   $.get('http://ipinfo.io', function(){}, "jsonp").always(function(resp){
                                                   var countryCode = (resp && resp.country) ? resp.country : "";
                                                   callback(countryCode);
                                                     });
                                                      },
                                                   utilsScript: "js/utils.js"
                                                    });
                                            
                                            </script>
                                           
                                            <script language="javascript" type="text/javascript">
                                                   
                                            function limitText(limitField, limitNum) 
                                            {
                                                if (limitField.value.length > limitNum) { limitField.value = limitField.value.substring(0, limitNum);}
                                            }
                                            
                                            </script>

                                        </div>
                                         <div class="form-group">
                                            <label>Home Phone Number</label>
                                            <input class="form-control" type="tel" id="htp" name="sessionNum" onKeyDown="limitText(this,10);" onKeyUp="limitText(this,10);" placeholder="011 222 3456" style="width: 235px;">

                                           
                                           
                                            <script language="javascript" type="text/javascript">
                                                   
                                            function limitText(limitField, limitNum) 
                                            {
                                                if (limitField.value.length > limitNum) { limitField.value = limitField.value.substring(0, limitNum);}
                                            }
                                            
                                            </script>

                                        </div>
                                            <div class="form-group">
                                                <label>E-mail Addres</label>
                                                <input class="form-control" placeholder="Someone@example.com" id="email">
                                        </div>
                                            
                                        <div class="div_hospital">
                                            <label>Perment Address</label><br>
                                                
                                         
                                            <p>Address line 1</p>
                                            <input class="form-control" id="doctor_addres_ine1" >
                                            <p>Address line 2</p>
                                            <input class="form-control" id="doctor_addres_ine2" >
                                             <p>Address line 3</p>
                                            <input class="form-control" id="doctor_addres_ine3" >
                                           
                                        </div>

                                         <div class="div_hospital" style="padding-bottom: 15px">
                                            <label>Emargency Contact Details</label><br>
                                                
                                         
                                            <p>Person Name </p>
                                            <input class="form-control" id="person" >
                                            <p>Relationship</p>
                                            <input class="form-control" id="relationship" type="text">
                                            <p>Phone Number</p>
                                            <input class="form-control"  onKeyDown="limitText(this,10);" onKeyUp="limitText(this,10);" id="emarTp">
                                            <script src="js/jquery.min.js"></script>
                                            <script src="js/intlTelInput.js"></script>
                                            <script src="js/defaultCountryIp.js"></script>
                                            <script>
                                                  
                                                  $('#Emargency').intlTelInput({ initialCountry: "auto",
                                                   geoIpLookup: function(callback){
                                                   $.get('http://ipinfo.io', function(){}, "jsonp").always(function(resp){
                                                   var countryCode = (resp && resp.country) ? resp.country : "";
                                                   callback(countryCode);
                                                     });
                                                      },
                                                   utilsScript: "js/utils.js"
                                                    });
                                            
                                            </script>
                                           
                                            <script language="javascript" type="text/javascript">
                                                   
                                            function limitText(limitField, limitNum) 
                                            {
                                                if (limitField.value.length > limitNum) { limitField.value = limitField.value.substring(0, limitNum);}
                                            }
                                            
                                            </script>
                                             
                                           
                                        </div>
                                    </div>
                                            
                                          
                                        
                                   
                                  
                                    
                                </div>
                                <!-- /.col-lg-6 (nested) -->
								<div class="div_buttons">
                                        <input type="button" value="Save"  onMouseOver="this.style.backgroundColor='#1784498a'" onMouseOut="this.style.backgroundColor='#178449'" class="btn btn-default" style="float:left; color: #fff" onclick="register_doctor()"></input>
                                         <div class="div_or">or</div>
                                        <button type="reset" class="btn btn-default" style="background-color: #E0E1E2;">Reset</button>
                                </div>
								</form>
                                
                            </div>
                            <!-- /.row (nested) -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-12 -->
            </div>
<div>  
 
