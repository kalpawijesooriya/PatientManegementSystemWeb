
 var rootRef = firebase.database().ref().child("User");
 
 rootRef.on("child_added",snap =>{
alert(snap.val());
 });
