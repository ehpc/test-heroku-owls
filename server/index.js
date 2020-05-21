import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.resolve('../client/build/')));

app.get('/api/test', (req, res) => res.send('Wasssssuuup'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('../client/build/index.html'));
});

app.listen(process.env.PORT || 3001);
