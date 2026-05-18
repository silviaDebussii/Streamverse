import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="text-center py-28 px-6 bg-gradient-to-b from-red-950 to-zinc-950">

      <h2 className="text-5xl md:text-6xl font-bold mb-6">
        Watch the best series anytime
      </h2>

      <p className="text-zinc-300 max-w-2xl mx-auto mb-8">
        Discover trending shows, exclusive releases and
        personalized recommendations in one place.
      </p>

      <div className="flex justify-center gap-4">
        <Button className="bg-red-600 hover:bg-red-700">
          Watch Now
        </Button>

        <Button variant="outline">
          Explore
        </Button>
      </div>
    </section>
  )
}