import React from 'react'
import { useFormik } from "formik";
import { electronicSchema } from '../../schemas';

const initialValues = {
  firstName: "",
  lastName: "",
  modelNumber: "",
  manufacturer: "",
  color: "",
  city: "",
  seat: "",
  fuel: "",
  place: "",
  price: "",
  instruction: "",
  guideline: "",
  date: "",
  time: "",
  vimage: "",
  bimage: "",
  inimage: "",
  insurancedate: "",
};

const Hostelectronic = () => {

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: electronicSchema,
    vimage : [],
    bimage : [],
    inimage : [],
    onSubmit: (values, action) => {
      console.log("🚀 ~ Hostvechicle ~ values:", values);
      action.resetForm();
    },
  });

  console.log("🚀 ~ Hostvechicle ~ errors:", errors);

  const handleFileChange = (event, fieldName) => {
    const files = event.currentTarget.files;
    setFieldValue(fieldName, files);
  };

  return (
    <div>
        <div className="max-w-full h-full w-full m-auto py-20 px-4 relative group ">

        <p className=" flex justify-center items-center font-bold text-2xl text-black-500 py-7">
          Host your Electronics{" "}
        </p>

        <div class="flex items-center justify-center p-12">
          <div class="mx-auto w-full max-w-[550px]">
            <form action="" method="POST">
              <div class="-mx-3 flex flex-wrap">

                {/* firstname */}
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="fName"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First Name"
                      value={values.firstName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />{" "}
                    {errors.firstName && touched.firstName ? (
                      <p className="text-red-700 p-3">{errors.firstName}</p>
                    ) : null}
                  </div>
                </div>

                 {/* lastname */}
                 <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="lName"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Last Name"
                      value={values.lastName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />{" "}
                    {errors.lastName && touched.lastName ? (
                      <p className="text-red-700 p-3">{errors.lastName}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* model number */}
              <div class="mb-5">
                <label
                  for="modelNumber"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Model Number
                </label>
                <input
                  type="text"
                  name="modelNumber"
                  id="modelNumber"
                  value={values.modelNumber}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter model number of gadget"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />{" "}
                {errors.modelNumber && touched.modelNumber ? (
                  <p className="text-red-700 p-3">
                    {errors.modelNumber}
                  </p>
                ) : null}
              </div>

              {/* manufacturer */}
              <div class="mb-5">
                <label
                  for="guest"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Manufacturer
                </label>
                <select
                  name="manufacturer"
                  id="manufacturer"
                  value={values.manufacturer}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option value="0">Apple</option>
                  <option value="1">Xiaomi</option>
                  <option value="2">Samsung</option>
                  <option value="3">One plus</option>
                  <option value="4">Huawei</option>
                  <option value="5">Dell</option>
                  <option value="6">HP</option>
                  <option value="7">Lenovo</option>
                  <option value="8">Asus</option>
                  <option value="9">Canon</option>
                  <option value="10">Nikon</option>
                  <option value="11">Panasonic</option>
                  <option value="12">L.G.</option>
                  <option value="13">Sony</option>
                </select> {errors.manufacturer && touched.manufacturer ? (
                  <p className="text-red-700 p-3">{errors.manufacturer}</p>
                ) : null}
              </div>

              {/* Gadegets no */}
              {/* <div class="mb-5">
                <label
                  for="guest"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Number of
                </label>
                <input
                  type="number"
                  name="guest"
                  id="guest"
                  placeholder="5"
                  min="0"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div> */}

              {/* fuel type */}
              {/* <div class="mb-5">
                <label
                  for="guest"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Fuel Type
                </label>
                <select
                  name="guest"
                  id="guest"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option value="0">Petrol</option>
                  <option value="1">Disel</option>
                  <option value="2">Electric</option>
                  <option value="3">Hybrid</option>
                </select>
              </div> */}

              {/* color */}
              <div class="mb-5">
                <label
                  for="color"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Color
                </label>
                <input
                  type="text"
                  required
                  name="registrationNumber"
                  id="registrationNumber"
                  placeholder="Color of vechicle"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              {/* city */}
              <div class="mb-5">
                <label
                  for="city"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  City
                </label>
                <input
                  type="text"
                  required
                  name="registrationNumber"
                  id="registrationNumber"
                  placeholder="Butwal"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              {/* place */}
              <div class="mb-5">
                <label
                  for="place"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Place
                </label>
                <input
                  type="text"
                  required
                  name="registrationNumber"
                  id="registrationNumber"
                  placeholder="Golpark-04,  sangam path"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              {/* price */}
              <div class="mb-5">
                <label
                  for="price"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Price per day
                </label>
                <input
                  type="number"
                  required
                  name="registrationNumber"
                  id="registrationNumber"
                  placeholder="1000"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              {/* instruc */}
              <div class="mb-5">
                <label
                  for="instruction"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Instructions
                </label>
                <input
                  type="text"
                  name="instruction"
                  id="instruction"
                  placeholder="Your instruction before renting"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              {/* guideliness */}
              <div class="mb-5">
                <label
                  for="guidelines"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Guidelines
                </label>
                <input
                  type="text"
                  required
                  name="guidelines"
                  id="guidelines"
                  placeholder="Guideline"
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              {/* Gadget image */}
              <div class="mb-5">
                <label
                  for="image"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Gadget Image (Minimum size: 2 MB)
                </label>
                <input
                  type="file"
                  name="image"
                
                  id="image"
                  accept="image/*"
                  required
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              {/* BIll img */}
              <div class="mb-5">
                <label
                  for="image"
                  class="mb-3 block text-base font-medium text-[#07074D]"
                >
                 Owning Bill Image (Minimum size: 2 MB)
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  required
                  class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

    
              {/* available date and time */}
              <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="date"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Available Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="time"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                       Available Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      id="time"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>

              {/* ques */}
              <div class="mb-5">
                <label class="mb-3 block text-base font-medium text-[#07074D]">
                  Are you sure for the renting decision?
                </label>
                <div class="flex items-center space-x-6">
                  <div class="flex items-center">
                    <input
                      type="radio"
                      name="radio1"
                      id="radioButton1"
                      class="h-5 w-5"
                    />
                    <label
                      for="radioButton1"
                      class="pl-3 text-base font-medium text-[#07074D]"
                    >
                      Yes
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      type="radio"
                      name="radio1"
                      id="radioButton2"
                      class="h-5 w-5"
                    />
                    <label
                      for="radioButton2"
                      class="pl-3 text-base font-medium text-[#07074D]"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <button class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        </div>
      
    </div>
  )
}

export default Hostelectronic
