const multer = require('multer');

// Vamos expotar nosso módulo multer, o qual vamos executar passando as nossas configurações em um objeto.
module.exports = (onde) => {
    let config = multer({

        // Como deve ser feito o armazenamento dos arquivos?
        storage: multer.diskStorage({

            // Qual deve ser o destino deles?
            destination: (req, file, cb) => {

                // Setamos o destino como segundo paramêtro do callback
                cb(null, './img/' + onde);
            },

            // E como devem se chamar?
            filename: (req, file, cb) => {

                // Setamos o nome do arquivo que vai ser salvado no segundo paramêtro
                // Apenas concatenei a data atual com o nome original do arquivo, que a biblioteca nos disponibiliza.
                cb(null, Date.now().toString() + "-" + onde);

            }

        }), // FIM DA CONFIGURAÇÃO DE ARMAZENAMENTO
        fileFilter: (req, file, cb) => {
            // Procurando o formato do arquivo em um array com formatos aceitos
            // A função vai testar se algum dos formatos aceitos do ARRAY é igual ao formato do arquivo.
            const isAccepted = ['image/png', 'image/jpg', 'image/jpeg'].find(formatoAceito => formatoAceito == file.mimetype);

            // O formato do arquivo bateu com algum aceito?
            if (isAccepted) {
                // Executamos o callback com o segundo argumento true (validação aceita)
                return cb(null, true);
            }

            // Se o arquivo não bateu com nenhum aceito, executamos o callback com o segundo valor false (validação falhouo)
            return cb(null, false);
        }
    });
    return config
}