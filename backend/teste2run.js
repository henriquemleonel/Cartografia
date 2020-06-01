const multer = require("./multer-config.js")('algumlugar', 2)
const app = require('express')()
const express = require('express')
app.use(express.static('public'))
app.listen(3500, () => {
    console.log('backend executando')
});

app.get('/nova-imagem', (req, res, next) => {
    res.send( 
        `<html>
                <head> 
                    <title> Nova imagem </title>
                </head>
                </body>
                    <!-- O enctype é de extrema importância! Não funciona sem! -->
                    <form action="/nova-imagem"  method="POST" enctype="multipart/form-data">
                        <!-- O NAME do input deve ser exatamente igual ao especificado na rota -->
                        <input type='number' name='id'>
                        <input type="file" name="image">
                        <button type="submit"> Enviar </button>
                    </form>
                </body>
            </html>`
    )
})

app.post('/nova-imagem', multer.single('image'), (req, res, next) => {
    console.log(req.body.id)
    // Se houve sucesso no armazenamento
    if (req.file) {
        // Vamos imprimir na tela o objeto com os dados do arquivo armazenado
        return res.send(req.file);
    }
    // Se o objeto req.file for undefined, ou seja, não houve sucesso, vamos imprimir um erro!
    return res.send('Houve erro no upload!');
}); 