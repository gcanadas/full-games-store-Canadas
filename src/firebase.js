import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, query, collection, getDoc, where, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMGVmqfq2w5AruBbYvmVuqG-Ri_ITq5aE",
  authDomain: "full-games-store.firebaseapp.com",
  projectId: "full-games-store",
  storageBucket: "full-games-store.appspot.com",
  messagingSenderId: "714585064983",
  appId: "1:714585064983:web:a8abefc97addfa4e873e52"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const getProducts= async (nameCollection)  => {
    const colRef = collection(db, nameCollection);
    const result = await getDocs(query(colRef));
    return result.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}

export const getProductsByCategory = async (category, nameCollection) => {
    const colRef = collection(db, nameCollection);
    const result = await getDocs(query(colRef, where("type", "==", category)));
    return result.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}

export const getProductsById = async (id, nameCollection) => {
    const docRef = doc(db, nameCollection, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      
    return {...docSnap.data(), id: docSnap.id};
}