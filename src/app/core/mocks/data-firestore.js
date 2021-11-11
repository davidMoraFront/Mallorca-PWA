const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCR9rXfugxSfb9Pvtj1MoEkJCr8J5xjRJ8",
  authDomain: "mallorca-pwa.firebaseapp.com",
  projectId: "mallorca-pwa",
});

var db = firebase.firestore();

var playerCollection = [
  {
    id: "neq2IUNtnFjFLHHBwdbd",
    // image:
    //   "https://firebasestorage.googleapis.com/v0/b/players-abb28.appspot.com/o/ja.png?alt=media&token=2f638245-2e36-4cf8-9cb0-aee0855abc23",
    image: "",
    name: "jose",
    position: "por",
    stadistics: [
      { name: "total-matches", value: 10 },
      { name: "league-matches", value: 6 },
      { name: "friendly-matches", value: 4 },
      { name: "won-matches", value: 8 },
      { name: "tied-matches", value: 1 },
      { name: "lost-matches", value: 1 },
      { name: "titular-player", value: 9 },
      { name: "substitute-player", value: 1 },
      { name: "goals", value: 0 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "provoked-penalty", value: 3 },
      { name: "penalties-saved", value: 2 },
      { name: "yellow-cards", value: 5 },
      { name: "red-cards", value: 4 },
      { name: "sanctions-matches", value: 1 },
      { name: "assistance", value: 6 },
      { name: "time", value: 3401 },
    ],
  },
  {
    id: "At7gM0Dhi6rDg3pjHH3Z",
    // image:
    //   "https://firebasestorage.googleapis.com/v0/b/players-abb28.appspot.com/o/dm.png?alt=media&token=0bba843c-6dd7-4cfa-aed4-af8aa4959719",
    image: "",
    name: "david",
    position: "del",
    stadistics: [
      { name: "total-matches", value: 8 },
      { name: "league-matches", value: 6 },
      { name: "friendly-matches", value: 2 },
      { name: "won-matches", value: 5 },
      { name: "tied-matches", value: 2 },
      { name: "lost-matches", value: 1 },
      { name: "titular-player", value: 6 },
      { name: "substitute-player", value: 2 },
      { name: "goals", value: 5 },
      { name: "shot-penalty", value: 3 },
      { name: "goals-penalty", value: 2 },
      { name: "provoked-penalty", value: 2 },
      { name: "penalties-saved", value: 2 },
      { name: "yellow-cards", value: 5 },
      { name: "red-cards", value: 1 },
      { name: "sanctions-matches", value: 2 },
      { name: "assistance", value: 2 },
      { name: "time", value: 5040 },
    ],
  },
  {
    id: "VwRBEyRvk5hXBuYVGqTt",
    // image:
    //   "https://firebasestorage.googleapis.com/v0/b/players-abb28.appspot.com/o/ag.png?alt=media&token=506faf15-2692-4044-9212-6551b9400c4b",
    image: "",
    name: "alex",
    position: "def",
    stadistics: [
      { name: "total-matches", value: 6 },
      { name: "league-matches", value: 3 },
      { name: "friendly-matches", value: 3 },
      { name: "won-matches", value: 4 },
      { name: "tied-matches", value: 1 },
      { name: "lost-matches", value: 1 },
      { name: "titular-player", value: 4 },
      { name: "substitute-player", value: 2 },
      { name: "goals", value: 1 },
      { name: "shot-penalty", value: 3 },
      { name: "goals-penalty", value: 2 },
      { name: "provoked-penalty", value: 1 },
      { name: "penalties-saved", value: 1 },
      { name: "yellow-cards", value: 9 },
      { name: "red-cards", value: 3 },
      { name: "sanctions-matches", value: 3 },
      { name: "assistance", value: 2 },
      { name: "time", value: 9001 },
    ],
  },
  {
    id: "cxgR9qJoLbJJjZxzrKOq",
    // image:
    //   "https://firebasestorage.googleapis.com/v0/b/players-abb28.appspot.com/o/am.png?alt=media&token=e83b4792-5869-4cd2-a2e2-7e891701c28f",
    image: "",
    name: "aaron",
    position: "cen",
    stadistics: [
      { name: "total-matches", value: 3 },
      { name: "league-matches", value: 2 },
      { name: "friendly-matches", value: 1 },
      { name: "won-matches", value: 1 },
      { name: "tied-matches", value: 1 },
      { name: "lost-matches", value: 1 },
      { name: "titular-player", value: 2 },
      { name: "substitute-player", value: 1 },
      { name: "goals", value: 2 },
      { name: "shot-penalty", value: 2 },
      { name: "goals-penalty", value: 2 },
      { name: "provoked-penalty", value: 1 },
      { name: "penalties-saved", value: 1 },
      { name: "yellow-cards", value: 3 },
      { name: "red-cards", value: 2 },
      { name: "sanctions-matches", value: 5 },
      { name: "assistance", value: 1 },
      { name: "time", value: 540 },
    ],
  },
];

playerCollection.map((obj) => {
  db.collection("players")
    .add({
      id: obj.id,
      image: obj.image,
      name: obj.name,
      position: obj.position,
      stadistics: obj.stadistics,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
});
