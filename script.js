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
                img.setAttribute('src', './imagens/criança.jpeg')
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-ragazzo.png')
            } else if (idade >= 21 && idade < 55) {
                //adulto
                img.setAttribute('src', 'https://esbrasil.com.br/wp-content/uploads/2019/07/como-relaxar-o800x500.jpg')
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