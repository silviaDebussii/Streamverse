import Header from "./components/Header"
import Hero from "./components/Hero"
import SeriesCard from "./components/SeriesCard"
import Features from "./components/Features"
import Footer from "./components/Footer"

import { series } from "./data/series"

function App() {
  return (
    <div>

      <Header />

      <Hero />

      <section className="px-8 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Trending Series
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {series.map((item, index) => (
            <SeriesCard
              key={index}
              title={item.title}
              genre={item.genre}
              rating={item.rating}
              image={item.image}
            />
          ))}

        </div>

      </section>

      <Features />

      <Footer />

    </div>
  )
}

export default App