function Hero({ title, text, isHome = false, children }) {
  return (
    <section className={isHome ? 'hero hero-index' : 'hero'}>
      <div className={isHome ? 'hero-contenido' : undefined}>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
        {children}
      </div>
    </section>
  )
}

export default Hero
