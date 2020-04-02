import React from "react";
import "./styles.css";
import logoImg from "../../assets/logo.svg";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

export default function NewIncident() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [value, setValue] = React.useState("");
  const ongId = localStorage.getItem("ongId");
  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value
    };

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      });
      history.push("/profile");
    } catch (error) {
      alert("Erro ao cadastrar novo incidente");
    }
  }

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

        <form onSubmit={handleNewIncident}>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Título"
          />
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Descrição"
          />
          <input
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Valor (apenas o número)"
          />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
