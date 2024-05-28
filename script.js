$(document).ready(function(){
        
    var enviaForm = $('#enviar');
    
    enviaForm.on('click', function(e){
        console.log("clicou");
        e.preventDefault(); // Impede o envio do formulário
        
        const valuesA = document.getElementById('valuesA').value.split(',').map(Number);
        const valuesB = document.getElementById('valuesB').value.split(',').map(Number);

        if (valuesA.length !== valuesB.length) {
            alert('As listas de valores A e B devem ter o mesmo comprimento.');
            return;
        }

        const sums = valuesA.map((a, i) => a + valuesB[i]);

        document.getElementById('result').innerText = `Somas: ${sums.join(', ')}`;
    });
});