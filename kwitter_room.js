var firebaseConfig = {
  apiKey: "AIzaSyB2hYELPJhzgL7_8psDYqV5iYGkmumRX0o",
  authDomain: "kwitter-ab2dd.firebaseapp.com",
  databaseURL: "https://kwitter-ab2dd-default-rtdb.firebaseio.com",
  projectId: "kwitter-ab2dd",
  storageBucket: "kwitter-ab2dd.appspot.com",
  messagingSenderId: "198611849971",
  appId: "1:198611849971:web:eb6022bb930fc0402c9d86",
  measurementId: "G-SVL75S6G16",
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name",
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Room name- " + Room_names);
        row =
          "<div class = 'room_name' id=" +
          Room_names +
          " onclick ='redirectToRoomName(this.id)'>#" +
          Room_names +
          "</div> <hr> ";
        document.getElementById("output").innerHTML += row;
      });
    });
}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
