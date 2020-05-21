import express from 'express';

const app = express();

app.get('/api/test', (req, res) => res.send('Wasssssuuup'));

app.listen(process.env.PORT || 3001);
