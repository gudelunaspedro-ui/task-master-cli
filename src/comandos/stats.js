import { carregarTarefas } from '../armazenamento.js';

export async function verStats() {
  const tarefas = await carregarTarefas();

  if (tarefas.length === 0) {
    console.log('Sem tarefas ainda.');
    return;
  }

  const concluidas = tarefas.filter(t => t.concluida).length;
  const pendentes = tarefas.length - concluidas;
  const percentual = Math.round((concluidas / tarefas.length) * 100);

  console.log('\n📊 Estatísticas:\n');
  console.log(`Total: ${tarefas.length}`);
  console.log(`Concluídas: ${concluidas}`);
  console.log(`Pendentes: ${pendentes}`);
  console.log(`Progresso: ${percentual}%`);
  console.log('');
}
