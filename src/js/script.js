
document.querySelector('.btn-register').addEventListener('click', (event) => {
    event.preventDefault();

    let inputs = document.querySelectorAll('.inputs');
    let campos = document.querySelectorAll('.campo-obrigatorio');

    inputs.forEach(input => input.classList.remove('error'));
    campos.forEach(campo => campo.classList.remove('error'));

    inputs.forEach((input, index) => {
        if (input.value.trim() === '') {
            input.classList.add('error');
            campos[index].classList.add('error');
        }
    });
});
