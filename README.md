<h1 align="center">💊 API Farmácia</h1>

<p align="center">
  <em>API backend com NestJS para gerenciamento de categorias de uma farmácia</em>
</p>

<p align="center">
  <img alt="NestJS" src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white"/>
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img alt="SQLite" src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white"/>
  <img alt="TypeORM" src="https://img.shields.io/badge/TypeORM-FE0803?style=for-the-badge&logoColor=white"/>
  <img alt="Swagger" src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black"/>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?style=for-the-badge"/>
</p>

---

## 📖 Sobre o Projeto

API desenvolvida com **NestJS** para gerenciamento de categorias de uma farmácia, permitindo realizar operações completas de CRUD de forma organizada e eficiente.

---

## ✨ Funcionalidades

| Recurso | Descrição |
|---------|-----------|
| ➕ **Criar** | Cadastrar nova categoria |
| 📋 **Listar** | Listar todas as categorias |
| 🔍 **Buscar por ID** | Encontrar categoria pelo identificador |
| 🔤 **Buscar por nome** | Encontrar categoria pelo nome |
| ✏️ **Atualizar** | Editar dados de uma categoria |
| 🗑️ **Deletar** | Remover uma categoria do sistema |

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|------------|-----------|
| **Node.js** | Ambiente de execução |
| **NestJS** | Framework backend |
| **TypeScript** | Linguagem de desenvolvimento |
| **TypeORM** | Integração com o banco de dados |
| **SQLite** | Banco de dados |
| **Swagger** | Documentação interativa da API |

---

## 🌐 Documentação com Swagger

Acesse a documentação interativa da API:

🔗 **[Teste a API](https://projeto-final-bloco-02-1-12bi.onrender.com/swagger#/)**

> 🚀 API hospedada online e pronta para testes.

---

## 🔗 Endpoints da API

### 📦 Categoria

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/categoria` | Criar categoria |
| `GET` | `/categoria` | Listar todas |
| `GET` | `/categoria/:id` | Buscar por ID |
| `GET` | `/categoria/nome/:nome` | Buscar por nome |
| `PUT` | `/categoria/:id` | Atualizar categoria |
| `DELETE` | `/categoria/:id` | Deletar categoria |

### Exemplo de payload

```json
{
  "nome": "Medicamentos",
  "descricao": "Remédios e vitaminas em geral"
}
```

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js instalado
- npm

### Instalação e execução

```bash
# Clone o repositório
git clone https://github.com/lohannab/api-farmacia.git

# Acesse a pasta do projeto
cd api-farmacia

# Instale as dependências
npm install

# Rode em modo de desenvolvimento
npm run start:dev
```

> A API estará disponível em `http://localhost:3000`  
> A documentação Swagger em `http://localhost:3000/swagger`

---

## 👩‍💻 Autora

**Lohanna B**  
Feito com 💜 e muito ☕

---

## 📄 Licença

Este projeto está sob a licença **MIT**.
