$(document).redy(fiction(){
 var rootRef = firebase.database().ref('User/doctor/');
 
 rootRef.on("child_added",snap =>{
alert(snap.val());
 });

});