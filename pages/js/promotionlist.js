
 var newPostKey;
 var imageUrl;


 var fileButton = document.getElementById('fileButton');
 var uplorder = document.getElementById('uplorder');

 fileButton.addEventListener('change',function(e)
  {
    var file=e.target.files[0];

  var storageRef= firebase.storage().ref("promotions/"+file.name);

   var task=storageRef.put(file);

   task.on('state_changed',
function progress(snapshot){
var pracentage=(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
uplorder.value=pracentage;
console.log('Upload is ' + pracentage + '% done');

},
function error(err)
{
console.log('error while uploading')
},

function complete()
{
 
            storageRef.getDownloadURL().then(function(url) {
               
             imageUrl=url;
               console.log('URL is ' + url );

            }).catch(function(error) {
                console.log('error while downloading file');
            });

});


  });

function Friend() {
 
  this.FriendList = document.getElementById('meg'); 
  this.FriendPic = document.getElementById('userpic');
  this.FriendName = document.getElementById('username');
  this.iniFirebase();
}

// Sets up shortcuts to Firebase features and initiate firebase auth.
Friend.prototype.iniFirebase = function() {
  // Shortcuts to Firebase SDK features.
  this.auths = firebase.auth();
  this.databases = firebase.database();
  this.auths.onAuthStateChanged(this.onAuthStateChangedes.bind(this));
};

// Loads chat messages history and listens for upcoming ones.
Friend.prototype.loadNames = function() {

  // Reference to the /patients/ database path.
  this.Ref = this.databases.ref('Promotion');
  // Make sure we remove all previous listeners.
  this.Ref.off();

  // Loads the last 12 messages and listen for new ones.
  var setNames = function(data) {
    var val = data.val();                          
   this.displayMessages(data.key, val.date, val.title, val.image, val.details);
  }.bind(this);
  this.Ref.limitToLast(25).on('child_added', setNames);
  this.Ref.limitToLast(25).on('child_changed', setNames);
};

//Saves a new message on the Firebase DB.
Friend.prototype.saveNames = function(es) {
  es.preventDefault();
  // Check that the user entered a message and is signed in.

};


// Triggers when the auth state change for instance when the user signs-in or signs-out.
Friend.prototype.onAuthStateChangedes = function(user) {
  if (user) { // User is signed in!
    // Get profile pic and user's name from the Firebase user object.
    var profilePicUrl = user.photoURL;
    var FriendName = user.displayName;

    // Set the user's profile pic and name.
    this.FriendPic.style.backgroundImage = 'url(' + (profilePicUrl || '/images/profile_placeholder.png') + ')';
    this.FriendName.textContent =FriendName;

    // Show user's profile and sign-out button.
    this.FriendName.removeAttribute('hidden');
    this.FriendPic.removeAttribute('hidden');
   

    // Hide sign-in button.
   

    // We load currently existing chant messages.
    this.loadNames();
  } else { // User is signed out!
    // Hide user's profile and sign-out button.
    thisFriendName.setAttribute('hidden', 'true');
    this.FriendPic.setAttribute('hidden', 'true');
   

    // Show sign-in button.
  
  }
};




// Template for messages.
Friend.MESSAGE =
    '<div class="message-container">' +
      '<div class="spacing" id="sp"><div class="pic" id="picture"></div></div>' +
      '<div class="message" id="fname"></div>' +
      '<div class="name" id="nam"></div>' +
      '<div class="buttons" id="editbutton"><img class="edit" onClick="pro_edit(this.id)"></img><img class="delete" onClick="pro_delete(this.id)"></img></div>' +
      

    '</div>';

// A loading image URL.
Friend.LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif';

// Displays a Message in the UI.              
Friend.prototype.displayMessages = function(key,  date,title, picUr, imageUr) {
  var divs = document.getElementById(key);
 
  // If an element for that message does not exists yet we create it.
  if (!divs) {
    var container = document.createElement('div');
    container.innerHTML = Friend.MESSAGE;
    divs = container.firstChild;
    divs.setAttribute('id', key);
    
   
    this.FriendList.appendChild(divs);

  }
  if (picUr) {
    divs.querySelector('.pic').style.backgroundImage = 'url(' +picUr+ ')';
    divs.querySelector('.edit').setAttribute('id', key);
    divs.querySelector('.delete').setAttribute('id', key);
   //  var editbtn = document.getElementById("editbutton");
   //  del= editbtn.firstChild;
   // del.setAttribute('id', key+"edit");
   
  }

  divs.querySelector('#nam').textContent = date;
  var friendElement = divs.querySelector('#fname');
  if (discription) { // If the message is text.
   friendElement.textContent = title;
    // Replace all line breaks by <br>.
    friendElement.innerHTML = friendElement.innerHTML.replace(/\n/g, '<br>');
    
  } else if (imageUr) { // If the message is an image.
    var image = document.createElement('img');
    image.addEventListener('load', function() {
      this.FriendList.scrollTop = this.FriendList.scrollHeight;
    }.bind(this));
    this.setImageUrll(imageUr, images);
   friendElement.innerHTML = '';
   friendElement.appendChild(images);
  }
  // Show the card fading-in and scroll to view the new message.
  setTimeout(function() {divs.classList.add('visible')}, 1);
  this.FriendList.scrollTop = this.FriendList.scrollHeight;

  
   


  // var delbtn =  var editbtn = div.querySelector('#delbutton');;
  //  del= delbtn.firstChild;
  //  del.setAttribute('id', key+"del");
 
};



window.onload = function() {
  window.friend = new Friend();
};

function pro_edit(clicked_id)
{  
  var title,summary,details;
   ref = firebase.database().ref("Promotion/").child(clicked_id);
  // ref.remove();
  document.getElementById('submit').style.visibility = 'hidden';
  document.getElementById('update').style.visibility = 'visible';
  ref.on("value",snap =>{
  title=snap.child("title").val();
  summary=snap.child("discription").val();
  details=snap.child("details").val();
  image=snap.child("image").val();
   });
  document.getElementById('title').value =title ;
  document.getElementById('summary').value=summary;
  document.getElementById('discription').value=details;
  document.getElementById('output').src = image;
  newPostKey=clicked_id;
}

function pro_delete(clicked_id)
{
  var title;
   ref = firebase.database().ref("Promotion/").child(clicked_id);
  // ref.remove();
   
  ref.on("value",snap =>{
  title=snap.child("title").val();
   });
  if (confirm('Are you sure you want to remove'+ "'"+ title+"'")) {
    document.getElementById(clicked_id).remove();
    ref.remove();
} else {
    // Do nothing!
}
  
   // alert(clicked_id);
}

function pro_container(clicked_id)
{
  var title,summary,details;
   ref = firebase.database().ref("Promotion/").child(clicked_id);
  // ref.remove();
   
  ref.on("value",snap =>{
  title=snap.child("title").val();
  summary=snap.child("discription").val();
  details=snap.child("details").val();
  image=snap.child("image").val();
   });
  document.getElementById('title').value =title ;
  document.getElementById('summary').value=summary;
  document.getElementById('discription').value=details;
  document.getElementById('output').src = image;

}

function update_promotion()
{
   document.getElementById('update').style.visibility = "hidden";;
   document.getElementById('submit').style.visibility = 'visible';
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  } 

  if(mm<10) {
      mm = '0'+mm
  } 

  today = dd + '/' + mm + '/' + yyyy;
 
 title = document.getElementById('title').value ;
 summary= document.getElementById('summary').value;
 details= document.getElementById('discription').value;
 image= imageUrl;


 firebase.database().ref().child('/Promotion/' + newPostKey)
        .update({ title:title, details:details, discription:summary,image:image,date:today});
 document.getElementById('title').value = "";
  document.getElementById('summary').value = "";
  document.getElementById('discription').value = "";
}


var loadFile = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('output');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };
function add_promotion()
 {
  
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  } 

  if(mm<10) {
      mm = '0'+mm
  } 

  today = dd + '/' + mm + '/' + yyyy;

  var title   = document.getElementById('title').value;
  var summary  = document.getElementById('summary').value;
  var discription    = document.getElementById('discription').value;
  var firebaseRef = firebase.database().ref('Promotion/').push();
   if (title==""|| summary==""||discription=="") {alert("Plase complete all feelds");}
   else{firebaseRef.child("title").set(title);
  firebaseRef.child("discription").set( summary);
  firebaseRef.child("details").set(discription);
  firebaseRef.child("date").set(today);
  firebaseRef.child("image").set(imageUrl);

  document.getElementById('title').value = "";
  document.getElementById('summary').value = "";
  document.getElementById('discription').value = "";


}
 
  

}


