const app = require('./app');

const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => res.status(200).send('OK')); // healthcheck simples

app.listen(PORT, () => {
	console.log(`🚀 Server running on port ${PORT}`);
});