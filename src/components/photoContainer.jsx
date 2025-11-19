import "./photo.css";

export default function PhotoContainer({ photoUrl, name }) {
  return (
   <div className="photo-wrapper"> 
    <div className="avatar-container">
      <div className="avatar">
        <img src={photoUrl} alt="Membre de Karting Montréal" />
      </div>
    </div>
    <p>{name}</p>
   </div>
  );
}