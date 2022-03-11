function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

        if (fano.value.length == 0 || Number(fano.value) > ano) {
            window.alert('[ERRO!] Verifique os dados e tente novamente.')
        }

    var option = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gender = ''
    var img = document.createElement('img') //CRIA UMA TAG IMG DIRETO NO JS
    img.setAttribute('id', 'foto') // ATRIBUI UM ID Á TAG IMG CRIADA
        if (option[0].checked) {
            gender = 'um homem'
                if (idade < 10) {
                    img.setAttribute('src', 'foto-bebe-m.png')
                    res.innerHTML = `Você é um menino de ${idade} anos.`
                } else if (idade < 21) {
                    img.setAttribute('src', 'foto-jovem-m.png')
                    res.innerHTML = `Você é um jovem de ${idade} anos.`
                } else if (idade < 60) {
                    img.setAttribute('src', 'foto-adulto-m.png')
                    res.innerHTML = `Você é um homem adulto de ${idade} anos.`
                } else {
                    img.setAttribute('src', 'foto-idoso-m.png')
                    res.innerHTML = `Você é um homem idoso de ${idade} anos.`
                } 
        }
        else if (option[1].checked) {
            gender = 'uma mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-f.png')
                res.innerHTML = `Você é uma menina de ${idade} anos.`
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-f.png')
                res.innerHTML = `Você é uma jovem de ${idade} anos.`
            } else if (idade < 60) {
                img.setAttribute('src', 'foto-adulto-f.png')
                res.innerHTML = `Você é uma mulher adulta de ${idade} anos.`
            } else {
                img.setAttribute('src', 'foto-idoso-f.png')
                res.innerHTML = `Você é uma mulher idosa de ${idade} anos.`
            } 
        } 
        res.style.font = 'bold 1em arial'
        //res.innerHTML = `Você é ${gender} de ${idade} anos.`
        res.appendChild(img)
}