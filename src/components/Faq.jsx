import React from "react";

const Faq = () => {
  return (
    <div>
      <section className="bg-[#5074a8] dark:bg-gray-100 text-gray-100 dark:text-gray-800 rounded-lg">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl pop">
            Europe 101: FAQs for Your European Adventure
          </h2>
          <p className="mt-4 mb-8 text-[#0e1b1bef] dark:text-gray-600 pop">
            Unveiling the magic of Europe! Explore iconic landmarks,
            breathtaking landscapes, and hidden gems. Discover the perfect
            European adventure for you - cultural capitals, charming towns, and
            stunning natural beauty await
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 pop py-6 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600">
                Q: What are some of the most popular tourist destinations in
                Europe?
              </summary>
              <p className="px-4 pop py-6 pt-0 ml-4 -mt-4 text-[#0e1b1bef] dark:text-gray-600">
                A: Europe boasts a vast array of popular destinations, catering
                to diverse interests. Here are a few highlights: Art and
                Culture: Paris (France), Rome (Italy), Florence (Italy),
                Amsterdam (Netherlands) History and Architecture: London
                (England), Barcelona (Spain), Prague (Czech Republic), Berlin
                (Germany) Natural Beauty: Swiss Alps (Switzerland), Amalfi Coast
                (Italy), Scottish Highlands (Scotland), Norwegian fjords
                (Norway) Beaches and Relaxation: Balearic Islands (Spain), Greek
                Islands (Greece), French Riviera (France), Algarve (Portugal)
              </p>
            </details>
            <details className="w-full border rounded-lg pop">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600">
                Q: What is the best time to visit Europe?
              </summary>
              <p className="px-4 py-6 pop pt-0 ml-4 -mt-4 text-[#0e1b1bef] dark:text-gray-600">
                A: The ideal time depends on your preferences. Spring
                (April-May) and fall (September-October) offer pleasant
                temperatures and fewer crowds. Summer (June-August) is peak
                season with warm weather, but also comes with higher prices and
                larger crowds. Winter (December-February) offers festive charm
                in many cities and excellent conditions for winter sports.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 pop py-6 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600">
                Q: What currency is used in Europe?
              </summary>
              <p className="px-4 py-6 pop pt-0 ml-4 -mt-4 text-[#0e1b1bef] dark:text-gray-600">
                A: The Euro (€) is the official currency in many European
                countries. However, some countries like the United Kingdom
                (Pound Sterling) and Switzerland (Swiss Franc) have their own
                currencies.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
