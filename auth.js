import { app } from "./firebase.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

window.loginGoogle = async function () {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    window.location.href = "perfil.html";
    console.log("Usuário logado:", user);
  } catch (error) {
    console.error("Erro no login com Google:", error);
    alert(`Erro ao entrar com Google: ${error.code}`);
  }
};

window.logoutGoogle = async function () {
  try {
    await signOut(auth);
    alert("Você saiu da conta.");
  } catch (error) {
    console.error("Erro ao sair:", error);
    alert(`Erro ao sair: ${error.code}`);
  }
};

onAuthStateChanged(auth, (user) => {
  const botoes = document.querySelectorAll(".google-btn");

  if (user) {
    botoes.forEach((botao) => {
      botao.innerHTML = `
        <img
          src="${user.photoURL || ''}"
          alt="Foto"
          style="width:22px;height:22px;border-radius:50%;object-fit:cover;"
        >
        ${user.displayName || "Usuário"}
      `;
      botao.onclick = () => {
  window.location.href = "perfil.html";
};
      botao.title = "Clique para sair";
    });
  } else {
    botoes.forEach((botao) => {
      botao.innerHTML = `<i class="fab fa-google"></i> Entrar com Google`;
      botao.onclick = window.loginGoogle;
      botao.title = "Entrar com Google";
    });
  }
});