import NavBar from "@/components/homepage/NavBar";
import Footer from "@/components/homepage/Footer";
import { notFound } from "next/navigation";
import appsData from "@/data/apps.json";

export default async function AppDetails({ params }) {
  const { id } = params;

  // Find the app by id
  const app = appsData.find((app) => app.id === parseInt(id));

  if (!app) {
    notFound();
  }

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>

              <div className="md:w-1/2 p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {app.title}
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  by {app.companyName}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Rating
                    </h3>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">⭐</span>
                      <span className="text-xl font-bold">{app.ratingAvg}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {app.reviews.toLocaleString()} reviews
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Downloads
                    </h3>
                    <p className="text-xl font-bold">
                      {app.downloads.toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Size</h3>
                    <p className="text-xl font-bold">{app.size} MB</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500">ID</h3>
                    <p className="text-xl font-bold">#{app.id}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Rating Breakdown
                  </h3>
                  <div className="grid grid-cols-5 gap-2">
                    {app.ratings.map((rating) => (
                      <div
                        key={rating.name}
                        className="text-center p-2 bg-gray-50 rounded"
                      >
                        <div className="text-sm font-medium text-gray-900">
                          {rating.name}
                        </div>
                        <div className="text-lg font-bold text-[#632EE3]">
                          {rating.count}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-200">
                  Download App
                </button>
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Description
              </h2>
              <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                {app.description}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
