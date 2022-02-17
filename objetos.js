

let qtd_usuarios = Number(prompt('quantos usuarios deseja cadastrar?'))

let usuarios =[]

for(let i = 0; i < qtd_usuarios;i++){
    let user = {
        nome : '',
        idade : 0,
        sexo : '',
    }
    user.nome = prompt('digite o nome do usuario:' )
    user.idade = prompt('digite a idade do usuario:' )
    user.sexo = prompt('digite o sexo:' )

    usuarios.push(user)
}
for(let c = 0; c < qtd_usuarios;c++)
document.write(`nome: ${usuarios[c].nome} <br> idade: ${usuarios[c].idade} <br> sexo: ${usuarios[c].sexo} <br> <br>` )







