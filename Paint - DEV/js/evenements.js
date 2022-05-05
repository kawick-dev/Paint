/*
  Fichier comprenant l'implémentation des évênements du canvas
*/


function canvasMouseDown(canvas, e) {
    // Je garde en mémoire que j'ai cliqué et ensuite les coordonnées de mon premier point	
    canvas.click = true;
    // Je récupère les coordonnées x du pointeur dans le canvas en retirant la position du canvas en left
    canvas.departX = e.clientX - canvas.getBoundingClientRect().left;
    // Je récupère les coordonnées y du pointeur dans le canvas en retirant la position du canvas en top
    canvas.departY = e.clientY - canvas.getBoundingClientRect().top;
    // Je garde en mémoire l'image actuelle du canvas et je la dessine dans le canvas temporaire
    canvas.temporaireCtx.drawImage(canvas, 0, 0);

}

function canvasMouseMove(canvas, e) {
    // Lorsque je bouge la souris, je veux dessiner uniquement si j'ai appuyé sur le bouton
    if (canvas.click) {

        //========= Taille ==========
        if (canvas.taille == "taille") {
            index = tailleLigne.selectedIndex;
            taille = tailleLigne.options[index].value;
        }

        //========= Couleur ==========
        if (canvas.color == "noir") {
            couleur2 = "#000000";
        }
        if (canvas.color == "rouge") {
            couleur2 = "#D9291E";
        }
        if (canvas.color == "magenta") {
            couleur2 = "#DF2D50";
        }
        if (canvas.color == "pourpre") {
            couleur2 = "#A00C5A";
        }
        if (canvas.color == "violet") {
            couleur2 = "#651989";
        }
        if (canvas.color == "indigo") {
            couleur2 = "#293387";
        }
        if (canvas.color == "cyan") {
            couleur2 = "#2970AA";
        }
        if (canvas.color == "turquoise") {
            couleur2 = "#08A3CA";
        }
        if (canvas.color == "vert") {
            couleur2 = "#07955E";
        }
        if (canvas.color == "vertClaire") {
            couleur2 = "#6EB74F";
        }
        if (canvas.color == "jaune") {
            couleur2 = "#FDEB1A";
        }
        if (canvas.color == "jauneOrange") {
            couleur2 = "#FAA323";
        }
        if (canvas.color == "orange") {
            couleur2 = "#EC5D33";
        }

        // Je récupère les coordonnées du 2 ème point
        x2 = e.clientX - canvas.getBoundingClientRect().left;
        y2 = e.clientY - canvas.getBoundingClientRect().top;
        // J'affiche sur le canvas, le canvas temporaire pour effacer ma ligne précédente
        //drawImage(canvas, 0, 0, canvas.temporaire);
        // Je dessine ma nouvelle ligne
        //drawLine(canvas, canvas.departX, canvas.departY, x2, y2);
        //drawText(canvas, x2, y2, "test");

        //========= Mode ==========
        if (canvas.forme == "ligne") {
            drawImage(canvas, 0, 0, canvas.temporaire);
            drawLine(canvas, canvas.departX, canvas.departY, x2, y2);
        }
        if (canvas.forme == "texte") {
            drawImage(canvas, 0, 0, canvas.temporaire);
            drawText(canvas, x2, y2, input_text);
        }
        if (canvas.forme == "hand") {
            drawHand(canvas, canvas.departX, canvas.departY, x2, y2);
            canvas.departX = x2;
            canvas.departY = y2;
        }
        if (canvas.forme == "rectangle") {
            x2 = x2 - canvas.departX
            y2 = y2 - canvas.departY
            drawImage(canvas, 0, 0, canvas.temporaire);
            drawrect(canvas, canvas.departX, canvas.departY, x2, y2);
        }
        if (canvas.forme == "circle") {
            drawImage(canvas, 0, 0, canvas.temporaire);
            drawcircle(canvas, canvas.departX, canvas.departY, x2, y2);
        }
        if (canvas.forme == "triangle") {
            drawImage(canvas, 0, 0, canvas.temporaire);
            drawTriangle(canvas, canvas.departX, canvas.departY, x2, y2);
        }
        if (canvas.forme == "losange") {
            drawImage(canvas, 0, 0, canvas.temporaire);
            drawLosange(canvas, canvas.departX, canvas.departY, x2, y2);
        }
        if (canvas.forme == "gomme") {
            Gomme(canvas, canvas.departX, canvas.departY, x2, y2);
            canvas.departX = x2;
            canvas.departY = y2;

        }
    }
}

function canvasMouseUp(canvas, e) {
    // Je ne suis plus en mode "cliqué""
    canvas.click = false;
}