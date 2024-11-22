import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados usando a string de conexão do ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);


// Função assíncrona para obter todos os posts do banco de dados
export async function getTodosPosts() {
    // Seleciona o banco de dados 'blog-fotos'
    const db = conexao.db("blog-fotos");
    // Seleciona a coleção 'posts'
    const colecao = db.collection("posts");
    // Busca todos os documentos da coleção e retorna como um array
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db("blog-fotos");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost)
}
