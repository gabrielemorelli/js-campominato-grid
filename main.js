
/*abbilito l'evento listener sul click del bottone play e attivo la funzione gioca*/

document.getElementById('play').addEventListener('click', gioca);

/*funzione gioca*/
function gioca() {

    const sb = document.querySelector('#difficolta');
    const grid = document.getElementById('grid');
    grid.innerHTML = "";
    let numerocelle = 100;
   
    /*verifico il numero delle celle dentro la griglia in base al livello di difficoltà*/
    if (sb.value == 'facile') {
        numerocelle = 100;

    } else if (sb.value == 'media') {
        numerocelle = 81;

    } else {
        numerocelle = 49;

    }

    /*creo la griglia*/

    creategrid(numerocelle, sb.value);
  

/*funzione creazione della griglia*/
    function creategrid(maxvalue, diffic) {

        const gridElement = document.getElementById('grid');

        const createGridElement = () => {
            const node = document.createElement('div');
            node.classList.add('square', diffic);

            return node;
        }

/*creazione della griglia e aggiuanta  del listener del click sulla cella*/        
        for (let i = 1; i <= maxvalue; i++) {

            const node = createGridElement();

            node.addEventListener('click', handleCell);

            node.innerText = i;
            gridElement.appendChild(node);

        }
        return true;
    }

/*operazioni sulla cella dopo il click*/
    function handleCell() {

        this.classList.add('clicked');
        this.removeEventListener('click', handleCell);
        const cell = parseInt(this.innerText);


    }





}

