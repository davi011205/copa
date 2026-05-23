import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
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
export const db = getFirestore(app);
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