import { Briefcase } from "lucide-react";

const topCards = new Array(4).fill({
  title: "VIP Packages",
  desc: "Enjoy top-tier travel experiences at unbeatable prices without on quality or comfort.",
});

const bottomCards = new Array(3).fill({
  title: "VIP Packages",
  desc: "Include premium seating, meet-and-greet experiences, backstage tours.",
});

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-neutral-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Why Choose Us
          </h2>

          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            At Go Pravasa, we're committed to providing stress-free travel experiences
            with a focus on comfort, safety, and convenience. Here's what sets us apart:
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-10" />

        {/* Top Grid (4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topCards.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-orange-300 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="text-white" size={20} />
              </div>

              <h3 className="text-lg font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Grid (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {bottomCards.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-orange-300 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <Briefcase className="text-white" size={20} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}