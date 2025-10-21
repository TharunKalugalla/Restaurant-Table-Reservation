export default function MenuItem() {
  const BASE_IMAGE_URL = "/src/assets/menu_image/";
  const photos = [
    {
      id: 1,
      query: "indian menu design",
      name: "1.png",
      large: true,
    },
    { id: 2, query: "restaurant menu layout", name: "2.png" },
    { id: 3, query: "fresh salad with vegetables", name: "3.png" },
    { id: 4, query: "food menu with dishes", name: "4.png" },
    { id: 5, query: "plated indian cuisine", name: "5.png", hasMore: true },
  ];

  return (
    <div id="menu">
      <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
        Menu
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className={`
              ${photo.large ? "row-span-2" : ""} 
              bg-muted rounded-xl overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer relative
            `}
          >
            <img
              src={BASE_IMAGE_URL + photo.name}
              alt={`Restaurant photo ${photo.id}`}
              className="w-full h-full object-cover"
            />
            {photo.hasMore && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">
                  +5 More
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}