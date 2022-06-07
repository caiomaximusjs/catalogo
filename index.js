require("dotenv").config();
const express = require("express");
let message = "";
const app = express();
const path = require("path");

const port = process.env.PORT || 4000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const jogosTerror = [
  {
    id: 1,
    nome: "Resident Evil 4",
    ano: "11/01/2005",
    estudio: "Capcom",
    descricao:
      "Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror e tiro em terceira pessoa desenvolvido e publicado pela Capcom, lançado originalmente para o Nintendo GameCube em 2005. É o sexto jogo principal da franquia Resident Evil.",
    tipo: "terror",
    imagem: "https://images-na.ssl-images-amazon.com/images/I/51TA51JTYDL.jpg",
  },
  {
    id: 2,
    nome: "Outlast",
    ano: "04/09/2013",
    estudio: "Red Barrels Studio",
    descricao:
      "Outlast é um jogo eletrônico de survival horror desenvolvido e publicado pela Red Barrels, uma empresa fundada por pessoas previamente envolvidas com alguns jogos eletrônicos, tais como Prince of Persia, Assassin Creed, Tom Clancy's Splinter Cell e Uncharted.",
    tipo: "terror",
    imagem: "https://notadogame.com/uploads/game/cover/250x/5bfdc39bd3791.jpg",
  },
  {
    id: 3,
    nome: "Resident Evil 7",
    ano: "23/01/2017",
    estudio: "Capcom",
    descricao:
      "Resident Evil 7: Biohazard, conhecido no Japão como Biohazard 7: Resident Evil é um jogo eletrônico do gênero survival horror produzido pela Capcom e lançado em 24 de janeiro de 2017 para Microsoft Windows, PlayStation 4 e Xbox One, com a versão de PlayStation 4 tendo suporte completo para PlayStation VR.",
    tipo: "terror",
    imagem:
      "https://image.api.playstation.com/cdn/UP0102/CUSA04772_00/cxd9vkFOAHVwwYG7lQKENGkrfyoAChNh.png",
  },
  {
    id: 4,
    nome: "Five nights at freddy`s",
    ano: "08/08/2014",
    estudio: "Red Barrels Studio",
    descricao:
      "Five Nights at Freddy's é uma franquia de mídia criada por Scott Cawthon. Após o lançamento do primeiro jogo, a série se tornou um sucesso mundial, e posteriormente, estendeu-se para vários jogos, livros, brinquedos e a uma futura adaptação para filme.",
    tipo: "terror",
    imagem: "https://gamelodge.com.br/wp-content/uploads/2021/01/image-27.png",
  },
  {
    id: 5,
    nome: "Friday the 13th",
    ano: "26/05/2017",
    estudio: "Gun interactive",
    descricao:
      "Friday the 13th: The Game foi um jogo eletrônico de gênero survival desenvolvido pela IllFonic, e publicado pela Gun Media. É baseado na franquia de filmes de mesmo nome de propriedade da Paramount Pictures. Foi lançado em 26 de maio de 2017 para Microsoft Windows, PlayStation 4 e Xbox One.",
    tipo: "terror",
    imagem: "https://notadogame.com/uploads/game/cover/250x/5bfdc4a1d8812.jpg",
  },
];
const jogosTiro = [
  {
    id: 1,
    nome: "battlefield 4",
    ano: "29/10/2013",
    descricao:
      "Battlefield 4 é um jogo de tiro em primeira pessoa desenvolvido pela DICE e publicado pela Electronic Arts. É o décimo terceiro título da série, sequência de Battlefield 3, e foi lançado entre outubro e novembro de 2013 para Microsoft Windows, PlayStation 3, Xbox 360, PlayStation 4 e Xbox One.",
    estudio: "Eletronic arts",
    tipo: "tiro",
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/8/84/Battlefield_4_capa.png",
  },
  {
    id: 2,
    nome: "COD: Warzone",
    ano: "10/04/2020",
    descricao:
      "Call of Duty: Warzone é um jogo eletrônico free-to-play do gênero battle royale desenvolvido pela Infinity Ward e Raven Software e publicado pela Activision. Lançado em 10 de março de 2020 para Microsoft Windows, PlayStation 4 e Xbox One, o jogo faz parte do título Call of Duty: Modern Warfare, mas não requer compra.",
    estudio: "Actvision",
    tipo: "tiro",
    imagem: "https://bdjogos.com.br/capas/9318-call-of-duty-warzone-capa-1.jpg",
  },
  {
    id: 3,
    nome: "Medal of Honor",
    ano: "12/10/2010",
    descricao:
      "Medal of Honor é um jogo de tiro em primeira pessoa da série Medal of Honor, desenvolvido pela Danger Close, uma equipe dentro dos estúdios da Eletronic Arts de Los Angeles, e a EA Digital Illusions CE, lançado para Microsoft Windows, PlayStation 3 e Xbox 360 em 12 de Outubro de 2010.",
    estudio: "Eletronic Arts",
    tipo: "tiro",
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/1/1a/Medal_of_honor_2010_caixa.png",
  },
  {
    id: 4,
    nome: "Sniper Elite III",
    ano: "26/06/2014",
    descricao:
      "Sniper Elite III é um jogo eletrónico de tiro táctico em terceira pessoa. Foi produzido pela britânica Rebellion Developments e publicado pela 505 Games. É a sequência de Sniper Elite e de Sniper Elite V2.",
    estudio: "Rebellion Developments",
    tipo: "tiro",
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/1/16/Sniper_Elite_3_capa.jpg",
  },
  {
    id: 5,
    nome: "CS:GO",
    ano: "21/08/2012",
    descricao:
      "Counter-Strike: Global Offensive é um jogo online desenvolvido pela Valve Corporation e pela Hidden Path Entertainment, sendo uma sequência de Counter-Strike: Source. É o quarto título principal da franquia.",
    estudio: "Valve",
    tipo: "tiro",
    imagem:
      "http://vortexcultural.com.br/images/2012/10/Counter-Strike-Global-Offensive.jpg",
  },
];
const jogosEsportes = [
  {
    id: 1,
    nome: "FIFA 2022",
    ano: "27/09/2021",
    estudio: "Eletronic Arts",
    descricao:
      "FIFA 22 é um jogo eletrônico de simulação de futebol desenvolvido e publicado pela Electronic Arts. O jogo foi anunciado no dia 11 de julho de 2021 e lançado no dia 1 de outubro de 2021 para PlayStation 5, Xbox Series X/S, Google Stadia, Microsoft Windows, PlayStation 4, Xbox One e PC.",
    tipo: "esportes",
    imagem:
      "https://s2.glbimg.com/ODiGGeYsXRKdzYZcxr0wkN3VAf8=/0x0:1080x1350/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/2/J/DrUc1WRb2Sr4Sa71ucPg/eas-fifa22-gen4-se-crop-1080x1350.png",
  },
  {
    id: 2,
    nome: "NBA 2K22",
    ano: "09/09/2021",
    estudio: "2K",
    descricao:
      "NBA 2K22 é um videogame de simulação de basquete de 2021 desenvolvido pela Visual Concepts e publicado pela 2K Sports, baseado na National Basketball Association. É a 23ª edição da franquia NBA 2K e a sucessora da NBA 2K21.",
    tipo: "esportes",
    imagem:
      "https://image.api.playstation.com/vulcan/ap/rnd/202106/3002/Eaq9uyUlyLZK8L5xTlsPl0rM.png",
  },
  {
    id: 3,
    nome: "eFootball 2022",
    ano: "15/09/2020",
    estudio: "Konami",
    descricao:
      "eFootball 2022 é um jogo eletrônico de simulação de futebol desenvolvido pela Konami Digital Entertainment e publicado pela Konami. É um jogo gratuito para jogar completamente rebatizado da série Pro Evolution Soccer.",
    tipo: "esportes",
    imagem: "https://bdjogos.com.br/capas/11906-efootball-2022-capa-1.jpg",
  },
  {
    id: 4,
    nome: "F1 2021",
    ano: "13/07/2021",
    estudio: "Codemasters",
    descricao:
      "F1 2021 é o videogame oficial dos campeonatos de Fórmula 1 e Fórmula 2 de 2021, desenvolvido pela Codemasters e publicado pela EA Sports.",
    tipo: "esportes",
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/f/f0/F1_2021_cover_art_%28low_res%29.jpg",
  },
  {
    id: 5,
    nome: "UFC 4",
    ano: "14/08/2020",
    estudio: "Eletronics Arts",
    descricao:
      "EA Sports UFC 4 é um videogame de luta de artes marciais mistas desenvolvido pela EA Vancouver e publicado pela EA Sports. Servindo como sequência de EA Sports UFC 3, foi lançado em 14 de agosto de 2020 para PlayStation 4 e Xbox One.",
    tipo: "esportes",
    imagem: "https://img.ibxk.com.br/2020/07/11/11202452120020.jpg",
  },
];
const jogosAcao = [
  {
    id: 1,
    nome: "Uncharted 4",
    ano: "10/05/2016",
    estudio: "Naughty dogs",
    descricao:
      "Uncharted 4: A Thief's End é um jogo eletrônico de ação-aventura desenvolvido pela Naughty Dog e publicado pela Sony Computer Entertainment. É o quarto título principal da série Uncharted e foi lançado exclusivamente para PlayStation 4 em 10 de maio de 2016.",
    tipo: "ação",
    imagem: "https://images-na.ssl-images-amazon.com/images/I/91grctgwzFL.jpg",
  },
  {
    id: 2,
    nome: "Tomb Raider",
    ano: "11/02/2015",
    estudio: "Square Enix",
    descricao:
      "Rise of the Tomb Raider é um jogo eletrônico de ação-aventura, segundo de uma trilogia que começou em 2013 com Tomb Raider. O jogo foi produzido pela Crystal Dynamics e publicado pela Microsoft Studios em 10 de novembro de 2015, exclusivamente para Xbox One e Xbox 360, em 2019 para Google Stadia.",
    tipo: "ação",
    imagem:
      "http://2.bp.blogspot.com/-qwD6wTHiaFM/UIbdou3XqRI/AAAAAAAAMHw/V6e-22FrNR4/s1600/pc.jpg",
  },
  {
    id: 3,
    nome: "GTA V",
    ano: "17/09/2013",
    estudio: "Rockstar Games",
    descricao:
      "Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games.",
    tipo: "ação",
    imagem:
      "https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1421771177.jpg",
  },
  {
    id: 4,
    nome: "Sleeping Dogs",
    ano: "14/08/2012",
    estudio: "Square Enix",
    descricao:
      "Sleeping Dogs é um jogo de video game do gênero Ação e aventura moderna com elementos de crime e drama jogado em mundo aberto, que possui um cenário muito grande.",
    tipo: "ação",
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/2/2e/Sleeping_Dogs_caixa.jpg",
  },
  {
    id: 5,
    nome: "Spider-Man",
    ano: "07/09/2018",
    estudio: "Sony",
    descricao:
      "Spider-Man é um jogo eletrônico de ação-aventura desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment.",
    tipo: "ação",
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/7/78/Spider-Man_jogo_2018_capa.png",
  },
];
let jogo = undefined;
const tiro = undefined;
const terror = undefined;
const esportes = undefined;
const acao = undefined;

