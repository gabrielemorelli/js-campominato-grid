creategrid(100, 'facile')


const bottone = document.getElementById('play');

const sb = document.querySelector('#difficolta');


bottone.addEventListener('click',
    function () {
        removegrid();
        if (sb.value == 'facile') {

            creategrid(100, sb.value);

        } else if (sb.value == 'media') {

            creategrid(81, sb.value);

        } else {

            creategrid(49, sb.value);
        }
    })



function creategrid(maxvalue, diffic) {


    const gridElement = document.getElementById('grid');

    const createGridElement = () => {
        const node = document.createElement('div');
        node.classList.add('square', diffic);

        return node;
    }

    for (let i = 1; i <= maxvalue; i++) {

        const node = createGridElement();

        node.addEventListener('click', function () {
            console.log(this);
            this.classList.add('clicked');
        });
        let numb= document.createTextNode (i);
        gridElement.appendChild(node);
        node.appendChild(numb);
       

    }
}
function removegrid() {
    var qs = document.querySelectorAll(".square");
    let j = 0
    while (j < qs.length) {

        qs[j].remove();
        j++;

    }

}






