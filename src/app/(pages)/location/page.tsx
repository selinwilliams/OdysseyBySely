import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Location & Hours - Odyssey By Sely',
  description: 'Find us in the heart of the city. Visit Odyssey By Sely for an unforgettable dining experience.',
}

const hours = [
  { day: 'Monday', hours: 'Closed' },
  { day: 'Tuesday', hours: '5:00 PM - 10:00 PM' },
  { day: 'Wednesday', hours: '5:00 PM - 10:00 PM' },
  { day: 'Thursday', hours: '5:00 PM - 10:00 PM' },
  { day: 'Friday', hours: '5:00 PM - 11:00 PM' },
  { day: 'Saturday', hours: '4:00 PM - 11:00 PM' },
  { day: 'Sunday', hours: '4:00 PM - 9:00 PM' },
]

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Location & Hours
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-300 sm:mt-4">
            Find us in the heart of the city
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Location Information */}
          <div className="rounded-lg bg-gray-900 p-8">
            <h2 className="text-2xl font-bold text-white">Our Location</h2>
            <address className="mt-4 not-italic text-gray-300">
              <p>123 Culinary Street</p>
              <p>Foodie District</p>
              <p>New York, NY 10001</p>
            </address>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white">Getting Here</h3>
              <ul className="mt-2 space-y-2 text-gray-300">
                <li>• 5 minutes walk from Central Station</li>
                <li>• Parking available at the venue</li>
                <li>• Valet service available</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <ul className="mt-2 space-y-2 text-gray-300">
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@odysseybysely.com</li>
              </ul>
            </div>
          </div>

          {/* Hours */}
          <div className="rounded-lg bg-gray-900 p-8">
            <h2 className="text-2xl font-bold text-white">Hours of Operation</h2>
            <div className="mt-4 space-y-4">
              {hours.map((schedule) => (
                <div
                  key={schedule.day}
                  className="flex items-center justify-between border-b border-gray-800 pb-2"
                >
                  <span className="text-gray-300">{schedule.day}</span>
                  <span className="font-medium text-white">{schedule.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white">Special Notes</h3>
              <ul className="mt-2 space-y-2 text-gray-300">
                <li>• Kitchen closes 30 minutes before closing time</li>
                <li>• Last seating is 1 hour before closing</li>
                <li>• Special hours may apply on holidays</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 