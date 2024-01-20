document.addEventListener("DOMContentLoaded", function() {
    const email = document.getElementById("email");
    email.addEventListener('click', function(a){
        alert("alvarodecarvalho20@gmail.com");
    });

    var projetos = [
        { link: "https://restaurante-com-bootstrap.vercel.app/", descricao: "Restaurante do Álvaro" },
        { link: "https://loja-de-carros-zeta.vercel.app/", descricao: "Loja de Carros" },
        { link: "https://calculadora-notas-self.vercel.app/", descricao: "Calculadora de médias com JS nativo" },
        { link: "https://projeto-modulo-21-disney-project-8hep.vercel.app/", descricao: "Clone da Disney+ com JS nativo, SASS e Gulp" },
        { link: "https://projeto-modulo-22-leanding-page.vercel.app/", descricao: "Landing Page feita com auxílio do Parcel" },
        { link: "https://github.com/AlvaroDeCarvalho", descricao: "Mais projetos disponíveis aqui" }
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