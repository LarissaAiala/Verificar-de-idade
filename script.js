function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        //value.length é o comprimento do valor
        window.alert('[ERRO] Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'  
            if (idade >= 0 && idade < 10) {
                // crianca
                /*
                    pesquise por uma criança no google imagens, pegue o endereço da imagem,
                    o qual deve terminar com a extensão do arquivo, por exemplo ".png", e
                    substitua 'foto-bimbo.png' por essa imagem, depois vá em sua pagina,
                    recarregue ela e coloque que nasceu em 2015(no caso seria uma crinaça de 6 anos +-)
                    deixa no masculino e clique em calcular, verá que a imagem sera carregada, faltando 
                    agora apenas deixar ela do tamnho correto.
                */
                img.setAttribute('src', 'foto-bimbo.png')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-ragazzo.png')
            } else if (idade >= 21 && idade < 55) {
                //adulto
                img.setAttribute('src', 'foto-uomo.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // crianca
                img.setAttribute('src', 'foto-bimba.png')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-ragazza.png')
            } else if (idade >= 21 && idade < 55) {
                //adulto
                img.setAttribute('src', 'foto-donna.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}