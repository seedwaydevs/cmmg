import Container from "@/components/Container";
import LatestPosts from "@/components/blog/LatestPost";
import PopularPosts from "@/components/blog/PopularPosts";
import TopCategories from "@/components/blog/TopCategories";

export default function Blogs() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Container>
        {/* Hero Section */}
        <div className="pt-20 pb-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-4">
              Music Blog
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Discover the latest releases, insights, and stories from the music
              world
            </p>
          </div>
        </div>

        <hr className="border-t-2 border-orange-600 mb-10" />

        {/* Main Content */}
        <main className="flex flex-col items-start gap-8 mt-10 lg:flex-row justify-between">
          {/* Latest Posts Section */}
          <div className="flex-1 w-full">
            <LatestPosts />
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 space-y-8">
            {/* Top Categories Card */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border-2 border-orange-600">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-black dark:text-white">
                  Top Categories
                </h2>
              </div>
              <TopCategories />
            </div>

            {/* Top Posts Card */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border-2 border-blue-500 sticky top-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-black dark:text-white">
                  Trending Posts
                </h2>
              </div>
              <PopularPosts />
            </div>
          </aside>
        </main>

        {/* Call to Action Section */}
        <div className="mt-20 mb-10 bg-orange-600 rounded-xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-orange-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest music releases
            and insights
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
            Subscribe Now
          </button>
        </div>
      </Container>
    </div>
  );
}
