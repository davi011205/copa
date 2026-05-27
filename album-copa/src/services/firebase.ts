import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import type { Team } from "../models/Team";
import { 
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID
} from "../config/env";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export {db, auth, googleProvider}


export async function getAllTeams() {
  try {
    const selecoesRef = collection(db, "selecoes");
    const selecoes = await getDocs(selecoesRef);
    
    const teams: Team[] = [];

    selecoes.docs.map((doc) => {
      teams.push({
        id: doc.id,
        ...doc.data()
      } as Team);
    });
    return teams;    
  } catch(error) {
    console.error("Erro ao buscar selecoes:", error);
    return [];
  }
}

export async function getAllPlayers() {
  try {
    const selecoesRef = collection(db, "selecoes");
    const selecoes = await getDocs(selecoesRef);

    const players = [];

    for (const selecaoDoc of selecoes.docs) {
      //selecoes/selecao/jogadores
      const jogadoresRef = collection(
        db,
        "selecoes",
        selecaoDoc.id,
        "jogadores"
      );

      const jogadores = await getDocs(jogadoresRef);

      const jogadoresDoc = jogadores.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      players.push(...jogadoresDoc);
    }
    return players;
  } catch (error) {
    console.error("Erro ao buscar jogadores:", error);
    return [];
  }
}

export async function getPlayersByTeam(id: string) {
  try{
    const jogadoresRef = collection(db, "selecoes", id, "jogadores");
    const jogadores = await getDocs(jogadoresRef);
    const players = [];
    const jogadoresDoc = jogadores.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  
    players.push(...jogadoresDoc);
    return players;
  } catch(error) {
    console.log("nao foi possivel carregar os jogadores dessa selecao", error);
    return [];
  }
}