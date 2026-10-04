function Gallery({ images }) {
  return (
    <section className="galeria-personalizados">
      {images.map((image) => (
        <img key={image.id} src={image.src} alt={image.alt} />
      ))}
    </section>
  )
}

export default Gallery
