import { firebase, Firestore } from './services';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const data = {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      phone: user.phoneNumber,
    };
    handleLoggedIn(data);
  }
});

async function handleLoggedIn(userData) {
   const { uid } = userData;

  const results = await Firestore.getUserDoc(uid);
  console.log(results);
}

export default () => {
  const user = firebase.auth().currentUser;
  if (!user) {
    console.log('no user');
    firebase.auth().signInWithEmailAndPassword('emkolar@gmail.com', 'fdsafdsa');
  }
};
