class Card {
  constructor() {
    this.listaDados = document.getElementById("infoDojason")
    this.listaQtdTweets = document.getElementById("qtdTweets")
    this.nomeUser = document.getElementById("infoDojason")
  
  }
  
  mostraUser(dados) {
       
    let qtd = ''
    let card = ''


    
    card += `
        <div class="cardUser">
        <h3 class="profile-fullname"><a> ${localStorage.getItem("nomeUser")}<a></h3>
                       <h2 class="profile-element"><a></a><a>${dados[0].usuario}</a></h2>
             <a class="profile-element profile-website" hrerf=""><i class="octicon octicon-link"></i>&nbsp;${dados[0].usuario}</a>
             <h2 class="profile-element"><i class="octicon octicon-calendar"></i>Joined in: ${dados[0].cadastro}</h2>
            <a class="profile-element profile-website" hrerf=""> ${dados[0].local}   </a>
            <button class="btn btn-search-bar tweet-to-btn">Tweet to ${dados[0].nome}</button>
           
  </div>       
    `
    this.listaDados.innerHTML = card
  
    qtd += `
      <div class="profile-header" >
      <ul>
       <li class="profile-stats-item-active">
        <a>
                          
      <span class="profile-stats-item profile-stats-item-label">Tweets</span>
      <span class="profile-stats-item profile-stats-item-number">${dados[0].quantidade_tweets}</span>
        </a>
       </li>
       <li>
        <a>
          <span class="profile-stats-item profile-stats-item-label">Following</span>
          <span class="profile-stats-item profile-stats-item-number">${dados[0].seguindo}</span>
        </a>
       </li>
       <li>
        <a>
          <span class="profile-stats-item profile-stats-item-label">Followers</span>
          <span class="profile-stats-item profile-stats-item-number">${dados[0].seguidores}</span>
        </a>
       </li>
       <li>
        <a>
          <span class="profile-stats-item profile-stats-item-label">Likes</span>
          <span class="profile-stats-item profile-stats-item-number">${dados[0].likes}</span>
         </a>
       </li>
      </ul>
          </div> 
      `
    this.listaQtdTweets.innerHTML = qtd

   
  }


}


// ******Local Storage *****
class minhalocalStorage {
  constructor() {
    this.nomeUser = document.getElementById("infoDojason")
    }
  
 
    
   //metodo para salvar nome do usuario no local storage
  salvarUsuarioLocalStorage (dados)  {
   
     localStorage.setItem("nomeUser",dados[0].nome)
   
     }  


}
