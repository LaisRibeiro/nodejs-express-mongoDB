import http from "http"

// Usar padrão de variável maiúscula quando passado informações fixas/estáticas
const PORT = 3000;

const rotas = {
    "/": "Curso de Noje.js",
    "/livros": "Entrei na rota Livros",
    "/autores": "Entrei na rota Autores"
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    //res.end = texto que vai ser trafegado
    res.end(rotas[req.url]);
});

server.listen(PORT, () => {
    console.log("Servidor tá on!");
});