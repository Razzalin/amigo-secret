let participantes = [];

function adicionar() {
  let nome = document.getElementById('nome').value;
  if (nome) {
    participantes.push(nome);
    atualizarLista();
    document.getElementById('nome').value = '';
  }
}

function atualizarLista() {
  let lista = document.getElementById('lista');
  lista.innerHTML = '';
  participantes.forEach(p => {
    let li = document.createElement('li');
    li.textContent = p;
    lista.appendChild(li);
  });
}

function sortear() {
  if (participantes.length < 2) {
    alert('Adicione pelo menos 2 participantes!');
    return;
  }
  
  let sorteio = [...participantes];
  sorteio.sort(() => Math.random() - 0.5);
  
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
  
  for (let i = 0; i < sorteio.length; i++) {
    let amigo = sorteio[(i + 1) % sorteio.length];
    let li = document.createElement('li');
    li.textContent = `${sorteio[i]} → ${amigo}`;
    resultado.appendChild(li);
  }
}