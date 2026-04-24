import { firebaseApp } from "./firebase.js";
import { getFirestore } from "firebase/firestore";

export const db = getFirestore(firebaseApp);
