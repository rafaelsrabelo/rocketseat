import React, { useState } from 'react';

import './App.css';
import Header from './components/Header';
/**
 * Componente: 
 * Propriedade: Componente pai para filho
 * Estado e Imutabilidade: 
 */

export default function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de App', 'Front-end web']);

  // usteState retorna um array com duas posicões
  //
  // 1. Variavel com seu valor inicial
  // 2. Função para atualizarmos esse valor

  function handleAddProject() {
  //  projects.push(`Novo projeto ${Date.now()}`);
    setProjects([...projects, `Novo projeto ${Date.now()}`]);

    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button className="" type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}
