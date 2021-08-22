import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAE5mxeVRsCRNq1V66DiNPuFpqk0YLMzvQ",
  authDomain: "netflix-clone-71e40.firebaseapp.com",
  projectId: "netflix-clone-71e40",
  storageBucket: "netflix-clone-71e40.appspot.com",
  messagingSenderId: "174833233616",
  appId: "1:174833233616:web:584959ceec37f49ebdb8d5",
};

const firebase = Firebase.initializeApp(config);

// run the next line once
// seedDatabase(firebase);

export { firebase };
