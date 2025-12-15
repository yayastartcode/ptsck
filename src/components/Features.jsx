const Features = () => {
  const features = [
    {
      id: 1,
      icon: "/images/373879809_svgviewer-png-output.webp",
      title: "Kualitas Premium",
      description: "Seluruh produk minyak sawit dan turunannya diproses melalui standar mutu tinggi, memastikan kejernihan, kestabilan, dan kualitas terbaik di setiap kemasan.",
    },
    {
      id: 2,
      icon: "/images/119727992_svgviewer-png-output(1).png",
      title: "Harga Kompetitif",
      description: "Kami menawarkan harga yang bersaing tanpa mengurangi kualitas, memberikan keuntungan lebih bagi mitra bisnis, distributor, dan pelanggan industri.",
    },
    {
      id: 3,
      icon: "/images/1890170383_svgviewer-png-output(2).png",
      title: "Stok Aman & Pengiriman Cepat",
      description: "Didukung jaringan distribusi luas dan armada pengiriman handal, kami memastikan ketersediaan stok dan pengiriman tepat waktu ke seluruh Indonesia.",
    },
    {
      id: 4,
      icon: "/images/1903711688_svgviewer-png-output(3).png",
      title: "Layanan Profesional & Responsif",
      description: "Tim kami siap melayani kebutuhan pelanggan dengan cepat, ramah, dan profesional, memberikan solusi terbaik untuk setiap permintaan produk.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Keunggulan Kami
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="text-center p-6 hover:shadow-xl transition-shadow duration-300 rounded-lg"
            >
              <div className="flex justify-center mb-6">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
