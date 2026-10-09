# Estudos de React

Projeto criado para praticar os primeiros conceitos de React. Reúne duas aplicações em um só lugar: um **Gerenciador de Tarefas** e uma **Calculadora**.

🔗 **Demo:** https://estudos-de-react-nine-navy.vercel.app

## Funcionalidades

### Gerenciador de Tarefas
- Adicionar tarefas com título e descrição (com validação de campos vazios)
- Marcar tarefas como concluídas (o título fica riscado)
- Excluir tarefas
- Ver os detalhes de uma tarefa em uma página própria
- As tarefas ficam salvas no `localStorage`, então não se perdem ao recarregar a página

### Calculadora
- Operações de soma, subtração, multiplicação, divisão e porcentagem
- Vírgula como separador decimal
- Botões para apagar o último caractere (⌫) e limpar tudo (AC)
- Campo editável, que também aceita digitação direta
- Mensagem de erro caso a expressão seja inválida

## Conceitos praticados

- Componentes e props
- Estado com `useState`
- Efeitos com `useEffect` (persistência no `localStorage`)
- Navegação entre páginas com React Router (incluindo `useNavigate` e `useSearchParams`)
- Requisição a uma API com `fetch` e `async/await` (a chamada está pronta em `App.jsx`, porém comentada)
- Estilização com Tailwind CSS

## Tecnologias

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [mathjs](https://mathjs.org/): cálculo das expressões da calculadora
- [lucide-react](https://lucide.dev/): ícones
- [uuid](https://github.com/uuidjs/uuid): geração de ids únicos para as tarefas
- [Oxlint](https://oxc.rs/docs/guide/usage/linter): linter

## Estrutura do projeto

```
src/
├── components/
│   ├── AddTask.jsx            # formulário para adicionar tarefa
│   ├── Button.jsx             # botão genérico
│   ├── ButtonCalculator.jsx   # botão da calculadora
│   ├── Input.jsx              # campo de texto reutilizável
│   ├── Tasks.jsx              # lista de tarefas
│   └── Title.jsx              # título das páginas
├── pages/
│   ├── Calculator.jsx         # página da calculadora
│   └── TaskPage.jsx           # detalhes de uma tarefa
├── App.jsx                    # página principal (gerenciador de tarefas)
├── main.jsx                   # ponto de entrada e rotas
└── index.css                  # estilos globais (Tailwind)
```

## Como rodar localmente

Pré-requisito: uma versão recente do [Node.js](https://nodejs.org/).

```bash
# clonar o repositório
git clone https://github.com/tiagoCabralS/estudos-de-react.git

# entrar na pasta
cd estudos-de-react

# instalar as dependências
npm install

# iniciar o servidor de desenvolvimento
npm run dev
```

Depois, abra o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção na pasta `dist` |
| `npm run preview` | Visualiza localmente a versão de produção |
| `npm run lint` | Executa o linter (Oxlint) |

## Próximos passos

- [ ] Editar tarefas existentes
- [ ] Ativar e tratar a busca de tarefas via API
- [ ] Melhorar a responsividade
- [ ] Adicionar testes

## Autor

Feito por **Tiago Cabral** como parte dos meus estudos de React.

[GitHub](https://github.com/tiagoCabralS)
