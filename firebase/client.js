import { initializeApp } from 'firebase/app';
import { getAuth ,GithubAuthProvider, signInWithPopup } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCupr2YXLfJhFzivVOTDQyjuvPIKHX30Y",
    authDomain: "devter-d2a73.firebaseapp.com",
    projectId: "devter-d2a73",
    storageBucket: "devter-d2a73.appspot.com",
    messagingSenderId: "551346305146",
    appId: "1:551346305146:web:3f31c8b15aab47d0b123c3",
    measurementId: "G-7SLGBRX6TR"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const mapUserFromFirebaseAuthToUser = (user) =>{
    const {photoUrl, email, displayName} = user
    return({avatar: photoUrl, name: displayName, email: email })
}

export const onAuthStateChanged = (onChange) =>{
    return onAuthStateChanged(user =>{
        const normalizedUser = mapUserFromFirebaseAuthToUser(user)
        onChange(normalizedUser)
    })

}



export const loginWithGithub = () => {
    const githubProvider = new GithubAuthProvider()
    return signInWithPopup(auth, githubProvider)
        .then(mapUserFromFirebaseAuthToUser)

}