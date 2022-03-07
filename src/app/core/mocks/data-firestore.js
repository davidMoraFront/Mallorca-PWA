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
    id: "cxgR9qJoLbJJjZxzrKOq",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/jl.png?alt=media&token=eb8b362b-c10e-465a-8517-21f00c8fcee9",
    name: "Pepe",
    position: "cen",
    stadistics: [
      { name: "total-matches", value: 5 },
      { name: "league-matches", value: 2 },
      { name: "friendly-matches", value: 3 },
      { name: "won-matches", value: 3 },
      { name: "tied-matches", value: 1 },
      { name: "lost-matches", value: 1 },
      { name: "titular-player", value: 1 },
      { name: "substitute-player", value: 1 },
      { name: "goals", value: 0 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 1 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 2 },
      { name: "assistance", value: 1 },
      { name: "time", value: 135 },
    ],
  },
  {
    id: "cxgR9qJoLbJJjZxzrKOq",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/jb.png?alt=media&token=9a55b1aa-c10e-452f-bd61-489d0d7a7d21",
    name: "Juanpe",
    position: "cen",
    stadistics: [
      { name: "total-matches", value: 6 },
      { name: "league-matches", value: 3 },
      { name: "friendly-matches", value: 3 },
      { name: "won-matches", value: 4 },
      { name: "tied-matches", value: 1 },
      { name: "lost-matches", value: 1 },
      { name: "titular-player", value: 1 },
      { name: "substitute-player", value: 2 },
      { name: "goals", value: 0 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 0 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 0 },
      { name: "assistance", value: 0 },
      { name: "time", value: 105 },
    ],
  },
  {
    id: "cxgR9qJoLbJJjZxzrKOq",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/db.png?alt=media&token=016d3382-5514-430a-8ef1-9a8da26caa25",
    name: "Barrasa",
    position: "del",
    stadistics: [
      { name: "total-matches", value: 6 },
      { name: "league-matches", value: 4 },
      { name: "friendly-matches", value: 2 },
      { name: "won-matches", value: 3 },
      { name: "tied-matches", value: 1 },
      { name: "lost-matches", value: 2 },
      { name: "titular-player", value: 2 },
      { name: "substitute-player", value: 2 },
      { name: "goals", value: 1 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 0 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 0 },
      { name: "assistance", value: 0 },
      { name: "time", value: 205 },
    ],
  },
  {
    id: "cxgR9qJoLbJJjZxzrKOq",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/dc.png?alt=media&token=5c38c853-9213-4041-956f-860a9fbea795",
    name: "Camachin",
    position: "del",
    stadistics: [
      { name: "total-matches", value: 8 },
      { name: "league-matches", value: 5 },
      { name: "friendly-matches", value: 3 },
      { name: "won-matches", value: 4 },
      { name: "tied-matches", value: 2 },
      { name: "lost-matches", value: 2 },
      { name: "titular-player", value: 3 },
      { name: "substitute-player", value: 2 },
      { name: "goals", value: 3 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 3 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 0 },
      { name: "assistance", value: 0 },
      { name: "time", value: 230 },
    ],
  },
  {
    id: "cxgR9qJoLbJJjZxzrKOq",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/jc.png?alt=media&token=a6032031-bdbb-44b8-8671-0a90b4628358",
    name: "Camacho",
    position: "del",
    stadistics: [
      { name: "total-matches", value: 7 },
      { name: "league-matches", value: 5 },
      { name: "friendly-matches", value: 2 },
      { name: "won-matches", value: 5 },
      { name: "tied-matches", value: 1 },
      { name: "lost-matches", value: 1 },
      { name: "titular-player", value: 3 },
      { name: "substitute-player", value: 2 },
      { name: "goals", value: 5 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 0 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 0 },
      { name: "assistance", value: 0 },
      { name: "time", value: 240 },
    ],
  },
  {
    id: "neq2IUNtnFjFLHHBwdbd",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/ja.png?alt=media&token=1c7329c7-0063-4d29-a838-f5495dc7ef0c",
    name: "Jose",
    position: "por",
    stadistics: [
      { name: "total-matches", value: 6 },
      { name: "league-matches", value: 5 },
      { name: "friendly-matches", value: 1 },
      { name: "won-matches", value: 3 },
      { name: "tied-matches", value: 2 },
      { name: "lost-matches", value: 1 },
      { name: "titular-player", value: 5 },
      { name: "substitute-player", value: 0 },
      { name: "goals", value: 0 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 0 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 7 },
      { name: "assistance", value: 0 },
      { name: "time", value: 450 },
    ],
  },
  {
    id: "neq2IUNtnFjFLHHBwdbd",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/jj.png?alt=media&token=c3b122b4-7274-41bb-a164-cdee4732e4cc",
    name: "Josete",
    position: "del",
    stadistics: [
      { name: "total-matches", value: 4 },
      { name: "league-matches", value: 3 },
      { name: "friendly-matches", value: 1 },
      { name: "won-matches", value: 2 },
      { name: "tied-matches", value: 1 },
      { name: "lost-matches", value: 1 },
      { name: "titular-player", value: 2 },
      { name: "substitute-player", value: 1 },
      { name: "goals", value: 2 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 1 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 0 },
      { name: "assistance", value: 2 },
      { name: "time", value: 135 },
    ],
  },
  {
    id: "neq2IUNtnFjFLHHBwdbd",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/if.png?alt=media&token=6b39bfe9-a10b-4b2a-bd79-a9afe35d3e8a",
    name: "Igor",
    position: "cen",
    stadistics: [
      { name: "total-matches", value: 4 },
      { name: "league-matches", value: 3 },
      { name: "friendly-matches", value: 1 },
      { name: "won-matches", value: 2 },
      { name: "tied-matches", value: 0 },
      { name: "lost-matches", value: 2 },
      { name: "titular-player", value: 0 },
      { name: "substitute-player", value: 3 },
      { name: "goals", value: 0 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 0 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 0 },
      { name: "assistance", value: 0 },
      { name: "time", value: 40 },
    ],
  },
  {
    id: "neq2IUNtnFjFLHHBwdbd",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/ag.png?alt=media&token=c60e578f-3ad9-4992-82b4-951feda78808",
    name: "Alex",
    position: "def",
    stadistics: [
      { name: "total-matches", value: 7 },
      { name: "league-matches", value: 5 },
      { name: "friendly-matches", value: 2 },
      { name: "won-matches", value: 4 },
      { name: "tied-matches", value: 1 },
      { name: "lost-matches", value: 2 },
      { name: "titular-player", value: 5 },
      { name: "substitute-player", value: 0 },
      { name: "goals", value: 0 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 1 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 0 },
      { name: "assistance", value: 1 },
      { name: "time", value: 450 },
    ],
  },
  {
    id: "neq2IUNtnFjFLHHBwdbd",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/jg.png?alt=media&token=99427973-a7e2-4a58-b435-f2ddbf82c0cd",
    name: "Churro",
    position: "def",
    stadistics: [
      { name: "total-matches", value: 7 },
      { name: "league-matches", value: 4 },
      { name: "friendly-matches", value: 3 },
      { name: "won-matches", value: 3 },
      { name: "tied-matches", value: 2 },
      { name: "lost-matches", value: 2 },
      { name: "titular-player", value: 4 },
      { name: "substitute-player", value: 0 },
      { name: "goals", value: 0 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 1 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 0 },
      { name: "assistance", value: 0 },
      { name: "time", value: 360 },
    ],
  },
  {
    id: "neq2IUNtnFjFLHHBwdbd",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/pa.png?alt=media&token=12cef249-7895-4d6a-8f04-fd8e1958945f",
    name: "Pepe Abdellah",
    position: "cen",
    stadistics: [
      { name: "total-matches", value: 7 },
      { name: "league-matches", value: 5 },
      { name: "friendly-matches", value: 2 },
      { name: "won-matches", value: 4 },
      { name: "tied-matches", value: 2 },
      { name: "lost-matches", value: 1 },
      { name: "titular-player", value: 5 },
      { name: "substitute-player", value: 0 },
      { name: "goals", value: 4 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 1 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 0 },
      { name: "assistance", value: 1 },
      { name: "time", value: 450 },
    ],
  },
  {
    id: "neq2IUNtnFjFLHHBwdbd",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/am.png?alt=media&token=35b0f4d7-8768-44f9-a0a1-e3b87fe0bf35",
    name: "Aaron",
    position: "cen",
    stadistics: [
      { name: "total-matches", value: 4 },
      { name: "league-matches", value: 3 },
      { name: "friendly-matches", value: 1 },
      { name: "won-matches", value: 3 },
      { name: "tied-matches", value: 0 },
      { name: "lost-matches", value: 1 },
      { name: "titular-player", value: 3 },
      { name: "substitute-player", value: 0 },
      { name: "goals", value: 1 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 0 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 0 },
      { name: "assistance", value: 0 },
      { name: "time", value: 175 },
    ],
  },
  {
    id: "neq2IUNtnFjFLHHBwdbd",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/dm.png?alt=media&token=b3b4ccbc-9793-4816-8aca-c17c5a9b3a28",
    name: "Mora",
    position: "del",
    stadistics: [
      { name: "total-matches", value: 7 },
      { name: "league-matches", value: 5 },
      { name: "friendly-matches", value: 2 },
      { name: "won-matches", value: 4 },
      { name: "tied-matches", value: 2 },
      { name: "lost-matches", value: 1 },
      { name: "titular-player", value: 4 },
      { name: "substitute-player", value: 1 },
      { name: "goals", value: 2 },
      { name: "shot-penalty", value: 1 },
      { name: "goals-penalty", value: 1 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 0 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 1 },
      { name: "assistance", value: 1 },
      { name: "time", value: 320 },
    ],
  },
  {
    id: "neq2IUNtnFjFLHHBwdbd",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/sp.png?alt=media&token=d95605cf-4421-4021-8f7a-c6796f05b6c2",
    name: "Tore",
    position: "def",
    stadistics: [
      { name: "total-matches", value: 5 },
      { name: "league-matches", value: 4 },
      { name: "friendly-matches", value: 1 },
      { name: "won-matches", value: 3 },
      { name: "tied-matches", value: 2 },
      { name: "lost-matches", value: 0 },
      { name: "titular-player", value: 4 },
      { name: "substitute-player", value: 0 },
      { name: "goals", value: 0 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 1 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 0 },
      { name: "assistance", value: 1 },
      { name: "time", value: 315 },
    ],
  },
  {
    id: "neq2IUNtnFjFLHHBwdbd",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/jt.png?alt=media&token=64f4c4a6-9185-4200-a40c-ab116dad5c1d",
    name: "Tama",
    position: "def",
    stadistics: [
      { name: "total-matches", value: 5 },
      { name: "league-matches", value: 3 },
      { name: "friendly-matches", value: 2 },
      { name: "won-matches", value: 1 },
      { name: "tied-matches", value: 2 },
      { name: "lost-matches", value: 2 },
      { name: "titular-player", value: 2 },
      { name: "substitute-player", value: 1 },
      { name: "goals", value: 0 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 0 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 0 },
      { name: "assistance", value: 1 },
      { name: "time", value: 210 },
    ],
  },
  {
    id: "neq2IUNtnFjFLHHBwdbd",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/dp.png?alt=media&token=7824b9b2-b9e4-42eb-a8ee-76f9f77d1148",
    name: "Dani Posilio",
    position: "del",
    stadistics: [
      { name: "total-matches", value: 6 },
      { name: "league-matches", value: 6 },
      { name: "friendly-matches", value: 0 },
      { name: "won-matches", value: 4 },
      { name: "tied-matches", value: 1 },
      { name: "lost-matches", value: 1 },
      { name: "titular-player", value: 3 },
      { name: "substitute-player", value: 3 },
      { name: "goals", value: 4 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 1 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 0 },
      { name: "assistance", value: 5 },
      { name: "time", value: 350 },
    ],
  },
  {
    id: "neq2IUNtnFjFLHHBwdbd",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/jp.png?alt=media&token=4ebdcc68-3c4b-4798-8b7b-89b684f47edb",
    name: "Pozas",
    position: "cen",
    stadistics: [
      { name: "total-matches", value: 6 },
      { name: "league-matches", value: 4 },
      { name: "friendly-matches", value: 2 },
      { name: "won-matches", value: 4 },
      { name: "tied-matches", value: 1 },
      { name: "lost-matches", value: 1 },
      { name: "titular-player", value: 3 },
      { name: "substitute-player", value: 1 },
      { name: "goals", value: 0 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 1 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 0 },
      { name: "assistance", value: 0 },
      { name: "time", value: 290 },
    ],
  },
  {
    id: "neq2IUNtnFjFLHHBwdbd",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/rr.png?alt=media&token=8e99c482-c4e2-426f-aeab-5b0fbc826c76",
    name: "Rober",
    position: "def",
    stadistics: [
      { name: "total-matches", value: 0 },
      { name: "league-matches", value: 0 },
      { name: "friendly-matches", value: 0 },
      { name: "won-matches", value: 0 },
      { name: "tied-matches", value: 0 },
      { name: "lost-matches", value: 0 },
      { name: "titular-player", value: 0 },
      { name: "substitute-player", value: 0 },
      { name: "goals", value: 0 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 0 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 0 },
      { name: "assistance", value: 0 },
      { name: "time", value: 0 },
    ],
  },
  {
    id: "neq2IUNtnFjFLHHBwdbd",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/ds.png?alt=media&token=5a2fdc35-b0c2-4c00-8e27-44c3f8bc671e",
    name: "Dani",
    position: "cen",
    stadistics: [
      { name: "total-matches", value: 3 },
      { name: "league-matches", value: 3 },
      { name: "friendly-matches", value: 0 },
      { name: "won-matches", value: 3 },
      { name: "tied-matches", value: 0 },
      { name: "lost-matches", value: 0 },
      { name: "titular-player", value: 2 },
      { name: "substitute-player", value: 1 },
      { name: "goals", value: 0 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 0 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 0 },
      { name: "assistance", value: 3 },
      { name: "time", value: 200 },
    ],
  },
  {
    id: "neq2IUNtnFjFLHHBwdbd",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/fs.png?alt=media&token=7277e190-0810-4568-8f64-fb721d9729e7",
    name: "Parri",
    position: "del",
    stadistics: [
      { name: "total-matches", value: 5 },
      { name: "league-matches", value: 4 },
      { name: "friendly-matches", value: 1 },
      { name: "won-matches", value: 5 },
      { name: "tied-matches", value: 0 },
      { name: "lost-matches", value: 0 },
      { name: "titular-player", value: 2 },
      { name: "substitute-player", value: 2 },
      { name: "goals", value: 4 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 0 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 0 },
      { name: "assistance", value: 0 },
      { name: "time", value: 215 },
    ],
  },
  {
    id: "neq2IUNtnFjFLHHBwdbd",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/rs.png?alt=media&token=7563105d-d488-4e13-8368-6b31cde16c13",
    name: "Raul",
    position: "cen",
    stadistics: [
      { name: "total-matches", value: 7 },
      { name: "league-matches", value: 4 },
      { name: "friendly-matches", value: 3 },
      { name: "won-matches", value: 3 },
      { name: "tied-matches", value: 2 },
      { name: "lost-matches", value: 2 },
      { name: "titular-player", value: 4 },
      { name: "substitute-player", value: 0 },
      { name: "goals", value: 1 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 1 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 0 },
      { name: "assistance", value: 0 },
      { name: "time", value: 240 },
    ],
  },
  {
    id: "neq2IUNtnFjFLHHBwdbd",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/js.png?alt=media&token=6ae2c245-b2fe-43d4-a24b-ef7418121963",
    name: "Chavino",
    position: "def",
    stadistics: [
      { name: "total-matches", value: 8 },
      { name: "league-matches", value: 6 },
      { name: "friendly-matches", value: 2 },
      { name: "won-matches", value: 5 },
      { name: "tied-matches", value: 2 },
      { name: "lost-matches", value: 1 },
      { name: "titular-player", value: 1 },
      { name: "substitute-player", value: 5 },
      { name: "goals", value: 0 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 0 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 0 },
      { name: "assistance", value: 0 },
      { name: "time", value: 240 },
    ],
  },
  {
    id: "neq2IUNtnFjFLHHBwdbd",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/xs.png?alt=media&token=903bfa9d-653b-4b24-9484-82817e103f80",
    name: "Xavi",
    position: "def",
    stadistics: [
      { name: "total-matches", value: 5 },
      { name: "league-matches", value: 4 },
      { name: "friendly-matches", value: 1 },
      { name: "won-matches", value: 2 },
      { name: "tied-matches", value: 1 },
      { name: "lost-matches", value: 2 },
      { name: "titular-player", value: 0 },
      { name: "substitute-player", value: 0 },
      { name: "goals", value: 0 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 0 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 0 },
      { name: "assistance", value: 1 },
      { name: "time", value: 205 },
    ],
  },
  {
    id: "neq2IUNtnFjFLHHBwdbd",
    image:
      "https://firebasestorage.googleapis.com/v0/b/mallorca-pwa.appspot.com/o/mu.png?alt=media&token=17476e9d-66a3-44be-9b47-b79b31b5a79a",
    name: "Manu",
    position: "def",
    stadistics: [
      { name: "total-matches", value: 8 },
      { name: "league-matches", value: 6 },
      { name: "friendly-matches", value: 2 },
      { name: "won-matches", value: 5 },
      { name: "tied-matches", value: 2 },
      { name: "lost-matches", value: 1 },
      { name: "titular-player", value: 5 },
      { name: "substitute-player", value: 1 },
      { name: "goals", value: 1 },
      { name: "shot-penalty", value: 0 },
      { name: "goals-penalty", value: 0 },
      { name: "penalties-against", value: 0 },
      { name: "penalties-saved", value: 0 },
      { name: "yellow-cards", value: 0 },
      { name: "red-cards", value: 0 },
      { name: "goal-against", value: 0 },
      { name: "assistance", value: 0 },
      { name: "time", value: 380 },
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
