import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";

// Add Firebase products that you want to use
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
// Initialize Firebase

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwhL8H5U8DiE7G74fpCzyCrq07wRDIvg8",
  authDomain: "foodhunch-9539c.firebaseapp.com",
  databaseURL: "https://foodhunch-9539c-default-rtdb.firebaseio.com",
  projectId: "foodhunch-9539c",
  storageBucket: "foodhunch-9539c.appspot.com",
  messagingSenderId: "476659515344",
  appId: "1:476659515344:web:66f7ffec5641ce358903d5",
  measurementId: "G-EBZ8KEQ4QZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function fetchShareCount() {
  var vendorId = "";
  // Replace with the actual vendor ID

  var db = firebase.firestore();
  var shareCountRef = db.collection("shareCounts").doc(vendorId);

  shareCountRef
    .get()
    .then(function (doc) {
      if (doc.exists) {
        var shareCount = doc.data().count || 0;
        document.getElementById("share-count").textContent =
          "Shares: " + shareCount;
      } else {
        console.log("No share count data found for the vendor.");
      }
    })
    .catch(function (error) {
      console.error("Error fetching share count:", error);
    });
}

document.getElementById("share-button").addEventListener("click", function () {
  handleShareButtonClick();
});

fetchShareCount();
