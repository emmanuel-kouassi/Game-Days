import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./vote1.scss"; 

const Vote4 = () => {
    const navigate = useNavigate();
    

    const [role, setRole] = useState("");
    const [experienceTournoi, setExperienceTournoi] = useState("");

    return (
        <div className="vote-page">
            <button className="back-button" onClick={() => navigate("/vote3")}>
                <img src="/icons/arrow-left.svg" alt="" />
                <span>Retour</span>
            </button>

            <main className="content">
                <div className="cards-container">
                    <div className="question-card">
                        <h2>Comment souhaites-tu participer ?</h2>
                        <div className="options">
                            {[
                                "En tant que joueur",
                                "En tant que spectateur",
                                "En tant que bénévole / organisateur"
                            ].map((option) => (
                                <button 
                                    key={option}
                                    className={`option-btn ${role === option ? "selected" : ""}`}
                                    onClick={() => setRole(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="question-card">
                        <h2>As-tu déjà participé à un tournoi de jeu vidéo ?</h2>
                        <div className="options">
                            {[
                                "Oui",
                                "Non",
                                "Non, j'aimerais essayer"
                            ].map((option) => (
                                <button 
                                    key={option}
                                    className={`option-btn ${experienceTournoi === option ? "selected" : ""}`}
                                    onClick={() => setExperienceTournoi(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <button className="next-button" onClick={() => window.location.href = "/vote5"}>
                    Suivant
                </button>
            </main>
        </div>
    );
};

export default Vote4;