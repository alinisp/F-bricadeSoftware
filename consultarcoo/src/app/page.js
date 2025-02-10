"use client"; 
import React, { useState } from "react";
import styles from "./page.module.css"; 

function ConsultarCooperador() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    // Aqui você deve fazer a chamada para o seu banco de dados
    // Exemplo de chamada a uma API fictícia
    const response = await fetch(`/api/search?query=${searchTerm}`);
    const data = await response.json();
    setResults(data);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Consultar</h1>
      <div className={styles.searchBar}>
        <input 
          type="text" 
          placeholder="Consultar" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleSearch} className={styles.button}>🔍</button>
      </div>
      <div className={styles.results}>
        {results.map((result, index) => (
          <div key={index} className={styles.resultItem}>
            {result.name} {/* Ajuste conforme a estrutura do seu dado */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConsultarCooperador;