import { useState } from 'react'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import { galleryImages } from '../data/galleryImages'

const initialCustomOrder = {
  nombre: '',
  telefono: '',
  email: '',
  fechaEvento: '',
  tamanio: '',
  pisos: '',
  relleno: '',
  nombreTorta: '',
  numero: '',
  tematica: '',
  descripcion: '',
}

const getToday = () => new Date().toISOString().split('T')[0]

function CustomOrders() {
  const [form, setForm] = useState(initialCustomOrder)

  const handleChange = (event) => {
    const { name, value } = event.target
    console.log('Cambio en pedido personalizado:', name, value)
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!event.currentTarget.checkValidity()) {
      alert('Error. Revise la informacion ingresada y vuelva a enviar')
      return
    }

    if (form.fechaEvento < getToday()) {
      alert('Error. Revise la informacion ingresada y vuelva a enviar')
      return
    }

    console.log('Pedido personalizado enviado:', form)
    alert('Enviado con exito')
  }

  const handleReset = () => {
    console.log('Pedido personalizado reseteado')
    setForm(initialCustomOrder)
  }

  return (
    <>
      <Hero title="Pedidos Personalizados" />

      <section>
        <h2>
          Realizamos tortas y postres únicos para cumpleaños, casamientos, bautismos, aniversarios y todo tipo de
          celebraciones. Contanos tu idea y la haremos realidad.
        </h2>
      </section>

      <Gallery images={galleryImages} />

      <section className="formulario-pedido-personalizado">
        <h3>Realizá tu Pedido Personalizado</h3>
        <p>
          Completá el siguiente formulario con los detalles de la torta o postre que imaginás.
          Nos pondremos en contacto con vos para confirmar el diseño y el presupuesto.
        </p>

        <form onSubmit={handleSubmit} onReset={handleReset} noValidate>
          <label htmlFor="custom-nombre">Nombre y Apellido</label>
          <input type="text" id="custom-nombre" name="nombre" value={form.nombre} onChange={handleChange} required />

          <label htmlFor="custom-telefono">Teléfono</label>
          <input type="tel" id="custom-telefono" name="telefono" value={form.telefono} onChange={handleChange} required />

          <label htmlFor="custom-email">Correo Electrónico</label>
          <input type="email" id="custom-email" name="email" value={form.email} onChange={handleChange} required />

          <label htmlFor="fechaEvento">Fecha del evento</label>
          <input type="date" id="fechaEvento" name="fechaEvento" min={getToday()} value={form.fechaEvento} onChange={handleChange} required />

          <label htmlFor="custom-tamanio">Tamaño del pastel</label>
          <select id="custom-tamanio" name="tamanio" value={form.tamanio} onChange={handleChange} required>
            <option value="">Seleccione una opción</option>
            <option value="Pequeño">Pequeño (10 personas)</option>
            <option value="Mediano">Mediano (20 personas)</option>
            <option value="Grande">Grande (40 personas)</option>
            <option value="Otro">Otro</option>
          </select>

          <label htmlFor="pisos">Cantidad de pisos</label>
          <input type="number" id="pisos" name="pisos" min="1" max="5" value={form.pisos} onChange={handleChange} />

          <label htmlFor="relleno">Relleno</label>
          <select id="relleno" name="relleno" value={form.relleno} onChange={handleChange}>
            <option value="">Seleccione un relleno</option>
            <option value="Dulce de leche">Dulce de leche</option>
            <option value="Chocolate">Chocolate</option>
            <option value="Nutella">Nutella</option>
            <option value="Frutal">Frutas</option>
            <option value="Oreo">Oreo</option>
            <option value="Otro">Otro</option>
          </select>

          <label htmlFor="nombreTorta">¿Desea incluir un nombre?</label>
          <input type="text" id="nombreTorta" name="nombreTorta" placeholder="Ej.: Sofía" value={form.nombreTorta} onChange={handleChange} />

          <label htmlFor="numero">¿Desea incluir un número?</label>
          <input type="text" id="numero" name="numero" placeholder="Ej.: 5" value={form.numero} onChange={handleChange} />

          <label htmlFor="tematica">¿Desea incluir un personaje o temática?</label>
          <input type="text" id="tematica" name="tematica" placeholder="Ej.: Naruto" value={form.tematica} onChange={handleChange} />

          <label htmlFor="descripcion">Información útil para la elaboración</label>
          <textarea id="descripcion" name="descripcion" rows="10" placeholder="Describa el diseño deseado, colores, temática y detalles especiales." value={form.descripcion} onChange={handleChange}></textarea>

          <div className="botones-form">
            <button type="submit" className="btn-comprar">Enviar Pedido</button>
            <button type="reset" className="btn-comprar">Limpiar</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default CustomOrders
