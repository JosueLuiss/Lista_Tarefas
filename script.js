var listaTarefas = [];

function adicionarTarefa() {
  var novaTarefa = document.getElementById("campoTarefa").value;
  
  if (novaTarefa === "") {
    confirm("Digite uma tarefa!");
    return;
  }
  
  listaTarefas.push(novaTarefa);
  
  document.getElementById("campoTarefa").value = "";
  
  exibirListaTarefas();
}

function exibirListaTarefas() {
  var lista = document.getElementById("listaTarefas");
  
  lista.innerHTML = "";
  
  for (var i = 0; i < listaTarefas.length; i++) {
    var tarefa = listaTarefas[i];
    var itemLista = document.createElement("li");
    
    itemLista.appendChild(document.createTextNode(tarefa));
    
    lista.appendChild(itemLista);
  }
}