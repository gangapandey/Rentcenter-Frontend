import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registeruser = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    c_password: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    // Validate first name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    // Validate last name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    // Validate password
    if (formData.password.length < 5) {
      newErrors.password = "Password must be at least 5 characters";
    }

    // Validate confirm password
    if (formData.password !== formData.c_password) {
      newErrors.c_password = "Passwords do not match";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleRegister = () => {
    // Validate form before submitting
    if (validateForm()) {
      // Perform registration logic
      console.log("Form submitted successfully");
    }
  };

  return (
    <div>
      <div className="max-w-full h-full w-full m-auto py-5 px-5 ml-44 relative group ">
        <div className="container mx-auto">
          <div className="flex justify-center items-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">
                  Create an Account!
                </h3>
                <form
                  className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleRegister();
                  }}
                >
                  <div class="mb-4 md:flex md:justify-between">
                    <div class="mb-4 md:mr-2 md:mb-0">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700"
                        for="firstName"
                      >
                        First Name
                      </label>
                      <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        required
                        placeholder="First Name"
                      />
                    </div>

                    <div class="md:ml-2">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700"
                        for="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="lastName"
                        type="text"
                        required
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div class="mb-4">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      required
                      placeholder="Email"
                    />
                  </div>

                  <div class="mb-4 md:flex md:justify-between">
                    <div class="mb-4 md:mr-2 md:mb-0">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700"
                        for="password"
                      >
                        Password
                      </label>
                      <input
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                        required
                      />
                    </div>
                    <div class="md:ml-2">
                      <label
                        class="block mb-2 text-sm font-bold text-gray-700"
                        for="c_password"
                      >
                        Confirm Password
                      </label>
                      <input
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="c_password"
                        type="password"
                        required
                        placeholder="******************"
                      />
                    </div>
                  </div>

                  {/* Display validation errors */}
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                  {errors.c_password && (
                    <p className="text-red-500 text-sm">{errors.c_password}</p>
                  )}

                  <div class="mb-6 text-center">
                    <button
                      class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Register Account
                    </button>
                  </div>

                  <hr class="mb-6 border-t" />

                  <div class="text-center">
                    <a
                      class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                  </div>

                  <div class="text-center">
                    <a
                      class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      href="#"
                      onClick={() => navigate("/loginn")}
                    >
                      Already have an account? Login!
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registeruser;
