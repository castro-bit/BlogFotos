import express from "express";
const posts = [
    {
        id:1,
        descricao: "Foto Teste",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id:2,
        descricao: "Paisagem deslumbrante",
        imagem: "https://placecats.com/millie/300/150",
       
    },
    {
        id:3,
        descricao: "Meu novo pet!",
        imagem: "https://placecats.com/millie/300/150",
        
    },
    {
        id:4,
        descricao: "Receita deliciosa de bolo de chocolate",
        imagem: "https://placecats.com/millie/300/150",
        
    },
    {
        id:5,
        descricao: "Viagem inesquecível para a Europa",
        imagem: "https://placecats.com/millie/300/150",
        
    },
];


const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

function buscarPostporID(id){
    return posts.findIndex((post) =>{
        return post.id === Number(id);
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostporID(req.params.id);
    res.status(200).json(posts[index]);
});