import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./vote1.scss"; 

const Vote3 = () => {
    const navigate = useNavigate();
    

    const [typeJeu, setTypeJeu] = useState("");
    const [participation, setParticipation] = useState("");

    return (
        <div className="vote-page">
            {/* Bouton Retour qui force le retour vers vote1 */}
            <button className="back-button" onClick={() => navigate("/vote1")}>
                <img src="/icons/arrow-left.svg" alt="" />
                <span>Retour</span>
            </button>

            <main className="content">
                <div className="cards-container">
                    {/* Carte 1 : Type de jeux */}
                    <div className="question-card">
                        <h2>Quel type de jeux préfères-tu ?</h2>
                        <div className="options">
                            {[
                                "Compétitifs", 
                                "Coopératifs", 
                                "Immersifs", 
                                "Casual / fun", 
                                "Rétro", 
                                "Je ne joue pas"
                            ].map((option) => (
                                <button 
                                    key={option}
                                    className={`option-btn ${typeJeu === option ? "selected" : ""}`}
                                    onClick={() => setTypeJeu(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Carte 2 : Participation */}
                    <div className="question-card">
                        <h2>Comptes-tu participer à la Journée du Jeu Vidéo ?</h2>
                        <div className="options">
                            {[
                                "Oui, toute la journée", 
                                "Seulement une partie de la journée", 
                                "Je passerai juste voir", 
                                "Non"
                            ].map((option) => (
                                <button 
                                    key={option}
                                    className={`option-btn ${participation === option ? "selected" : ""}`}
                                    onClick={() => setParticipation(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bouton Suivant pour la suite du flux */}
                <button className="next-button" onClick={() => window.location.href = "/vote4"}>
                    Suivant
                </button>
            </main>
        </div>
    );
};

export default Vote3;