/* 
    Exemple d'utilisation d'un canvas temporaire afin d'obtenir une aide à la création d'une ligne
	Ce fichier est le point d'entrée du programme
 	Ne pas oublier d'appeler envenements.js et formes.js dans votre page HTML
 	Auteur: Julien Le Galès - Nuage-pedagogique.fr
*/
etat = 0;
showText = document.getElementById("navTexte");
showChose = document.getElementById("showChose");

showChose.style.display = "none";
etat = 0;
showText.addEventListener("click", showTextClick, false);

function showTextClick() {
    if (etat == 0) {
        showChose.style.display = "flex";
        etat = 1;
    } else if (etat == 1) {
        showChose.style.display = "none";
        etat = 0;
    }
}

/* 
   ============== Mode ==============
*/
ligne = document.getElementById("ligne");
texte = document.getElementById("texte");
hand = document.getElementById("hand");
rect = document.getElementById("rect");
circle = document.getElementById("circle");
triangle = document.getElementById("triangle");
gomme = document.getElementById("gomme");
save = document.getElementById("save");
losange = document.getElementById("losange");

texte.addEventListener("click", texteClick, false);
ligne.addEventListener("click", ligneClick, false);
hand.addEventListener("click", handClick, false);
rect.addEventListener("click", rectClick, false);
circle.addEventListener("click", circleClick, false);
triangle.addEventListener("click", triangleClick, false);
gomme.addEventListener("click", gommeClick, false);
save.addEventListener("click", saveClick, false);
losange.addEventListener("click", losangeClick, false);

function texteClick() {
    input_text = document.getElementById("input_text").value;
    canvas.forme = "texte";
}


function handClick() {
    canvas.forme = "hand";
    if (etat == 1) {
        showChose.style.display = "none";
        etat = 0;
    }
}

function ligneClick() {
    canvas.forme = "ligne";
    if (etat == 1) {
        showChose.style.display = "none";
        etat = 0;
    }
}

function rectClick() {
    canvas.forme = "rectangle";
    if (etat == 1) {
        showChose.style.display = "none";
        etat = 0;
    }
}

function circleClick() {
    canvas.forme = "circle";
    if (etat == 1) {
        showChose.style.display = "none";
        etat = 0;
    }
}

function triangleClick() {
    canvas.forme = "triangle";
    if (etat == 1) {
        showChose.style.display = "none";
        etat = 0;
    }
}

function losangeClick() {
    canvas.forme = "losange";
}

function gommeClick() {
    canvas.forme = "gomme";
    if (etat == 1) {
        showChose.style.display = "none";
        etat = 0;
    }
}

function saveClick() {
    SaveCanvas()
}

/* 
   ============== Couleur ==============
*/
noir = document.getElementById("noir");
rouge = document.getElementById("rouge");
magenta = document.getElementById("magenta");
pourpre = document.getElementById("pourpre");
violet = document.getElementById("violet");
indigo = document.getElementById("indigo");
cyan = document.getElementById("cyan");
turquoise = document.getElementById("turquoise");
vert = document.getElementById("vert");
vertClaire = document.getElementById("vertClaire");
jaune = document.getElementById("jaune");
jauneOrange = document.getElementById("jauneOrange");
orange = document.getElementById("orange");

noir.addEventListener("click", noirClick, false);
rouge.addEventListener("click", rougeClick, false);
magenta.addEventListener("click", magentaClick, false);
pourpre.addEventListener("click", pourpreClick, false);
violet.addEventListener("click", violetClick, false);
indigo.addEventListener("click", indigoClick, false);
cyan.addEventListener("click", cyanClick, false);
turquoise.addEventListener("click", turquoiseClick, false);
vert.addEventListener("click", vertClick, false);
vertClaire.addEventListener("click", vertClaireClick, false);
jaune.addEventListener("click", jauneClick, false);
jauneOrange.addEventListener("click", jauneOrangeClick, false);
orange.addEventListener("click", orangeClick, false);

function noirClick() {
    canvas.color = "noir";
};

function rougeClick() {
    canvas.color = "rouge";
};

function magentaClick() {
    canvas.color = "magenta";
};

function pourpreClick() {
    canvas.color = "pourpre";
};

function violetClick() {
    canvas.color = "violet";
};

function indigoClick() {
    canvas.color = "indigo";
};

function cyanClick() {
    canvas.color = "cyan";
};

function turquoiseClick() {
    canvas.color = "turquoise";
};

function vertClick() {
    canvas.color = "vert";
};

function vertClaireClick() {
    canvas.color = "vertClaire";
};

function jauneClick() {
    canvas.color = "jaune";
};

function jauneOrangeClick() {
    canvas.color = "jauneOrange";
};

function orangeClick() {
    canvas.color = "orange";
};

/* 
   ============== Taille ==============
*/
tailleLigne = document.getElementById("tailleLigne");
tailleLigne.addEventListener("change", tailleFonction, false);

function tailleFonction() {
    canvas.taille = "taille";

}
/* 
   ============== Canvas ==============
*/
//largeur du canvas
let largeur = 900;
// hauteur du canvas
let hauteur = 700;
let couleur = "#FFFFFF";
// J'initialise mon canvas avec la fonction initCanvas définie dans formes.js
canvas = initCanvas(largeur, hauteur, couleur);