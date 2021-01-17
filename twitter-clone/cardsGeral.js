class CardTweets {

    constructor() {
      this.listaTweets = document.getElementById("tweetDojason")
   }
  
    mostraTweet(dados) {
  
      let cardT = ''
       
      dados.tweets.map(function (elemento){
        //console.log("elemento", elemento)

        cardT += `
        <div class="cardTweets">
                                 
         <ol class="tweet-list">
            <li class="tweet-card">
              <div class="tweet-content">
                <div class="tweet-header">
                  <span class="fullname">
                    <strong>${elemento.nome}</strong>
                  </span>
                  <span class="username">${elemento.usuario}</span>
                  <span class="tweet-time">${elemento.data}</span>
                </div>
                <a>
                  <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
                </a>
                <div class="tweet-text">
                  <p class="" lang="es" data-aria-label-part="0"> ${elemento.mensagem}<a href="https://t.co/dqg5hVQXA0"
                      class="twitter-timeline-link" target="_blank">
                      <spanclass=""></span></a>
                       <a href="" class="twitter-hashtag"><s></s><b>"</b></a> <a href=""
                            class="twitter-hashtag"><s></s><b></b>  </a>
                       <a href="" class="twitter-hashtag" dir="ltr"></a>
                  </p>

                </div>
                <div class="tweet-footer">
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-comment" aria-hidden="true"></i><span>${elemento.comentarios} </span>
                  </a>
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-sync" aria-hidden="true"></i><span> ${elemento.compartilhamentos}</span>
                  </a>
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-heart" aria-hidden="true"></i><span> ${elemento.likes}</span>
                  </a>
                </div>
              </div>
            </li>
          </ol>
         </div>   `
        })
     
        this.listaTweets.innerHTML = cardT
  
    }
  
  }
  
   // Followers 
    class Seguidores{
              constructor() {
               this.listaFollow = document.getElementById("followsDoJason")

               }
          follow(dados){
            let cardFollows = ''
       
            dados.followers.map( (elemento) => {
                
              cardFollows += `
             <div class="cardFollowers">
              <ol class="tweet-list">
               <li class="tweet-card">
                <div class="tweet-content">
                  <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
                  <div class="tweet-header">
                    <span class="fullname">
                      <strong>${elemento.nome}</strong>
                    </span>
                    <span class="username"><a href="${elemento.usuario}">${elemento.usuario}</a></span>
                  </div>

                  <button class="btn btn-follow">Follow</button>
                </div>
              </li>
            </ol>                      
           </div>  `
              })
           
              this.listaFollow.innerHTML = cardFollows
        
          }
    }
      
