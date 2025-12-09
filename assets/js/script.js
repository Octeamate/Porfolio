// Tableau qui stocke les projets (lien + image)
const projets = [];

// Fonction pour ajouter un projet avec l'image
function ajouterProjet(lien, image) {
    projets.push({ lien: lien, image: image }); // objet {lien, image}
    afficherProjets();  // mise à jour de l'affichage
}

// Fonction pour afficher les projets dans la page
function afficherProjets() {
    const galerie = document.getElementById("galerie"); // conteneur
    galerie.innerHTML = ""; // je vide avant de réafficher

    projets.forEach((projet, index) => {
        // Création du lien
        const monLien = document.createElement("a");
        monLien.textContent = `Projet ${index + 1}`;
        monLien.href = projet.lien;
        monLien.target = "_blank"; // ouvre dans un nouvel onglet

        // Création de l'image
        const monImage = document.createElement("img");
        monImage.src = projet.image;
        monImage.alt = `Image du projet ${index + 1}`;
        monImage.style.width = "400px";

        // Ajout du lien et l'image dans la galerie
        galerie.appendChild(monLien);
        galerie.appendChild(monImage);
        galerie.appendChild(document.createElement("br"));
    });
}

// Ajout des projets avec leurs images
ajouterProjet("https://td-typo.vercel.app/", "assets/img/photo1.png");
ajouterProjet("https://style-css-iota.vercel.app/", "assets/img/photo2.png");

// Prochains projets ... ajouterProjet("lien","image")