const botao = document.getElementById('correta');
const secao = document.getElementById('section-script');
let intervalId;

botao.addEventListener('click', function() {
    secao.style.background = 'linear-gradient(#00b300, #00ff00)';
  
  intervalId = setInterval(function() {
    secao.style.background = '';
    clearInterval(intervalId);
  }, 3000);
});
const botaoErrado = document.getElementById('errada');
const botaoErradoTwo = document.getElementById('errada-two');
const botaoErradoThree = document.getElementById('errada-three');


botaoErradoTwo.addEventListener('click', function() {
  secao.style.background = 'linear-gradient(#660000, #b20000)';
  console.log("oi")
  intervalId = setInterval(function() {
    secao.style.background = '';
    clearInterval(intervalId);
    
  }, 3000);
})
botaoErradoThree.addEventListener('click', function() {
  secao.style.background = 'linear-gradient(#660000, #b20000)';
  console.log("oi")
  intervalId = setInterval(function() {
    secao.style.background = '';
    clearInterval(intervalId);
    
  }, 3000);
})

botaoErrado.addEventListener('click', function() {
  secao.style.background = 'linear-gradient(#660000, #b20000)';
  console.log("oi")
  intervalId = setInterval(function() {
    secao.style.background = '';
    clearInterval(intervalId);
    
  }, 3000);
})
