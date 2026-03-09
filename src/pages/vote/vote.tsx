import React from "react";

import "./vote.scss";

const Vote = () => {
	return (
		<div className="vote">
			{/* Bouton Retour en haut à gauche */}
			<button className="back-button" onClick={() => window.location.href = "/index.tsx"}>
				<img src="/icons/arrow-left.svg" alt="" />
				<span>Retour</span>
			</button>

			<main className="content">
				<h1>Faisons connaissance avant de jouer</h1>
				
				<p>
					Avant de voter pour tes jeux préférés, prends un instant pour répondre 
					à ces quelques questions sur ta formation et ton rapport au jeu vidéo. 
					Tes réponses nous aideront à mieux connaître les participants et à 
					préparer une journée encore plus adaptée à vos envies.
				</p>

				<button className="next-button">
					Suivant
				</button>
			</main>
		</div>
	);
};

export default Vote;
