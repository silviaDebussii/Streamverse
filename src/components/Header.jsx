import { Tv } from "lucide-react"

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-5 border-b border-zinc-800">

      <div className="flex items-center gap-2">
        <Tv className="text-red-500" />

        <h1 className="text-2xl font-bold text-red-500">
          StreamVerse
        </h1>
      </div>

      <nav className="flex gap-6 text-sm">
        <a href="#" className="hover:text-red-500">
          Home
        </a>

        <a href="#" className="hover:text-red-500">
          Trending
        </a>

        <a href="#" className="hover:text-red-500">
          Categories
        </a>

        <a href="#" className="hover:text-red-500">
          My List
        </a>
      </nav>
    </header>
  )
}