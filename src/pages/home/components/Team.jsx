import React from "react";
import { Helmet } from "react-helmet";

const Team = () => {
  return (
    <div>
      <Helmet>
        {/* Add the Material Design Icons stylesheet link */}
        <link
          rel="stylesheet"
          href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
        />
      </Helmet>

      <div class="flex items-center justify-center min-h-screen bg-white py-30 mb-20">
        <div class="flex flex-col">
          <div class="flex flex-col mt-8">
            {/* <!-- Meet the Team --> */}
            <div class="container max-w-7xl px-4">
              {/* <!-- Section Header --> */}
              <div className="flex flex-wrap justify-center text-center mb-24">
  <div className="w-full lg:w-6/12 px-4 ">
    {/* <!-- Header --> */}
    <h1 className="text-gray-900 text-4xl font-bold mb-8 whitespace-nowrap ">
      Meet the Team
    </h1>

    {/* <!-- Description --> */}
    <div className="text-center">
      <p
        className="text-gray-700 text-lg font-light whitespace-nowrap -ml-28"
      >
        Get to know the amazing team that fosters innovation at the
        heart of  success!
      </p>
    </div>
  </div>
</div>


              {/* <!-- Team Members --> */}
              <div class="flex flex-wrap items-center justify-center gap-16 mt-[-1rem]">
                {/* Member #1 */}
                <div class="mb-9 sm:px-6 lg:px-4 max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                  <div class="flex flex-col">
                    <a href="#" class="mx-auto">
                      <img
                        class="rounded-md drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=200&h=200&q=80"
                      />
                    </a>

                    <div class="text-center mt-6">
                      <h1 class="text-gray-900 text-lg font-bold mb-1">
                        Ganga Pandey
                      </h1>

                      <div class="text-gray-700 font-light mb-2">
                        Frontend Developer
                      </div>

                      <div class="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                        <a
                          href="#"
                          class="flex rounded-full hover:bg-indigo-50 h-8 w-8"
                        >
                          <i class="mdi mdi-linkedin text-indigo-500 mx-auto mt-1"></i>
                        </a>

                        <a
                          href="#"
                          class="flex rounded-full hover:bg-blue-50 h-8 w-8"
                        >
                          <i class="mdi mdi-twitter text-blue-300 mx-auto mt-1"></i>
                        </a>

                        <a
                          href="#"
                          class="flex rounded-full hover:bg-orange-50 h-8 w-8"
                        >
                          <i class="mdi mdi-instagram text-orange-400 mx-auto mt-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Member #2 */}
                <div class="mb-9 sm:px-6 lg:px-4 max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                  <div class="flex flex-col">
                    <a href="#" class="mx-auto">
                      <img
                        class="rounded-md drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=200&h=200&q=80"
                      />
                    </a>

                    <div class="text-center mt-6">
                      <h1 class="text-gray-900 text-lg font-bold mb-1">
                       Kriti Mallik
                      </h1>

                      <div class="text-gray-700 font-light mb-2">
                        Backend Developer
                      </div>

                      <div class="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                        <a
                          href="#"
                          class="flex rounded-full hover:bg-indigo-50 h-8 w-8"
                        >
                          <i class="mdi mdi-linkedin text-indigo-700 mx-auto mt-1"></i>
                        </a>

                        <a
                          href="#"
                          class="flex rounded-full hover:bg-blue-50 h-8 w-8"
                        >
                          <i class="mdi mdi-twitter text-blue-400 mx-auto mt-1"></i>
                        </a>

                        <a
                          href="#"
                          class="flex rounded-full hover:bg-orange-50 h-8 w-8"
                        >
                          <i class="mdi mdi-instagram text-orange-400 mx-auto mt-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
