const ImageCard = ({ image, onClick }) => {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description || 'Image'}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;


