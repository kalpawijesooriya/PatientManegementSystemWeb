

<?php 
	if(!isset($_GET['dash_bord'])){ 
	if(!isset($_GET['doctor'])){
	if(!isset($_GET['doctorlist'])){
	if(!isset($_GET['chat'])){
	if(!isset($_GET['promotion'])){
	if(!isset($_GET['heth_addvice'])){
	if(!isset($_GET['Add_Schedule'])){
	if(!isset($_GET['Schedule_List'])){
	if(!isset($_GET['consultation_list'])){
	if(!isset($_GET['add_consultation'])){
	if(!isset($_GET['Add_Patient'])){
	if(!isset($_GET['reports'])){
?>
	<div id="bodyright" style="background-color: #fff ;" >
		<?php
		include 'bodyright/dashbord.php';
	?>
	<?php 
	if(isset($_GET['edit_cat']))
			{
				include('edit_cat.php');
			}
	if(isset($_GET['edit_sub_cat']))
			{
				include('edit_sub_cat.php');
			}
	if(isset($_GET['edit_pro']))
			{
				include('edit_pro.php');
			}

	 ?>
	</div>
<?php } } }}}}}}}}}} ?>