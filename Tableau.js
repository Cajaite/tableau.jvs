/**                 Tableau
 * 
 * Declare un tableau vide names 
 * Ajouter "lucas", "gabriel", et "kader" dans le tableau via la methode push
 * 
 * Pour chaque element du tableau
 * 
 * Ajouter a la fin "va manger"
 * Afficher chaque element 
 * 
 */

let names=[];
names.push('lucas',"gabriel",'kader');

names.forEach(name =>{
    name += 'va manger ';
    console.log(name)
})