import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import { featuredProducts } from '../data/products'

function Home() {
  return (
    <>
      <Hero
        title="Pastelería SM"
        text="Pastelería artesanal hecha con amor para acompañarte en cada momento especial."
        isHome
      >
        <Link to="/contacto" className="btn">
          Contáctanos
        </Link>
      </Hero>

      <section>
        <h2>Productos Destacados</h2>
        <div className="contenedor-cards">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} buttonText="Ver más" to="/productos" />
          ))}
        </div>
      </section>

      <section className="productos">
        <h2>Sobre Nosotros</h2>
        <p>
          En Pastelería SM creemos que cada celebración merece un sabor especial. Por eso, elaboramos tortas,
          postres y productos artesanales con ingredientes de primera calidad, cuidando cada detalle con dedicación
          y amor. Nuestro compromiso es brindar productos frescos, deliciosos y una atención personalizada.
        </p>
      </section>
    </>
  )
}

export default Home
