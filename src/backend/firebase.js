import {initializeApp} from 'firebase/app'
import {getFirestore, doc, setDoc, getDoc, writeBatch, query, collection, getDocs} from 'firebase/firestore';
import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAanqTA6Tq3DPLB1Y7bSEy1LKvNI5e6h0s",
    authDomain: "yourswatch-e2ad1.firebaseapp.com",
    projectId: "yourswatch-e2ad1",
    storageBucket: "yourswatch-e2ad1.appspot.com",
    messagingSenderId: "572639982124",
    appId: "1:572639982124:web:1a86464ab7ba9104c0d789",
    measurementId: "G-WRDRGJ1GJ3"
  };

  const app = initializeApp(firebaseConfig);



const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt:"select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = ()=>signInWithPopup(auth, provider);



  const database = getFirestore();

  export const setNewProduct = async (productkey, productdata)=>{

    const collectionRef = collection(database, productkey)

    const batch = writeBatch(database);

    productdata.forEach((newProduct)=>{

      const docRef = doc(collectionRef, newProduct.title.toLowerCase());
      batch.set(docRef,newProduct)
    })
    await batch.commit()

  }

  export const setourProducts = async(categorieKey, categorieData)=>{

    const collectionRef = collection(database,categorieKey);
    const batch = writeBatch(database);

    categorieData.forEach((datas)=>{

      const docRef = doc(collectionRef, datas.title.toLowerCase());
      batch.set(docRef,datas)

    })
    await batch.commit();

  }


  export const getOurProducts = async()=>{

    const collectionRef = collection(database, "Watches");
    const q = query(collectionRef);
    const dataSnapshot = await getDocs(q);

    return dataSnapshot.docs.map((docSnapshot)=>docSnapshot.data())

  }

  



  export const grabNewProduct = async()=>{

    const collectionRef = collection(database, 'newproduct');
    const q = query(collectionRef);
    const latestMap = await getDocs(q);

    return latestMap.docs.map((docSnapshot)=>docSnapshot.data())
  
  }







  