
  var firebaseConfig = {
      apiKey: "AIzaSyAwbWxu2BzA4KG12WiogZBBgbeNFxnnVm8",
      authDomain: "let-s-chat-7c91b.firebaseapp.com",
      projectId: "let-s-chat-7c91b",
      storageBucket: "let-s-chat-7c91b.appspot.com",
      messagingSenderId: "733351624184",
      appId: "1:733351624184:web:32b13d82d71a70ab172a0d"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      });});}
getData();
