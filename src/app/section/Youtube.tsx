export default function YouTube () {
  const videoId = "L4tfXKKjF0g";
  return (
    <div className="relative w-full pb-[56.25%] h-0">
      <iframe
        className="absolute w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=${videoId}&showinfo=0&disablekb=1`}
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};