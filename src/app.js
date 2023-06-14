const express = require('express');
const { loginRouter, userRouter, categoriesRouter, blogPostRouter } = require('./Routes');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/post', blogPostRouter);
app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
