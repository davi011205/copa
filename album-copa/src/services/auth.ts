import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();

export async function logout() {
  try {
    await signOut(auth);
    localStorage.removeItem("user");

    console.log("Usuário deslogado");
  } catch (error) {
    console.error("Erro ao sair:", error);
  }
}