const Express = require('express');
const app = new Express();

app.use(Express.json());
app.use(Express.urlencoded());

app.use(require('./src/routes'));

app.listen(3000, () => {
    console.log('El gatito nació.')
})