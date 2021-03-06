import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA4BJlVisiLgkPhYXJY7Pw8IIVXfKLX9ew",
  authDomain: "e-commerce-be00f.firebaseapp.com",
  databaseURL: "https://e-commerce-be00f.firebaseio.com",
  projectId: "e-commerce-be00f",
  storageBucket: "e-commerce-be00f.appspot.com",
  messagingSenderId: "529845543185",
  appId: "1:529845543185:web:59d51c99d31262a6f6acb0",
  measurementId: "G-47HVTJN01J"
};


firebase.initializeApp(config);

// Sign In / Sign Up for USERS
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

// Automatically load all required data into DB 
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

// Format Data-ready to work with DB Objs format
export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

// Check for users session ==> Method -> Sagas-Oriented
export const getCurrentUser = () => {
  return new Promise(
    ( resolve , reject ) => {
      const unsubscribe = auth.onAuthStateChanged( userAuth => {
        //Get user and cut off listener
        unsubscribe();
        // return current user on session
        resolve( userAuth )
      }, 
      reject )
    }
  )
}

// FIREBASE TOOLS
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Sign In *1
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
// Sign In *2
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);



export default firebase;
