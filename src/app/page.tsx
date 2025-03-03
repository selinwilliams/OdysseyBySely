import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
          Odyssey By Sely
        </h1>
        <p className="mb-8 text-xl md:text-2xl">
          A Culinary Journey Through Time
        </p>
        
        {/* Quick Links */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Link 
            href="/menu"
            className="rounded-lg bg-white/10 p-4 text-lg backdrop-blur-sm transition hover:bg-white/20"
          >
            Our Menu
          </Link>
          <Link 
            href="/reservations"
            className="rounded-lg bg-white/10 p-4 text-lg backdrop-blur-sm transition hover:bg-white/20"
          >
            Book a Table
          </Link>
          <Link 
            href="/location"
            className="rounded-lg bg-white/10 p-4 text-lg backdrop-blur-sm transition hover:bg-white/20"
          >
            Find Us
          </Link>
          <Link 
            href="/contact"
            className="rounded-lg bg-white/10 p-4 text-lg backdrop-blur-sm transition hover:bg-white/20"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
