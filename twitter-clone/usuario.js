
class Usuario {
     // cria método para buscar usuario,tweets e followers do Jason
     
     User() {
          return fetch("./usuario.json")
     }

     Tweets(){
      return fetch("./tweets.json")

     }

     Followers(){
          return fetch("./follow.json")
    
         }


     


}



