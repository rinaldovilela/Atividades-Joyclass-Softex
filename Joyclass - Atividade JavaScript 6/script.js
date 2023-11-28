function conectarBanco() {

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("Conexão com o banco de dados estabelecida com sucesso!");
            } else {
                console.error("Erro ao conectar ao banco de dados.");
            }
        }
    };
    xhr.open("GET", "http://exemplo.com/banco-dados");
    xhr.send();
}

conectarBanco();
