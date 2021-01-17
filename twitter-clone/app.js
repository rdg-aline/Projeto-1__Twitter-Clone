const objetoUsuario = new Usuario()
const objetoCard = new Card()
const objetoTweet = new  CardTweets ()
const objetoSeguidores = new Seguidores()
const  teste = new minhalocalStorage ()

// 1 - usuario
objetoUsuario.User()
    .then(function (resposta) {
        resposta.json()
            .then(function (dados) {
                objetoCard.mostraUser(dados)
               
            })
    })


    // 2  -tweets 

    objetoUsuario.Tweets()
    .then(function (resposta) {
        resposta.json()
            .then(function (dados) {
                objetoTweet.mostraTweet(dados)
            })
    })

    //3- followers
        
    objetoUsuario.Followers()
    .then(function (resposta) {
        resposta.json()
            .then(function (dados) {
                objetoSeguidores.follow(dados)
            })



            // 4 store usuario
            objetoUsuario.User()
                .then(function (resposta) {
                    resposta.json()
                        .then(function (dados) {
                            teste.salvarUsuarioLocalStorage(dados)
                           
                        })
                })


    })