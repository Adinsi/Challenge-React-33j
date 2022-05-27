const disBonjour = prenom => console.log('Bonjour ' + prenom)
;

disBonjour('Abdias');


const pries = [1, 2, 3, 4, 5];

const plusgrang = pries.filter((el) => {
    
        return el>2
    
});

console.log(plusgrang);

const utilisateur = {
    utilisateur1 :{
        prenom: "Adinsi ",
        nom: "Abdias ",
        presentation: function(){
          return ` je m'appelle ${this.nom}`
        }
    }
    
}

console.log(utilisateur['utilisateur1'].presentation());

class Compte {

    //le constructor //
    constructor(nom , prenom ,age){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age
    }

        // les methodes//
    sepresenter() {
        return "Allo tout le monde " + this.nom
    }


}

const Agouda = new Compte('Agouda');

const Agoud = new Compte('Agoud');

console.log(Agouda.sepresenter(), Agoud.sepresenter());

// l'affectatin par decomposition // 
const nombres = [1, 2, 3, 4,5]

const [nombre1,nombre2,nombre3,...nombre4] = nombres;

console.log(nombre4)
    ;

    // import POKEMONS//

const abdias = {
    nom : "Adibsi bcjeceeeheheeehhehehehehehhehe"
}

