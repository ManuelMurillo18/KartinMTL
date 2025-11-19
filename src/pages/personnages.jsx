 import "./personnageDisplay.css";
 import kevin from "../assets/Kevin2.png";
 import goldenAge from "../assets/GoldenAge.png";
 import manoeuvre from "../assets/Manoeuvre.png";
 import police from "../assets/Police.png";
 import ben from "../assets/Ben.png";
 import cone from "../assets/cone.png";
 import capDeRoue from "../assets/capDeRoue.png";
 import bidon from "../assets/bidon.png";
 export default function Personnages()
 {
   const characters = [
    {
      name: "Kevin",
      image: kevin,
      info: "La classe Kevune possède deux habiletés distinctes orientées vers le contrôle de zone et l’avantage stratégique en course. Son habileté active, Le Nuage du Ti-Coune, nécessite l’obtention préalable de l’item Vapoteuse. Une fois activée, elle génère une zone de fumée opaque réduisant la visibilité et pouvant perturber la maniabilité des adversaires qui la traversent, permettant ainsi au joueur de ralentir ou désorganiser le groupe. Sa seconde habileté, l’habileté ultime Straight Pipe, devient disponible uniquement lorsque la jauge d’énergie d’ultime est entièrement remplie. Lors de son activation, elle offre une amélioration temporaire de la vitesse ou de l’accélération du véhicule, donnant au joueur un avantage de déplacement significatif pour effectuer une manœuvre décisive. Une fois l’effet terminé, la jauge est automatiquement réinitialisée à zéro."
    },
    {
      name: "Âge d'or",
      image: goldenAge,
      info: "La classe L’Âge d’or possède deux habiletés distinctes, soit une habileté utilisant un item récupérable sur la piste ainsi qu’une habileté ultime activée lorsque la jauge d’énergie est complètement remplie. L’habileté Entretien dentaire devient disponible lorsqu’un item est obtenu grâce à une boîte d’item et se manifeste par l’apparition de son icône en haut à droite de l’écran; cette habileté peut être utilisée une seule fois, puisqu’elle disparaît immédiatement après consommation. L’habileté ultime Hôpital express est réservée exclusivement à la classe L’Âge d’or et peut être activée lorsque la barre d’énergie ultime atteint son maximum; une fois lancée, elle offre un effet temporaire prédéfini avant de se désactiver automatiquement, puis la jauge d’ultime se réinitialise à zéro, exigeant une nouvelle accumulation avant une future utilisation."
    },
    {
      name: "Manœuvre spécialisée",
      image: manoeuvre,
      info: "La classe Manœuvre Spécialisée possède deux habiletés axées sur l’amélioration temporaire de ses performances en course en fonction de la consommation d’un item spécifique. L’habileté BDR (bière de route) devient disponible lorsqu’un item est obtenu à partir d’une boîte d’item et se manifeste par l’apparition de son icône en haut à droite de l’écran; lorsqu’elle est activée, elle augmente le taux d’ivresse du personnage tout en améliorant ses statistiques, et chaque utilisation ajoute une unité au compteur de bière consommée, après quoi l’item disparaît. Lorsque suffisamment de consommations ont été accumulées, la jauge d’énergie ultime se remplit et permet l’activation de l’habileté ultime Conduite Intoxiquée, qui augmente temporairement toutes les statistiques de conduite au maximum et applique un effet visuel de type vibration à l’écran du joueur pour représenter l’état d’intoxication; à la fin de la durée de l’habileté, l’effet cesse et le compteur de bière est réinitialisé à zéro, nécessitant une nouvelle progression de consommation pour une future activation."
    },
    {
      name: "Police",
      image: police,
      info: "La classe Policier possède deux habiletés distinctes : une habileté obtenue aléatoirement via les items et une habileté ultime accessible après remplissage complet de la jauge d’énergie. L’habileté Bouge, Tabarnak! devient disponible uniquement si le joueur a sélectionné la classe Policier et qu’il reçoit cet item dans une boîte aléatoire; une fois acquis, son icône apparaît dans le coin supérieur droit de l’écran et l’habileté peut être utilisée une seule fois puisqu’elle disparaît immédiatement après activation. De plus, la classe possède l’habileté ultime Abus de pouvoir, qui peut être déclenchée lorsque la jauge d’habileté ultime est entièrement remplie; le joueur peut alors activer l’ultime via le bouton prévu à cet effet, après quoi la jauge se réinitialise automatiquement à zéro, nécessitant un nouveau cycle de recharge pour une prochaine utilisation."
    },
    {
      name: "Ben BS Sigouin",
      image : ben,
      info : "La classe Ben BS Sigouin utilise un système d’accumulation d’items ainsi qu’une mécanique d’habileté ultime liée à une jauge d’énergie. L’item Demande de chômage devient disponible uniquement si le joueur a sélectionné la classe et l’obtient via la distribution aléatoire d’items. Lorsqu’il est acquis, il est ajouté à un compteur spécifique et celui-ci est affiché en temps réel dans l’interface afin d’indiquer la quantité totale détenue par le joueur. Cet item peut être consommé ou utilisé conformément aux règles établies par la classe.L’habileté ultime Le 1er du mois est exclusivement accessible à la classe Ben BS Sigouin et requiert le remplissage complet de la barre d’énergie ultime, laquelle est alimentée par les actions prévues dans la logique de progression. Une fois la barre maximale atteinte, l’habileté peut être activée via le bouton d’exécution prévu à cette fin, déclenchant ses effets pour une durée déterminée par les paramètres système. À l’expiration de la durée d’effet, la barre d’énergie ultime est automatiquement réinitialisée à 0, réactivant ainsi le cycle d’accumulation pour une prochaine utilisation."
    },
    {
      name: "Cône Orange",
      image : cone,
      info : "Fameux cône orange à éviter"
    },
    {
      name : "Cap de roue",
      image : capDeRoue,
      info : "Cap de roue drôlement rebondissant"
    },
    {
      name : "Bidon d'essence",
      image: bidon,
      info: "Bidon d'essence qui te donne une petite accélération"
    }

  ];
    return ( <div className="characters-container">
      {characters.map((char, index) => (
        <div className="character-row" key={index}>
          
          <div className="character-box image-box">
            <img src={char.image} alt={char.name} />
          </div>

          <div className="character-box name-box">
            <h3>{char.name}</h3>
          </div>

          <div className="character-box info-box">
            <p>{char.info}</p>
          </div>

        </div>
      ))}
    </div>);
 }