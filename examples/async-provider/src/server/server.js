import Express from 'express';

const PORT = 3000;
const app = Express();

app.use('/dist', Express.static('dist', { maxAge: '1d' }));

app.use((req, res) => {
  const html = `<!DOCTYPE html>
                    <html>
                      <head>
                        <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        <title>ld-react example</title>
                      </head>
                      <body>
                        <div id="reactDiv"></div>
                        <script type="application/javascript" src="http://localhost:3002/dist/bundle.js"></script>
                      </body>
                    </html>`;

  res.end(html);
});

export default app.listen(PORT, () => {
  console.log(`Example app listening at ${PORT}...`);
});
