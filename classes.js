
class User {

    constructor(name, birthday, gender, location, email, password, uniqueUserID)
        {
      
        this.name = name
        this.birthday = birthday;
        this.gender = gender;
        this.location = location;
        this.email = email;
        this.password = password;
        this.uniqueUserID = uniqueUserID;
        }
// Generer et userID som tæller op af alt efter hvornår man har oprettet en profil.
var generateUserID = (function () {
            var counter = 0;
            return function () {counter += 1; return counter}
          })();

// When people like some one, the persones unique user ID will be addet to the array of people they like in the intrest class
var like = function() {

// tag userid fra den som man har liket og skriv ind i et array
}

    }
class freeUser extends user{
    
            constructor(name, birthday, gender, location,){
            super(name, birthday, gender, location)
            //add like limit
            
        }}
        

class paymenUser extends user{
    
    constructor(name, birthday, gender, location,){
    super(name, birthday, gender, location)
    //add super like eller sådan noget
    
}}

class creditCard {
    constructor(cardHolderName, experationDate, cardNumber, CVCNumber)

}

class interst extends user {
    constructor(name,)
    super(name)
    //hvis personen liker CRUD til en liste med alle folk som de liker

}

class match extends interst {
    constructor(name)
    super(name)
    //metoder der sammenligner forskellige crud for forskellige persone og derved laver matches, og giver acces 
    // til en message function

}
# GOP3
