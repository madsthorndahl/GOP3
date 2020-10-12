
class User {

    constructor(name, birthday, gender, location, email, password, uniqueUserID)
        {
      
        this.name = name
        this.birthday = birthday;
        this.gender = gender;
        this.location = location;
        this.email = email;
        this.password = password;
        this.uniqueUserID = generateUserID;
       
    }
// Generer et userID som tæller op af alt efter hvornår man har oprettet en profil.
generateUserID() {
           
    var counter = 0;
    return function () {counter += 1; return counter}   
};
// tag userid fra den som man har liket og skriv ind i et array
    

class freeUser extends user{
    
            constructor(name, birthday, gender, location, email, password, uniqueUserID){
            super(name, birthday, gender, location, email, password, uniqueUserID)
            //add like limit
            
        }}
        

class paymenUser extends user{
    
    constructor(name, birthday, gender, location, email, password, uniqueUserID){
    super(name, birthday, gender, location, email, password, uniqueUserID)
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
//laver et tomt array der indholde ID på alle dem man har liket
var likedPersons = [];

class match extends interst {
    constructor(name)
    super(name)
    // metoder der sammenligner forskellige crud for forskellige persone og derved laver matches, og giver acces 
    // til en message function

}

// When people like some one, the persones unique user ID will be addet to the array of people they like in the intrest class
like() {
// Laver konstanter for fiktive like og disslike knapper
Let likeBtn = document.getElementById("likeBtn");
Let disslikeBtn = document.getElementById("disslikeBtn");
// Laver en event listner der skal gøre noget alt efter om man liker eller dissliker
likeBtn.addEventListener("click",()=>{
//tilføj likede brugers uniqueId til et array 
    likedPersons.push(userOnScreen.uniqueUserID) //lav en variabel der gør at den person der er på dislayet er = userOnScreen
})
};
# GOP3
