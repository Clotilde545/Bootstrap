import {
    Image_List
} from './js/nom_image.js';
console.log("test");

class Photos {
    constructor(domElt) {
        this.root = domElt;
    }
    init('this.root') {
        //Ecrire le contenu de image liste avec une virgule entre les noms
        this.root.innerHTML = this.root.displayList(Image_List);
    }

    displayList(list) {
        //Lire élément par élément et ajout autour de <li><img src="${img}" /> </li>
        //position des images par rapport à HTML
        const htmlImgArray = list.map(img => `<li><img src="./img/${img}" /> </li>`);
        //Concaténation des li faite au dessus dans un tableau
        const htmlImgString = htmlImgArray.join('');
        //join() si rien n'est renseigné il met un caractère virgule, si on ne veut rien on met ''


        //mise du tableau dans ul
        return `<ul>${htmlImgString}</ul>`;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    console.log("fonction addEventListener");
    //On cherche le lieu où on va insérer la galerie
    // ne pas utiliser le getElementsByClass, même si un seul élément existe
    // il considère que c'est un tableau d'où querySelector
    //Pas de problème pour getElementById car Id est unique
    const photos = new Photos(document.querySelector('.component_photos'));
    console.log("class name fait ");
    //Fonction init se situant dans le fichier thumbnails
    photos.init();
    console.log("init");
});