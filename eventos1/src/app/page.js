"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

function Eventos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
  });

  const openModal = (title, description, date, time, location) => {
    setModalData({ title, description, date, time, location });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.body}>
      <div className={styles.eve}>
        <h1 className={styles.agaum}>Eventos</h1>
      </div>

      <div className={styles.divCards}>
        <div
          className={styles.divCard}
          onClick={() =>
            openModal(
              "Evento 1",
              "Descrição do Evento 1",
              "Data do Evento 1",
              "Horário do Evento 1",
              "Local do Evento 1"
            )
          }
        >
          <a href="#">
            <img className={styles.imgNh} src="/evet.jpg" alt="imagem aqui" />
          </a>
          <h3 className={styles.h3}>Evento 1</h3>
          <p className={styles.para}>Eventos Eventos Eventos Eventos</p>
        </div>

        <div
          className={styles.divCard}
          onClick={() =>
            openModal(
              "Evento 2",
              "Descrição do Evento 2",
              "Data do Evento 2",
              "Horário do Evento 2",
              "Local do Evento 2"
            )
          }
        >
          <a href="#">
            <img className={styles.imgNh} src="/evet.jpg" alt="imagem aqui" />
          </a>
          <h3 className={styles.h3}>Evento 2</h3>
          <p className={styles.para}>Eventos Eventos Eventos Eventos</p>
        </div>

        <div
          className={styles.divCard}
          onClick={() =>
            openModal(
              "Evento 3",
              "Descrição do Evento 3",
              "Data do Evento 3",
              "Horário do Evento 3",
              "Local do Evento 3"
            )
          }
        >
          <a href="#">
            <img className={styles.imgNh} src="/evet.jpg" alt="imagem aqui" />
          </a>
          <h3 className={styles.h3}>Evento 3</h3>
          <p className={styles.para}>Eventos Eventos Eventos Eventos</p>
        </div>
      </div>

      {modalOpen && (
        <div id={styles.modal} className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            <h2 id={styles.modalTitle}>{modalData.title}</h2>
            <img id={styles.modalImage} src="/evet.jpg" alt="imagem do evento" />
            <p>
              <strong>Descrição:</strong> <span id={styles.modalDescription}>{modalData.description}</span>
            </p>
            <p>
              <strong>Data:</strong> <span id={styles.modalDate}>{modalData.date}</span>
            </p>
            <p>
              <strong>Horário:</strong> <span id={styles.modalTime}>{modalData.time}</span>
            </p>
            <p>
              <strong>Local:</strong> <span id={styles.modalLocation}>{modalData.location}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Eventos;