
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
      '<div class="buttons" id="editbutton"><img class="edit"></img><img class="delete" ></img></div>' +
      

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
    divs.querySelector('#picture').style.backgroundImage = 'url(' +picUr+ ')';
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