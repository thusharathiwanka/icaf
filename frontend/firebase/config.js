import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: "AIzaSyAOZR2eg0xPfo_wiRsfYL8lNKtY70hL5UU",
	authDomain: "icaf-5ce6c.firebaseapp.com",
	projectId: "icaf-5ce6c",
	storageBucket: "icaf-5ce6c.appspot.com",
	messagingSenderId: "837999026487",
	appId: "1:837999026487:web:266eb1fcbd55d1a8727ab2",
	measurementId: "G-3NW532Y7Y5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const appStorage = firebase.storage();
const appFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { appFirestore, appStorage, timestamp };
