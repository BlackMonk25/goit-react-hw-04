import ImageCard from './ImageCard';

const ImageGallery = ({ images, onImageClick }) => {
  if (!images.length) {
    return <p>No images found.</p>;
  }

  return (
    <ul>
      {images.map(image => (
        <li key={image.id}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;


