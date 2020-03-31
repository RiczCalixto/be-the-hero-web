import React from "react";
import "./styles.css";
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Logo Be The Hero" srcset="" />
        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="Seu ID" />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tem cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" srcset="" />
    </div>
  );
}
