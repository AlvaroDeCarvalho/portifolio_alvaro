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
            descricao: "portfolio reserva feito com react e restauração de Api" 
        },
        { 

            link: "https://projeto-modulo-22-leanding-page.vercel.app/",
            descricao: "leanding Page evento ebac" 
        },
        { 

            link: "https://github-perfil-adsn.vercel.app/",
            descricao: "Site onde é possivel fazer pesquisa de perfis do github. tudo através de API " 
        },
        { 

            link: "https://github.com/AlvaroDeCarvalho",
            descricao: "Mais projetos disponíveis aqui" 
        },


    ];

    
    var listElement = document.getElementById('project-list')

    if(listElement){
        for(let i = 0 ; i <= projetos.length ; i++ ){
            var itemElement =  document.createElement('li')
            itemElement.className = 'project-list-item'

            var linkElemnt = document.createElement('a')
            linkElemnt.href = projetos[i].link
            linkElemnt.target = '_blank'
            linkElemnt.textContent = projetos[i].descricao
            listElement.appendChild(itemElement)
            itemElement.appendChild(linkElemnt)
        }
    }
    
     else {
        console.error("Elemento project-list não encontrado");
    }
});