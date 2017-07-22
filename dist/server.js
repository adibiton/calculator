const express = require('express');
const serveStatic = require('serve-static');


const app = express();
app.use(serveStatic(__dirname));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`App is lisenting on port ${PORT}`);				
});

