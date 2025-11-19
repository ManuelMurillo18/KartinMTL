import PhotoContainer from "../components/photoContainer";
import colinou from "../assets/colinou.jpg";
import jordann from "../assets/JordannPrime.png";
import manu from "../assets/manuPrime.jpeg";
export default function Home() {
  const images = [];
  return (
    <>
      <h1>Bienvenue à Karting Montréal</h1>

      <p style={{ marginBottom: 50 }}>
        Notre projet de fin d’année est une parodie inspirée de Mario Kart, mais
        adaptée à l’univers coloré et parfois chaotique de Montréal. On y
        retrouve des éléments familiers comme les cônes oranges, la construction
        en arrière plan , les caps de roues perdus et les personnages marquants
        de nôtre société, ce qui donne une touche locale amusante et
        reconnaissable. Le but est uniquement humoristique et divertissant :
        aucune référence n’est faite pour se moquer négativement, mais plutôt
        pour rire ensemble de petites réalités bien montréalaises.
      </p>

      <iframe
        width="800"
        height="500"
        src="https://www.youtube.com/embed/edw228IViOU"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Titre de la vidéo"
      ></iframe>
      <h1 style={{ marginTop: 20 }}> Membre de l'équipe </h1>
      <div
        style={{
          marginTop: 30,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <PhotoContainer photoUrl={colinou} name={"Colin Dupré"} />
        <PhotoContainer photoUrl={jordann} name={"Jordann Daoust"} />
        <PhotoContainer photoUrl={manu} name={"Manuel Murillo"} />
      </div>
    </>
  );
}
