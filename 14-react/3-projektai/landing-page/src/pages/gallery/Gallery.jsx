import Container from "react-bootstrap/Container";
import "./Gallery.scss";

const Gallery = ({ title, description, images }) => {
  return (
    <Container fluid>
      <div className="gallery-title">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="images-container">
        {images.map((item) => (
         <div className="image">
            <img key={item.id} src={item.url} className="gallery-image" alt={item.title}/>
            {/* <div className="image-title">{item.title}</div> */}
         </div>
        ))}
      </div>
    </Container>
  );
};

export default Gallery;
