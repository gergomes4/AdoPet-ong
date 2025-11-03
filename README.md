# 🐾 AdoPet ONG

## Projeto Acadêmico – Análise e Desenvolvimento de Sistemas

**Entrega IV – Versionamento, Acessibilidade e Deploy**

---

### 📘 Descrição do Projeto

O **AdoPet ONG** é uma aplicação web desenvolvida para conectar ONGs de adoção de animais com pessoas interessadas em adotar ou se voluntariar. O sistema foi construído com foco em **responsividade, acessibilidade e interatividade**, utilizando **HTML5, CSS3 e JavaScript** puro.

O objetivo é oferecer uma interface intuitiva, moderna e inclusiva, simulando o funcionamento real de uma plataforma de adoção.

---

### 💻 Tecnologias Utilizadas

* **HTML5** → estrutura semântica e acessível
* **CSS3** → layout responsivo e modo escuro/claro
* **JavaScript (DOM e LocalStorage)** → interatividade, validações e SPA
* **Git e GitHub** → versionamento e deploy
* **WCAG 2.1** → acessibilidade web
* **GitHub Pages** → ambiente de produção

---

### 🧱 Estrutura do Projeto

```
adopet-ong/
│
├── index.html              → Página inicial
├── sobre.html              → Página sobre nós
├── cadastro.html           → Página de cadastro de voluntários
│
├── css/
│   ├── estilo.css          → Estilo principal
│   ├── responsivo.css      → Ajustes mobile
│
├── js/
│   ├── script.js           → SPA, modo escuro e eventos globais
│   ├── script-sobre.js     → Interatividade da página "Sobre Nós"
│   ├── script-cadastro.js  → Validação e alertas de formulário
│
├── img/                    → Imagens otimizadas
│
└── README.md               → Documentação técnica
```

---

### 🧩 Funcionalidades Implementadas

✅ Sistema de **modo escuro e claro** com persistência de tema
✅ **SPA (Single Page Application)** com manipulação do DOM
✅ **Validação de formulário** com mensagens personalizadas
✅ **Verificação automática de idade (18+)**
✅ **Aviso visual estilizado** de sucesso após o cadastro
✅ **Responsividade mobile-first**
✅ **Mensagens de feedback interativas**
✅ **Acessibilidade conforme WCAG 2.1**

---

### ♿ Acessibilidade (WCAG 2.1)

O site segue as diretrizes da **WCAG 2.1**, garantindo acesso a todos os usuários.

| Critério WCAG                          | Implementação no Projeto                                |
| -------------------------------------- | ------------------------------------------------------- |
| **1.1.1 Conteúdo não textual**         | Todas as imagens possuem `alt` descritivo.              |
| **1.3.1 Informação e relacionamentos** | Uso de `fieldset`, `legend`, `label for`, `aria-label`. |
| **1.4.3 Contraste mínimo**             | Fundo preto e textos brancos no modo escuro.            |
| **2.1.1 Acesso por teclado**           | Todos os links e botões são acessíveis via TAB.         |
| **2.4.4 Texto de link descritivo**     | Links descrevem claramente o destino.                   |
| **3.3.1 Identificação de erros**       | Validação de formulário com mensagens claras.           |
| **3.3.3 Sugestões de correção**        | Mensagem de alerta para idade inferior a 18 anos.       |

🔎 **Testado com**:

* Google Lighthouse (Acessibility score: ≥ 95%)
* W3C Validator (HTML e CSS válidos)

---

### ⚙️ Boas Práticas e Otimização

* Código sem redundâncias ou comentários desnecessários
* Imagens otimizadas (`.jpg` e `.webp`)
* Arquivos JS e CSS externos
* Layout testado em diferentes resoluções (mobile, tablet e desktop)
* Componentes reutilizáveis

---

### 🚀 Deploy

O projeto foi publicado em ambiente de produção via **GitHub Pages**.

🔗 **Acesse o site:**
👉 https://gergomes4.github.io/AdoPet-ong/

---

### 🧠 Como Executar Localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/seuusuario/adopet-ong.git
   ```
2. Acesse a pasta:

   ```bash
   cd adopet-ong
   ```
3. Abra o arquivo `index.html` no navegador.

---

### 🪄 Comandos Git Utilizados

```bash
git init
git add .
git commit -m "primeiro commit - estrutura inicial"
git branch -M main
git remote add origin https://github.com/seuusuario/adopet-ong.git
git push -u origin main
```

---

### 👨‍💻 Autor

**Gerdean Gomes**
Curso: **Análise e Desenvolvimento de Sistemas**
Instituição: **Cruzeiro do Sul Virtual**
Ano: **2025**
