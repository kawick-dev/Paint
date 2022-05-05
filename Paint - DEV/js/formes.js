// Création d'un canvas
function initCanvas(largeur, hauteur, couleur) {
    // Je créé un pointeur vers le canvas de la page HTML
    let canvas = document.getElementById('canvas');
    // Je précise la largeur du canvas
    canvas.setAttribute('width', largeur);
    // Je précise la longueur du canvas
    canvas.setAttribute('height', hauteur);
    // Je lance la fonction canvasMouseMove si je bouge la souris
    canvas.addEventListener('mousemove', e => canvasMouseMove(canvas, e), false);
    // Je lance la fonction canvasMouseDown si j'appuie sur le bouton gauche de la souris
    canvas.addEventListener('mousedown', e => canvasMouseDown(canvas, e), false);
    // Je lance la fonction canvasMouseUp si je relâche le bouton gauche de la souris
    canvas.addEventListener('mouseup', e => canvasMouseUp(canvas, e), false);
    // J'initialise le click à faux  
    canvas.click = false;
    // Je récupère le contexte du canvas
    ctx = canvas.getContext('2d');
    // Je définis une couleur (passée en paramètre) pour le dessin
    ctx.fillStyle = couleur;
    // Je remplis la surface avec cette couleur
    ctx.fillRect(0, 0, largeur, hauteur);
    // Je créé un canvas temporaire de la même taille que le canvas principal
    canvas.temporaire = document.createElement('canvas');
    canvas.temporaire.width = canvas.width;
    canvas.temporaire.height = canvas.height;
    // Je créé le pointeur vers le contexte du canvas temporaire
    canvas.temporaireCtx = canvas.temporaire.getContext('2d');
    canvas.forme = null;
    canvas.color = null;
    couleur2 = "black";
    canvas.taille = null;
    taille = 20;
    // Je retourne le canvas
    return canvas;
}

//Dessine une ligne
function drawLine(canvas, x1, y1, x2, y2) {
    ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = couleur2;
    ctx.lineWidth = taille;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

// Dessine une image
function drawImage(canvas, x, y, image) {
    ctx = canvas.getContext('2d');
    ctx.drawImage(image, x, y);
}

function drawText(canvas, x, y, text) {
    text = input_text;
    ctx = canvas.getContext('2d');
    ctx.font = taille + 'px serif';
    ctx.fillStyle = couleur2;
    ctx.fillText(text, x, y);
}

function drawHand(canvas, x1, y1, x2, y2) {
    ctx.lineWidth = taille;
    ctx = canvas.getContext('2d');
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = couleur2;
    ctx.stroke();
}

function drawrect(canvas, x1, y1, x2, y2) {
    ctx.lineWidth = taille;
    ctx = canvas.getContext('2d');
    ctx.strokeRect(x1, y1, x2, y2);
    ctx.strokeStyle = couleur2;
    ctx.stroke();
}

function drawcircle(canvas, x1, y1, x2, y2) {
    ctx.lineWidth = taille;
    ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(x1, y1, Math.abs(x2 - x1), 0, 2 * Math.PI);
    ctx.strokeStyle = couleur2;
    ctx.stroke();
}

function drawTriangle(canvas, x1, y1, x2, y2) {
    ctx.lineWidth = taille;
    ctx = canvas.getContext('2d');
    ctx.lineCap = "round";
    ctx.beginPath()
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y1);
    x3 = (x2 + x1) / 2;
    ctx.lineTo(x3, y2);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = couleur2;
    ctx.stroke();
}

function SaveCanvas() {
    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(canvas.msToBlob(), "canvas-image.png");
    } else {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = canvas.toDataURL();
        a.download = "canvas-image.png";
        a.click();
        document.body.removeChild(a);
    }
}


function Gomme(canvas, x1, y1, x2, y2) {
    ctx.lineWidth = taille;
    ctx = canvas.getContext('2d');
    ctx.lineCap = "round";
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawLosange(canvas, x1, y1, x2, y2) {
    ctx.lineWidth = taille;
    ctx = canvas.getContext('2d');
    ctx.strokeStyle = couleur2;
    ctx.lineCap = "round";
    ctx.beginPath()
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, (y2 + y1) / 2);
    ctx.lineTo(x1, y2);
    ctx.lineTo((x2 + x1) / 2 * 2, (y2 + y1) / 2);
    ctx.lineTo(x1, y1);
    ctx.stroke();
}