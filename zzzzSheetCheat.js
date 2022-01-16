const NomConstante = document.getElementById("IDhtml");
const NomConst = document.querySelector('p[class="BienvenueText"]');
let string_ = "plop";
let number = 4;
let bool = true;
let array = ["ceci", "est", "un", "tableau", true, 47, { meme: "un object" }];
let object = {
    nom: "maxou",
    prenom: "mass",
    admin: true
};

NomConstante.addEventListener(  'click', (e) => {
    console.log(e);
                                'mousemove'
                                'mousedown'     //click appuyé
                                'mouseup'       //click relaché
                                'mouseenter'    //souris entre dans le champ
                                'mouseout'      //sortie de la souris
                                'mouseleave'    //la souris quitte la zone ?
                                'keydown'       //au click d'une touche clav ou sourris
                                'input'
                                'change'
                                'submit'
                                'load'
    document.addEventListener(  'keypress', (e) => {
        NomConstante.textcontent += e.key    //renvoi les lettre tapées dans le HTML
        innerhtml
    });

                alert();                        //pop une alerte
                confirm();                      //pop une confirmation yes no
    string_ =   prompt('quel est ton nom ?');   //pose une question attendant une rep

    console.log(typeof string_); //connaitre le type de variable
    console.log(array[0][2]);   //aller chercher dans le tableau la lettre "2" du mot "0"
    console.log(array[6].meme); //aller chercher ce que contient "meme" dans l'objet "6"
    object[0].address = "rue loula la grande";  //ajouter un ligne a object






    /////////////////////////////////////DATAS////////////////////////////////////////////
    document.body.addEventListener('click', (e) => {
        switch (e.target.id) {
            case "telId":
                document.body.style.background = "green";
                break;
            case "telAutreId":
                document.body.style.background = "black";
                break;
            default:
                null;
        }
    });




    setTimeout(() => {
        /////////////////////
        //fonction a retardement
        /////////////
    }, 3000);

    let plop = setInterval(() => {
        /////////////////////
        //fonction a répétition toute les 1000s
        /////////////
    }, 1000);

    clearInterval(plop); //mettre fin a la répétition.


    while (number < 47) {           //temps que number <47
        number++;
        console.log(number);
    };

     do {   
        number++;
        console.log(number);
    } while (number < 47);          //temps que number <47



    let data = [{
        nom: "Maxou",
        prenom: "Mass",
        age:31.27,
        admin: true,
    },

    {
        nom: "Joyce",
        prenom: "Ju",
        admin: false,
    },

    {
        nom: "Nine",
        prenom: "Pou",
        admin: false,
    }]

    for (const user of data) {
        document.body.innerHTML += `<li>${user.pseudo} - ${user.age}ans</li>`
    };
    //répertorie tous les objet dans le tableau data

    for (i = 0; i < data.length; i++) {
        document.body.innerHTML += `<li>${data[i].pseudo} - ${data[i].age}ans</li>`
    };
    //2eme boucle meme resultat 

    console.log(    typeof(data)    );
                    parseInt()                  //passer d'une var string a une var number
                    isNaN()                     //renvoi true si is Not A Number
                    data.length                 //renvoi la longuer de data en numerique
                    data.indexOf("admin")       //renvoi la place du caractere demandé
                    data.slice(2 , 4)           //decoupe chaine de caract a 2 caract jusque 4 apres
                    data.tolowercase()          //tout en minuscule
                    data.touppercase()          //tout en MAJ
                    data.replace("Ju", "Juju")  //remplacer Ju par Juju
                    data[0].age.toFixed(0)      //tronc le nobre 0 apres la virgule
                    data.push(object)           //injecter object dans data
                    data.some((var)=> var.Email === Val_INPUT )//verif si au moins un des objets contiennent "Val_INPUT"
                    data.every((var)=> var.Email === Val_INPUT )//verif si tous les objets contiennent "Val_INPUT"
                    JSON.stringify(data)//transformer en json
                    JSON.parse(data)//JSON > OBJET

                    Math.PI                     
                    Math.round(3.26)            //arrondi au plus PROCHE
                    Math.floor(3.26)            //arrondi au plus BAS
                    Math.ceil(3.26)             //arrondi au plus HAUT
                    Math.pow(2, 7)              //2 PUISSACE 7
                    Math.sqrt(16)               //RACINE CARRE
                    Math.random()               //chiffre aléatoire
                    
                    Object.keys("data")         //liste toutes les var de Tab data
                    Object.values("data")       //liste toutes les valeurs des var de Tab data
                    Object.entries("data")      //créé un objet contenant {vars : valeurs}
                    Object.assign({}, "data" , "data1")//fusionne data && data1
                    Object.freeze("data")       //geler le tableau data
                    Object.seal("data")         //empecher l'ajout de new var dans data


                





//feltch



fetch("data.txt")
    .then((resp) => resp.text())
    .then((resp2) => console.log(resp2));


fetch("data.json")
    .then((resp) => resp.json())
    .then((resp2) => console.log(resp2));