app.get("/", function (req, res) {
  const id = req.params.id - 1;
  setTimeout(() => {
    message = "";
  }, 1000);
  res.render("index", {
    jogo,
    id,
    tiro,
    jogosTiro,
    jogosEsportes,
    jogosTerror,
    terror,
    esportes,
    acao,
    jogosAcao,
    message,
  });
});
app.get(`/singUp`, (req, res) => {
  res.render("singUp", { message });
});
app.get(`/details/:tipo/:id`, (req, res) => {
  const id = req.params.id - 1;
  const tipo = req.params.tipo;
  res.render("details", {
    jogosAcao,
    jogosTerror,
    jogosEsportes,
    jogosTiro,
    tipo,
    id,
  });
});

app.get(`/update/:tipo/:id`, (req, res) => {
  const tipo = req.params.tipo;
  const id = req.params.id - 1;
  res.render("update", {
    jogosAcao,
    jogosTerror,
    jogosEsportes,
    jogosTiro,
    id,
    jogo,
    tipo,
  });
});

app.post("/create", (req, res) => {
  message = `Parabéns um novo jogo foi cadastrado`;
  const jogo = req.body;
  if (jogo.tipo == "tiro") {
    jogo.id = jogosTiro.length + 1;
    jogosTiro.push(jogo);
    res.redirect("/");
  } else if (jogo.tipo == "terror") {
    jogo.id = jogosTerror.length + 1;
    jogosTerror.push(jogo);
    res.redirect("/");
  } else if (jogo.tipo == "ação") {
    jogo.id = jogosAcao.length + 1;
    jogosAcao.push(jogo);
    res.redirect("/");
  } else if (jogo.tipo == "esportes") {
    jogo.id = jogosEsportes.length + 1;
    jogosEsportes.push(jogo);
    res.redirect("/");
  }
});
app.get(`/deleteTerror/:id`, (req, res) => {
  message = `O jogo foi deletado permanentemente`;
  const id = +req.params.id - 1;
  delete jogosTerror[id];
  res.redirect("/#cards");
});
app.get(`/deleteTiro/:id`, (req, res) => {
  message = `O jogo foi deletado permanentemente`;
  const id = +req.params.id - 1;
  delete jogosTiro[id];
  res.redirect("/#cards");
});
app.get(`/deleteAcao/:id`, (req, res) => {
  message = `O jogo foi deletado permanentemente`;
  const id = +req.params.id - 1;
  delete jogosAcao[id];
  res.redirect("/#cards");
});
app.get(`/deleteEsportes/:id`, (req, res) => {
  message = `O jogo foi deletado permanentemente`;
  const id = +req.params.id - 1;
  delete jogosEsportes[id];
  res.redirect("/#cards");
});

