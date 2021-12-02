const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const etat = document.getElementById('titre');
let play = x=0 , y=0;
const count = document.getElementById('play');


const ordi = [
    rock ,paper ,scissors
];



let jeu = function (elements, equality ,loose , win) {
    elements.addEventListener('click', function (e){
        let rdm = Math.floor(Math.random()*ordi.length);
        play++;
        if (ordi[rdm] === equality) {
            etat.innerHTML = "égalité";
            console.log(x ,y);
        }
        if (ordi[rdm] === loose) {
            etat.innerHTML = "perdu";
            console.log(x ,y);
            y++;
        }
        if (ordi[rdm] === win) {
            etat.innerHTML = "gagné";
            console.log(x ,y);
            x++;
        }
        count.innerHTML = "win = " + x + "  loose = " + y ;
    })
}
jeu(rock ,rock ,paper ,scissors);
jeu(paper , paper , scissors ,rock);
jeu(scissors ,scissors ,rock , paper);