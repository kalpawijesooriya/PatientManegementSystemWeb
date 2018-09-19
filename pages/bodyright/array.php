
<?php echo $_POST["mobile"]; ?>
<?php echo $_POST["message"]; ?>

<?php

	include ( "NexmoMessage.php" );
	

	/**
	 * To send a text message.
	 *
	 */

	// Step 1: Declare new NexmoMessage.
	$nexmo_sms = new NexmoMessage('93aa20ce', 'eihUnx1ZsBwjtMmO');

	// Step 2: Use sendText( $to, $from, $message ) method to send a message. 
	$info = $nexmo_sms->sendText( $_POST["mobile"], 'Viweka Hospitals', $_POST["message"] );

	// Step 3: Display an overview of the message
	echo $nexmo_sms->displayOverview($info);

	// Done!

?>