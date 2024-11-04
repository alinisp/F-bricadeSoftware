document.addEventListener('DOMContentLoaded', function() {
    const divcard = document.querySelectorAll('.miniatura');
    const imgAmpliada = document.getElementById('imgAmpliada');

    divcard.forEach(function(miniatura) {
      miniatura.addEventListener('click', function() {
        imgAmpliada.src = this.src;
        imgAmpliada.style.display = 'block';
        this.style.opacity = '1';
        divcard.forEach(function(outro) {
          if (outro !== miniatura) {
            outro.style.opacity = '0.4';
        }
      });
    });
  });
});                 