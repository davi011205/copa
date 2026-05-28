# ⚽ Álbum da Copa
---

# 🚀 Tecnologias utilizadas

* React
* TypeScript
* Vite
* Firebase
* React Router DOM
* CSS

---

# 📦 Como rodar o projeto localmente

## 1. Clone o repositório

```bash
git clone https://github.com/davi011205/copa.git
```

Entre na pasta do projeto:

```bash
cd album-copa
```

---

## 2. Instale as dependências

Utilize o npm para instalar todas as dependências:

```bash
npm install
```

---

# 🔥 Configuração do Firebase

Crie um arquivo chamado `.env` na raiz do projeto.

Adicione as variáveis do Firebase:

```env
VITE_API_KEY=SuaApiKey
VITE_AUTH_DOMAIN=SeuAuthDomain
VITE_PROJECT_ID=SeuProjectId
VITE_STORAGE_BUCKET=SeuStorageBucket
VITE_MESSAGING_SENDER_ID=SeuMessagingSenderId
VITE_APP_ID=SeuAppId
```

⚠️ Como o projeto utiliza Vite, todas as variáveis de ambiente precisam começar com `VITE_`.

---

# ▶️ Executando o projeto

Após instalar as dependências e configurar o `.env`, execute:

```bash
npm run dev
```

O terminal mostrará algo parecido com:

```bash
Local: http://localhost:5173/
```

Abra esse endereço no navegador.

---

# 🏗️ Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

Os arquivos finais serão gerados na pasta:

```bash
/dist
```

---

# 🌐 Deploy no Render

O projeto está configurado para funcionar corretamente no Render, à cada commit o próprio site refaz o deploy automaticamente.
Acesse o site no ar através do link: https://world-cup-za6l.onrender.com



---

# 🛠️ Scripts disponíveis

```bash
npm run dev       # inicia o projeto
npm run build     # gera build de produção
npm run preview   # visualiza a build localmente
```

---

# 📌 Observações

* Certifique-se de estar utilizando uma versão recente do Node.js.
* Recomenda-se utilizar o VS Code.
---
