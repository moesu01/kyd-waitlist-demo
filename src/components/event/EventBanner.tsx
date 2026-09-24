interface EventBannerProps {
  imageUrl?: string
  eventName: string
}

export function EventBanner({ imageUrl, eventName }: EventBannerProps) {
  return (
    <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-gradient-to-br from-purple-900 via-indigo-800 to-pink-700 rounded-lg overflow-hidden relative">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={eventName}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🎵</div>
            <p className="text-white/60 text-sm">Event Image</p>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  )
}
