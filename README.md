# Boas-vindas ao repositório do projeto API de Blogs!

**Neste projeto, foi desenvolvido uma API e um banco de dados para a produção de conteúdo em um blog!**

A aplicação foi desenvolvida em Node.js utilizando o pacote Sequelize para realizar as operações de CRUD em posts. A API segue os princípios do REST.

Foram implementados endpoints conectados ao banco de dados para realizar as seguintes funcionalidades:

1. Criação de migrations para as tabelas: users, categories, blog_posts, e posts_categories.

2. Criação do modelo User em `src/models/User.js` com as propriedades corretas.

3. Implementação do endpoint POST `/login` para permitir a autenticação de usuários.

4. Implementação do endpoint POST `/user` para adicionar um novo usuário ao banco de dados.

5. Implementação do endpoint GET `/user` para listar todos os usuários no banco de dados.

6. Implementação do endpoint GET `/user/:id` para buscar um usuário pelo ID no banco de dados.

7. Criação do modelo Category em `src/models/Category.js` com as propriedades corretas.

8. Implementação do endpoint POST `/categories` para adicionar novas categorias no banco de dados.

9. Implementação do endpoint GET `/categories` para listar todas as categorias no banco de dados.

10. Criação do modelo BlogPost em `src/models/BlogPost.js` com as propriedades e associações corretas.

11. Criação do modelo PostCategory em `src/models/PostCategory.js` com as propriedades e associações corretas.

12. Implementação do endpoint POST `/post` para adicionar novos posts no blog, vinculados a categorias.

13. Implementação do endpoint GET `/post` para listar todos os posts, incluindo informações de usuário e categorias.

14. Implementação do endpoint GET `/post/:id` para buscar um post pelo ID no banco de dados.

15. Implementação do endpoint PUT `/post/:id` para atualizar os atributos de um post, mantendo a restrição de propriedade do usuário.

16. Implementação do endpoint DELETE `/post/:id` para excluir um post do banco de dados.

17. Implementação do endpoint DELETE `/user/me` para excluir o usuário autenticado.

18. Implementação do endpoint GET `/post/search?q=:searchTerm` para buscar posts com base em um termo de pesquisa.

## Tecnologias Utilizadas

- Node.js
- Sequelize
- REST
- Postgres
