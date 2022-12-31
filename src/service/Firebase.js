import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

let firebaseConfig = {
    apiKey: "AIzaSyD5PgQxWi5LPBLP9ErwjXG9U9gM_3BiJZQ",
    authDomain: "kxafreelancer-e125a.firebaseapp.com",
    projectId: "kxafreelancer-e125a",
    storageBucket: "kxafreelancer-e125a.appspot.com",
    messagingSenderId: "925756198215",
    appId: "1:925756198215:web:e27568a61e11791f499062",
    measurementId: "G-R0Z3946TGE",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
