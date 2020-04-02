import React from "react";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import api from "../../services/api";
import "./styles.css";

export default function Profile() {
  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");
  const [incidents, setIncidents] = React.useState([]);
  const headerProperties = {
    headers: {
      Authorization: ongId
    }
  };

  React.useEffect(() => {
    api.get("/profile", headerProperties).then(response => {
      setIncidents(response.data);
    });
  }, [headerProperties]);

  const handleDeleteIncident = id => async () => {
    try {
      await api.delete(`incidents/${id}`, headerProperties);
      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) {}
  };

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the Hero" />
        <span>{`Bem vindo, ${ongName}`}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower syze={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Caso:</strong>
            <p>{incident.title}</p>

            <strong>Descrição:</strong>
            <p>{incident.description}</p>

            <strong>Valor:</strong>
            <p>{incident.value}</p>

            <button type="button" onClick={handleDeleteIncident(incident.id)}>
              <FiTrash2 size={20} color="" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
