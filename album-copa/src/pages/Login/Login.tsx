import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import "./Login.css"
import { auth, googleProvider, db } from '../../services/firebase';
import {
  doc,
  getDoc,
  setDoc,
  collection
} from "firebase/firestore";

function Login() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleGoogleLogin() {
    try {
        setLoading(true);
        const login = await signInWithPopup(auth, googleProvider);
        const userRef = doc(db, "users", login.user.uid);
        const user = await getDoc(userRef);

        if (!user.exists()) {

            await setDoc(userRef, {
                uid: login.user.uid,
                email: login.user.email,
            });

            console.log("Usuário criado!");
        }
        navigate('/home', {
            replace: true
        });

    } catch (error) {
      console.log(error);
    } finally {

      setLoading(false);
    }
  }

  return (
    <div className='login-container'>
        <div className='login-content'>
            <h1>World Album</h1>
            <p>Copa do Mundo 2026 - EUA - MEXICO - CANADA</p>
            <button className='google-button'
                onClick={handleGoogleLogin}
                disabled={loading}
            >
                <img
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg'
                    alt='Google'
                />

                {
                    loading
                    ? 'Entrando...'
                    : 'Entrar com sua conta Google'
                }
            </button>
        </div>
    </div>
  );
}

export default Login;