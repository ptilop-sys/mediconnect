import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { computed, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";

initializeApp({
  apiKey: <string>import.meta.env.VITE_APIKEY,
  authDomain: <string>import.meta.env.VITE_AUTH_DOMAIN,
  projectId: <string>import.meta.env.VITE_PROJECT_ID,
  storageBucket: <string>import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: <string>import.meta.env.VITE_MSG_SENDER_ID,
  appId: <string>import.meta.env.VITE_APPID,
  measurementId: <string>import.meta.env.VITE_MEASUREMENT_ID,
});

export const firestore = getFirestore();

const auth = getAuth();
const router = useRouter();

export function useAuth() {
  const user = ref();
  const unsubscribe = onAuthStateChanged(auth, (_user) => (user.value = _user));
  onUnmounted(unsubscribe);

  const isLogin = computed(() => user.value !== null);

  const signIn = async () => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider);
  };

  const signOut = () => auth.signOut();

  return { user, isLogin, signIn, signOut };
}

const messageQuery = query(
  collection(firestore, "messages"),
  orderBy("createdAt", "desc"),
  limit(100)
);

export function useChat() {
  const messages = ref();

  const unsubscribe = onSnapshot(messageQuery, (snapshot) => {
    messages.value = snapshot.docs
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      .reverse();
  });

  onUnmounted(unsubscribe);

  const { user, isLogin } = useAuth();
  const sendMessage = (text: string) => {
    if (!isLogin.value) return;

    const { photoURL, uid, displayName } = user.value;

    addDoc(collection(firestore, "messages"), {
      userName: displayName,
      userId: uid,
      avatarURL: photoURL,
      content: text,
      createdAt: serverTimestamp(),
    });
  };

  return { messages, sendMessage };
}
