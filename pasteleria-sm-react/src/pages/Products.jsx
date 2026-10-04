import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function Products() {
  return (
    <>
      <Hero title="Nuestros Productos" />

      <section className="productos">
        <h2>Tortas Artesanales</h2>
        <p>
          En Pastelería SM elaboramos cada producto con materia prima de primera calidad, seleccionando
          cuidadosamente cada ingrediente para lograr sabores únicos y una presentación especial.
        </p>

        <div className="contenedor-cards">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Products
