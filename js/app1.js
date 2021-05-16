//escuta os botões com seus respectivos ID
document.addEventListener("DOMContentLoaded", function () {
    //URL capturada de maneira global
    var capturando = "";

    document.querySelector('#bnt-pesquisa').addEventListener('click', function () {

        capturando = document.getElementById("myURL").value;
        console.log(capturando)

        let lista = capturando.split('/')
        console.log(lista)

        let x = capturando.split('/')[0];
        let z = capturando.split('/')[2];

        document.getElementById("protocolo").innerHTML = x
        document.getElementById("hotsname").innerHTML = z
    })

    //segundo bloco
    document.querySelector('#btn-scanner').addEventListener('click', function () {
        //aqui vai relacionado a comparação e teste de links estilo FFUF
        let z = capturando.split('/')[2];

        var listaVulner = [
            {
                id: 1,
                nome: 'info.php',
                descricao: 'Este arquivo permite que um atacante veja informações sensíveis sobre o servidor, incluindo, mas não limitando-se a: versão do PHP, versão do MySQL, versão do Apache, funções habilitadas, nome do sistema, IPs internos, entre outras informações exibidas pela função “phpinfo ()” do PHP.',
                aparece: z + '/info.php',
                CVSS: "3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N",
                numero: "5.3"
            },
            {
                id: 2,
                nome: 'Directory Listing wp-content',
                descricao: 'Essa vulnerabilidade permite que diretórios sem uma página index listem seu conteúdo, deixando o conteúdo das mesmas exposto',
                aparece: z + '/wp-content/',
                CVSS: '3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N',
                numero: "5.3"
            },
            {
                id: 3,
                nome: 'Directory Listing wp-includes',
                descricao: 'Essa vulnerabilidade permite que diretórios sem uma página index listem seu conteúdo, deixando o conteúdo das mesmas exposto',
                aparece: z + '/wp-includes/',
                CVSS: '3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N',
                numero: "5.3"
            },
            {
                id: 4,
                nome: 'Git Exposed',
                descricao: 'Esta vulnerabilidade permite que um atacante visualize a pasta “.git” do projeto, podendo assim fazer o download do código fonte completo da aplicação.',
                aparece: z + '/.git/',
                CVSS: '3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N',
                numero: "7.5"
            },
            {
                id: 5,
                nome: 'Server Side Request Forgery (SSRF)',
                descricao: 'Esta vulnerabilidade permite que um atacante faça com que o servidor realize requisições, podendo assim interagir com serviços internos',
                aparece: z + '/domain.php',
                CVSS: '3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H',
                numero: "8.1"
            },
            {
                id: 6,
                nome: '(PHPMailer 5.2.19)',
                descricao: 'Esta vulnerabilidade permite que um atacante explore um componente vulnerável na aplicação web a fim de conseguir realizar ações maliciosas',
                aparece: z + '/phpmailer/VERSION',
                CVSS: '3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
                numero: "9.8"
            }
        ]

        //bloco de scann
        let ulLista = document.getElementById("listaArquivos")
        listaVulner.forEach(function (e) {
            console.log("########################################")
            console.log(e.nome)
            console.log(e.aparece)
            const liArquivo = document.createElement('li')
            liArquivo.innerHTML =
                e.id + ': <span id="nomeArquivo">' + e.nome + '</span>';
            ulLista.append(liArquivo)
        })
        console.log("########################################")
       
        //bloco de relatorio
        listaVulner.forEach(function (valorAtual) {
            if (z != null) {
                console.log('id: ' + valorAtual.id + ' |-------| nome: ' + valorAtual.nome)
                console.log('descrição: ' + valorAtual.descricao)
                console.log('aparece: ' + valorAtual.aparece)
            }
        })
        let ulRelatorio = document.getElementById("listaRelatorio")
        listaVulner.forEach(function (valorAtual) {
            const liRelatorio = document.createElement('li')
            liRelatorio.innerHTML = 
                '<div class="containerRelatorio">'+
                '<div class="containerRelatorioInterno">' +
                '<p><span id="nomeArquivoRelatorio">' + valorAtual.nome+'</span></p>' +
                '<div class="bordaNumeroCvss">'+
                '<p><span id="grauCvss">' + valorAtual.numero+'</span></p>' +
                '</div> </div>' +
                '<p><span id="informacaoRelatorio">' + valorAtual.descricao+'</span></p>' +
                '<p><span id="linkUrl">' + valorAtual.aparece+'</span></p>' +
                '<p>VA:<span id="va-cvss">' + valorAtual.CVSS +'</span></p></div>';
            ulRelatorio.append(liRelatorio)
        })
    })


})

