import React from "react";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import "./styles.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the Hero" />
        <span></span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower syze={18} color="#E02041" />
        </button>
      </header>

      <h1></h1>

      <ul>
        <li>
          <strong>Caso:</strong>
          <p></p>

          <strong>Descrição:</strong>
          <p></p>

          <strong>Valor:</strong>
          <p></p>

          <button type="button">
            <FiTrash2 size={20} color="" />
          </button>
        </li>
      </ul>
    </div>
  );
}
