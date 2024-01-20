document.addEventListener("DOMContentLoaded", function() {
    const email = document.getElementById("email");
    email.addEventListener('click', function(a){
        alert("alvarodecarvalho20@gmail.com");
    });

    var projetos = [
        {
            link: "https://restaurante-com-bootstrap.vercel.app/", 
            descricao: "Restaurante do Álvaro" 

        },

        {
            link: "https://loja-de-carros-zeta.vercel.app/",
            descricao: "Loja de Carros" 
        },

        { 
            link: "https://todo-vuejs-steel.vercel.app/",
            descricao: "Lista de tarefas simples com VueJs" 
        },

        {
            link: "https://projeto-modulo-21-disney-project-8hep.vercel.app/",
            descricao: "Clone da Disney+ com JS nativo, SASS e Gulp"
         },

        { 
            link: "https://alvaronewportfolio.vercel.app/",
            descricao: "Um portfolio reserva feito com react e restauração de Api comhttps://projeto-modulo-22-leanding-page.vercel.app/" 
        },

        { 

            link: "https://github.com/AlvaroDeCarvalho",
            descricao: "Mais projetos disponíveis aqui" 
        }
    ];

    var projectList = document.getElementById("project-list");

    if (projectList) {
        for (var i = 0; i < projetos.length; i++) {
            var listItem = document.createElement("li");
            listItem.className = "project-list-item";

            var linkElement = document.createElement("a");
            linkElement.href = projetos[i].link;
            linkElement.target = "_blank";
            linkElement.textContent = projetos[i].descricao;

            projectList.appendChild(listItem);
            listItem.appendChild(linkElement);
        }
    } else {
        console.error("Elemento project-list não encontrado");
    }
});