import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Next.js App
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore the different pages and features of this Next.js application
          using the navigation above.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <Link href="/comments" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                Comments System
              </h3>
              <p className="text-gray-600">
                View and add comments with our interactive comment system
                featuring server-side rendering and client-side interactivity.
              </p>
            </div>
          </Link>

          <Link href="/profile" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                Profile Page
              </h3>
              <p className="text-gray-600">
                Access your profile information and settings.
              </p>
            </div>
          </Link>

          <Link href="/test" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                Test Page
              </h3>
              <p className="text-gray-600">
                Explore our test functionality and features.
              </p>
            </div>
          </Link>
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Get Started
          </h2>
          <p className="text-gray-600 mb-4">
            Edit{" "}
            <code className="bg-gray-200 px-2 py-1 rounded text-sm font-mono">
              src/app/page.tsx
            </code>{" "}
            to customize this page.
          </p>
          <p className="text-gray-600">
            Use the navigation menu above to explore different sections of the
            application.
          </p>
        </div>
      </div>
    </div>
  );
}
