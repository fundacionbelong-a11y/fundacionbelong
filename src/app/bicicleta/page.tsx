export default function BicicletaPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] pt-16 md:pt-20">
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
            Bicicleta
          </h1>
          <p className="text-lg text-charcoal/60 mb-12">
            Espacio en construcción para pedalear juntos hacia la pertenencia.
          </p>

          <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto rounded-2xl overflow-hidden bg-charcoal/5 border border-charcoal/10 shadow-sm flex items-center justify-center">
            <div className="text-charcoal/30 text-8xl">🚲</div>
          </div>
        </div>
      </section>
    </main>
  );
}
