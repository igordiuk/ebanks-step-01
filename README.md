# EBANKS API – Teste Prático

Este projeto é uma API RESTful simples desenvolvida como parte de um **Teste Prático para o Ebanks**. O objetivo é simular operações bancárias básicas (depósito, saque, transferência e consulta de saldo) utilizando armazenamento em memória.

## Tecnologias Utilizadas

- **Node.js**  
  Plataforma de execução para JavaScript no backend, utilizada para criar servidores de alta performance.

- **Express.js**  
  Framework minimalista para Node.js, responsável pelo roteamento, parsing de JSON e gerenciamento das requisições HTTP.

- **Nodemon**  
  Ferramenta de desenvolvimento que reinicia automaticamente o servidor ao detectar alterações nos arquivos.

- **dotenv**  
  (Opcional) Utilizado para gerenciar variáveis de ambiente, como a porta do servidor, através do arquivo `.env`.

## Estrutura do Projeto

```
.env
.gitignore
package.json
src/
  app.js
  server.js
  controllers/
    accountController.js
  repositories/
    acountRepository.js
  routes/
    accountRoutes.js
  services/
    accountService.js
```

- **src/app.js**  
  Configuração principal do Express e registro das rotas.

- **src/server.js**  
  Inicialização do servidor e definição da porta.

- **src/controllers/accountController.js**  
  Camada responsável por receber as requisições, tratar dados e retornar respostas.

- **src/services/accountService.js**  
  Lógica de negócio das operações bancárias.

- **src/repositories/acountRepository.js**  
  Simulação de um banco de dados em memória para armazenar as contas.

- **src/routes/accountRoutes.js**  
  Definição das rotas da API.

## Funcionalidades

- **Reset do estado da aplicação**  
  `POST /reset`  
  Limpa todas as contas e retorna o estado inicial.

- **Consulta de saldo**  
  `GET /balance?account_id={id}`  
  Retorna o saldo da conta informada.

- **Eventos (depósito, saque, transferência)**  
  `POST /event`  
  Recebe um JSON com o tipo de operação e os dados necessários.

## Como Executar

1. Instale as dependências:
   ```sh
   npm install
   ```

2. Inicie o servidor:
   ```sh
   npm start
   ```
   Ou, para desenvolvimento com recarregamento automático:
   ```sh
   npm run dev
   ```

3. Acesse a API em `http://localhost:3000`

## Exemplo de Requisições

- **Depósito**
  ```json
  POST /event
  {
    "type": "deposit",
    "destination": "100",
    "amount": 10
  }
  ```

- **Saque**
  ```json
  POST /event
  {
    "type": "withdraw",
    "origin": "100",
    "amount": 5
  }
  ```

- **Transferência**
  ```json
  POST /event
  {
    "type": "transfer",
    "origin": "100",
    "destination": "300",
    "amount": 15
  }
  ```

## Observações

- O armazenamento é feito em memória, portanto todos os dados são perdidos ao reiniciar o servidor.
- O projeto foi desenvolvido para fins de avaliação técnica e não deve ser utilizado em produção.

---

Desenvolvido como parte do **Teste Prático para o