import express from 'express';

const app = express();
const port = 3400;

app.get('/', (req: any, res: { send: (arg0: string) => void }) => {
    res.send('Hello World5!');
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
