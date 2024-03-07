document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("produtoForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 


        const produtoCode = document.getElementById("produtoCode").value;
        const produtoDesc = document.getElementById("produtoDesc").value;
        const unitMedida = document.getElementById("unitMedida").value;
        const localizacaoProd = document.getElementById("localizacaoProd").value;
        const precoAquisicao = document.getElementById("precoAquisicao").value;
        const fabricante = document.getElementById("fabricante").value;
        const dataCadastro = document.getElementById("dataCadastro").value;
        const departamento = document.getElementById("departamento").value;

       
        sendDataToServlet(produtoCode, produtoDesc, unitMedida, localizacaoProd, precoAquisicao, fabricante, dataCadastro, departamento);
    });

    function sendDataToServlet(produtoCode, produtoDesc, unitMedida, localizacaoProd, precoAquisicao, fabricante, dataCadastro, departamento) {
  
        fetch('servlet_url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                produtoCode: produtoCode,
                produtoDesc: produtoDesc,
                unitMedida: unitMedida,
                localizacaoProd: localizacaoProd,
                precoAquisicao: precoAquisicao,
                fabricante: fabricante,
                dataCadastro: dataCadastro,
                departamento: departamento
            })
        }).then(response => {
            if (response.ok) {
           
                console.log("Dados enviados com sucesso!");
              
            } else {
                console.error("Erro ao enviar dados para a Servlet");
            }
        }).catch(error => {
            console.error("Erro ao enviar requisição para a Servlet:", error);
        });
    }
});

