import { useState } from 'react'
import Hero from '../components/Hero'

const initialContact = {
  nombre: '',
  email: '',
  telefono: '',
  motivo: '',
  conocio: '',
  comentarios: '',
}

function Contact() {
  const [form, setForm] = useState(initialContact)

  const handleChange = (event) => {
    const { name, value } = event.target
    console.log('Evento input contacto:', name, value)
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!event.currentTarget.checkValidity()) {
      alert('Error. Revise la informacion ingresada y vuelva a enviar')
      return
    }

    console.log('Formulario de contacto enviado:', form)
    alert('Enviado con exito')
  }

  const handleReset = () => {
    console.log('Formulario de contacto reseteado')
    setForm(initialContact)
  }

  return (
    <>
      <Hero title="Contacto" />

      <section className="contacto">
        <p>
          ¿Tenés dudas sobre alguno de nuestros productos? ¿Querés saber si realizamos otros productos?
          ¿Tenés un evento y necesitás asesoramiento? Completá nuestro formulario de contacto y a la
          brevedad nos pondremos en contacto con vos.
        </p>

        <form onSubmit={handleSubmit} onReset={handleReset} noValidate>
          <label htmlFor="contacto-nombre">Nombre y Apellido</label>
          <input type="text" id="contacto-nombre" name="nombre" value={form.nombre} onChange={handleChange} required />

          <label htmlFor="contacto-email">Correo Electrónico</label>
          <input type="email" id="contacto-email" name="email" value={form.email} onChange={handleChange} required />

          <label htmlFor="contacto-telefono">Teléfono</label>
          <input type="tel" id="contacto-telefono" name="telefono" value={form.telefono} onChange={handleChange} required />

          <label htmlFor="motivo">Motivo de contacto</label>
          <select id="motivo" name="motivo" value={form.motivo} onChange={handleChange} required>
            <option value="">Seleccione una opción</option>
            <option value="Productos">Consulta sobre productos</option>
            <option value="Eventos">Eventos</option>
            <option value="Reclamos">Reclamos</option>
            <option value="Otros">Otros</option>
          </select>

          <label>¿Cómo nos conociste?</label>
          <div className="opciones-radio">
            <input type="radio" id="tiktok" name="conocio" value="Tik Tok" checked={form.conocio === 'Tik Tok'} onChange={handleChange} />
            <label htmlFor="tiktok">Tik Tok</label>
            <input type="radio" id="instagram" name="conocio" value="Instagram" checked={form.conocio === 'Instagram'} onChange={handleChange} />
            <label htmlFor="instagram">Instagram</label>
            <input type="radio" id="recomendacion" name="conocio" value="Recomendación" checked={form.conocio === 'Recomendación'} onChange={handleChange} />
            <label htmlFor="recomendacion">Recomendación de un cliente</label>
            <input type="radio" id="otro" name="conocio" value="Otro" checked={form.conocio === 'Otro'} onChange={handleChange} />
            <label htmlFor="otro">Otro</label>
          </div>

          <label htmlFor="comentarios">Comentarios</label>
          <textarea id="comentarios" name="comentarios" rows="5" placeholder="Contanos tu consulta..." value={form.comentarios} onChange={handleChange}></textarea>

          <div className="botones-form">
            <button type="submit" className="btn">Enviar</button>
            <button type="reset" className="btn">Limpiar</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Contact
