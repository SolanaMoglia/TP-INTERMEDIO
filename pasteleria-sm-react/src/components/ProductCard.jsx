import { Link } from 'react-router-dom'

function ProductCard({ image, alt, title, description, buttonText = 'Comprar', to = '/pedidos' }) {
  return (
    <article className="card">
      <img src={image} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={to} className="btn-comprar">
        {buttonText}
      </Link>
    </article>
  )
}

export default ProductCard
