import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'

const initialOrder = {
  nombre: '',
  email: '',
  telefono: '',
  fechaEntrega: '',
  torta: '',
  tamanio: '',
}

const getToday = () => new Date().toISOString().split('T')[0]

function Orders() {
  const [form, setForm] = useState(initialOrder)

  const handleChange = (event) => {
    const { name, value } = event.target
    console.log('Cambio en input:', name, value)
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!event.currentTarget.checkValidity()) {
      alert('Error. Revise la informacion ingresada y vuelva a enviar')
      return
    }

    if (form.fechaEntrega < getToday()) {
      alert('Error. Revise la informacion ingresada y vuelva a enviar')
      return
    }

    console.log('Formulario de pedido enviado:', form)
    alert('Enviado con exito')
  }

  const handleReset = () => {
    console.log('Formulario de pedido reseteado')
    setForm(initialOrder)
  }

  return (
    <>
      <Hero title="Pedidos" />

      <section>
        <h2>
          Ahora que conocés todos nuestros <Link to="/productos">productos</Link>, completá el siguiente formulario.
        </h2>

        <form onSubmit={handleSubmit} onReset={handleReset} noValidate>
          <label htmlFor="nombre">Nombre y Apellido</label>
          <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange} required />

          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />

          <label htmlFor="telefono">Teléfono</label>
          <input type="tel" id="telefono" name="telefono" value={form.telefono} onChange={handleChange} required />

          <label htmlFor="fechaEntrega">Fecha de entrega</label>
          <input type="date" id="fechaEntrega" name="fechaEntrega" min={getToday()} value={form.fechaEntrega} onChange={handleChange} required />

          <label htmlFor="torta">Seleccionar torta</label>
          <select id="torta" name="torta" value={form.torta} onChange={handleChange} required>
            <option value="">Seleccione una opción</option>
            <option value="Cheesecake de Maracuyá">Cheesecake de Maracuyá</option>
            <option value="Brownie con Frutos Rojos">Brownie con Frutos Rojos</option>
            <option value="Chocotorta">Chocotorta</option>
            <option value="Rogel">Rogel</option>
            <option value="Red Velvet">Red Velvet</option>
            <option value="Selva Negra">Selva Negra</option>
            <option value="Lemon Pie">Lemon Pie</option>
            <option value="Matilda">Matilda</option>
          </select>

          <label>Tamaño</label>
          <div className="opciones-radio">
            <input type="radio" id="10" name="tamanio" value="10 personas" checked={form.tamanio === '10 personas'} onChange={handleChange} required />
            <label htmlFor="10">10 personas</label>
            <input type="radio" id="20" name="tamanio" value="20 personas" checked={form.tamanio === '20 personas'} onChange={handleChange} />
            <label htmlFor="20">20 personas</label>
            <input type="radio" id="40" name="tamanio" value="40 personas" checked={form.tamanio === '40 personas'} onChange={handleChange} />
            <label htmlFor="40">40 personas</label>
          </div>

          <div className="botones-form">
            <button type="submit" className="btn">Enviar</button>
            <button type="reset" className="btn">Limpiar</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Orders
