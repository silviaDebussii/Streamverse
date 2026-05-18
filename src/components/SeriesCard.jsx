import {
  Card,
  CardContent
} from "@/components/ui/card"

export default function SeriesCard({
  title,
  genre,
  rating,
  image
}) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 overflow-hidden hover:scale-105 transition duration-300">

      <img
        src={image}
        className="h-64 w-full object-cover"
      />

      <CardContent className="p-5">

        <h3 className="text-xl font-bold mb-2">
          {title}
        </h3>

        <p className="text-zinc-400 mb-2">
          {genre}
        </p>

        <span className="text-yellow-400">
          ⭐ {rating}
        </span>

      </CardContent>
    </Card>
  )
}