import React from "react";
import "./styles.css";
import logoImg from "../../assets/logo.svg";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function NewIncident() {
  return (
    <div className="incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo incidente</h1>
          <p>
            Detalhe o ocorrido para dar informações ao Herói que irá te ajudar!
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form>
          <input placeholder="Título" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor (apenas o número)" />
          <button className="button" type="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
