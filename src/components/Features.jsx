import {
  Sparkles,
  MonitorPlay,
  BadgeCheck
} from "lucide-react"

export default function Features() {
  return (
    <section className="py-20 px-8 bg-zinc-950">

      <h2 className="text-4xl font-bold text-center mb-14">
        Why StreamVerse?
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-zinc-900 p-8 rounded-2xl text-center">
          <Sparkles
            size={40}
            className="mx-auto text-red-500 mb-4"
          />

          <h3 className="text-xl font-bold mb-3">
            AI Recommendations
          </h3>

          <p className="text-zinc-400">
            Personalized content suggestions for every user.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl text-center">
          <MonitorPlay
            size={40}
            className="mx-auto text-red-500 mb-4"
          />

          <h3 className="text-xl font-bold mb-3">
            4K Streaming
          </h3>

          <p className="text-zinc-400">
            High quality streaming on every device.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl text-center">
          <BadgeCheck
            size={40}
            className="mx-auto text-red-500 mb-4"
          />

          <h3 className="text-xl font-bold mb-3">
            Premium Experience
          </h3>

          <p className="text-zinc-400">
            No ads and unlimited access to all series.
          </p>
        </div>

      </div>
    </section>
  )
}