app.get("/detalhes/:id", (req, res) => {
  const id = +req.params.id;
  jogo = jogosTerror.filter(Boolean).find((jogo) => jogo.id === id);
  res.redirect("/updateTerror/:id");
});

app.post("/updateTerror/:id", (req, res) => {
  const id = +req.params.id - 1;
  let novoJogo = req.body;
  novoJogo.id = id + 1;
  jogosTerror[id] = novoJogo;
  jogo = undefined;
  res.redirect("/");
});

app.get("/detalhes/:id", (req, res) => {
  const id = +req.params.id;
  jogo = jogosEsportes.filter(Boolean).find((jogo) => jogo.id === id);
  res.redirect("/updateEsportes/:id");
});

app.post("/updateEsportes/:id", (req, res) => {
  const id = +req.params.id - 1;
  let novoJogo = req.body;
  novoJogo.id = id + 1;
  jogosEsportes[id] = novoJogo;
  jogo = undefined;
  res.redirect("/");
});

app.get("/detalhes/:id", (req, res) => {
  const id = +req.params.id;
  jogo = jogosTiro.filter(Boolean).find((jogo) => jogo.id === id);
  res.redirect("/updateTiro/:id");
});

app.post("/updateTiro/:id", (req, res) => {
  const id = +req.params.id - 1;
  let novoJogo = req.body;
  novoJogo.id = id + 1;
  jogosTiro[id] = novoJogo;
  jogo = undefined;
  res.redirect("/");
});

app.get("/detalhes/:id", (req, res) => {
  const id = +req.params.id;
  jogo = jogosAcao.filter(Boolean).find((jogo) => jogo.id === id);
  res.redirect("/updateAcao/:id");
});

app.post("/updateAcao/:id", (req, res) => {
  const id = +req.params.id - 1;
  let novoJogo = req.body;
  novoJogo.id = id + 1;
  jogosAcao[id] = novoJogo;
  jogo = undefined;
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
