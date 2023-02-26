import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCipS1TLMcgrXs2AZnkBKmducQvjQ0R3dE",
	authDomain: "clone-2-63590.firebaseapp.com",
	projectId: "clone-2-63590",
	storageBucket: "clone-2-63590.appspot.com",
	messagingSenderId: "482296582651",
	appId: "1:482296582651:web:aa390bab48164c28f73b5e",
	measurementId: "G-J787987Y67",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
