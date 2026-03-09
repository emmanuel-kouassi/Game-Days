import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./vote6.scss";

const Vote6 = () => {
    const navigate = useNavigate();
    const [selectedGames, setSelectedGames] = useState<string[]>([]);


    const gamesList = [
        "Mario Kart", "Mario Party", "Just Dance", "Gang Beasts", "FC 25/26",
        "NBA 2k26", "Smash Bros Ultimate", "Dragon Ball Fighter Z", "Naruto Storm 4",
        "Beat Saber", "Job Simulator", "Superhot VR", "Peut importe je veux juste découvrir",
        "Je ne suis pas intéressé(e) par la VR"
    ];

    const toggleGame = (game: string) => {
        if (selectedGames.includes(game)) {
            setSelectedGames(selectedGames.filter(g => g !== game));
        } else {
            setSelectedGames([...selectedGames, game]);
        }
    };

    return (
        <div className="vote6-container">
            <button className="back-btn" onClick={() => navigate("/vote1")}>
                ← Retour
            </button>

            <main className="vote-content">
                <h2 className="title">
                    Quels jeux grand public aimerais-tu retrouver dans l'espace Découverte ?
                </h2>

                <div className="scroll-box">
                    <p className="disclaimer">
                        (Seuls les deux jeux ayant obtenu le plus de votes seront sélectionnés, 
                        en tenant compte également de l'avis des organisateurs)
                    </p>
                    
                    <div className="games-list">
                        {gamesList.map((game) => (
                            <button 
                                key={game}
                                className={`game-option ${selectedGames.includes(game) ? "active" : ""}`}
                                onClick={() => toggleGame(game)}
                            >
                                {game}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="footer-actions">
                    <button className="btn-next" onClick={() => navigate("/vote7")}>
                        Suivant
                    </button>
                    <button className="btn-skip" onClick={() => navigate("/vote7")}>
                        Passer
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Vote6;