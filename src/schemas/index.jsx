import * as Yup from "yup";

export const vechicleSchema = Yup.object({
    firstName: Yup.string().min(3).max(10).required("Please enter First Name"),
    lastName:  Yup.string().min(3).max(10).required("Please enter Last Name"),
    registrationNumber: Yup.string().min(5).max(8).required("Please enter registration number of vechicle"),
    manufacturer: Yup.string().required("Please select an option"),
    seat: Yup.number().min(2).max(15).required("Please enter number of seats"),
    fuel: Yup.string().required("Please select an option"),
    color: Yup.string().min(3).max(10).required("Please enter color"),
    city: Yup.string().min(3).max(15).required("Please enter your city"),
    place: Yup.string().min(3).max(15).required("Please enter your place"),
    price: Yup.number().min(2).max(5000).required("Please enter Price Per Day"),
    instruction: Yup.string().required("Please enter your instructions"),
    guideline: Yup.string().required("Please enter your guideline"),

    // need to work on image validation here
    vimage: Yup.mixed().required("Please upload vechicle image"),
    bimage: Yup.mixed().required("Please upload Bluebook image"),
    inimage: Yup.mixed().required("Please upload Insurance image"),

    insurancedate: Yup.date().required('Please enter a valid date'),
    date: Yup.date().required('Please enter a valid date'),
    time: Yup.string().required('Please enter a valid time') 
})

export const electronicSchema = Yup.object({
    firstName: Yup.string().min(3).max(10).required("Please enter First Name"),
    lastName:  Yup.string().min(3).max(10).required("Please enter Last Name"),
    modelNumber: Yup.string().min(5).max(8).required("Please enter modelnumber of vechicle"),
    manufacturer: Yup.string().required("Please select an option"),
    color: Yup.string().min(3).max(10).required("Please enter color"),
    city: Yup.string().min(3).max(15).required("Please enter your city"),
    place: Yup.string().min(3).max(15).required("Please enter your place"),
    price: Yup.number().min(2).max(5000).required("Please enter Price Per Day"),
    instruction: Yup.string().required("Please enter your instructions"),
    guideline: Yup.string().required("Please enter your guideline"),

    // need to work on image validation here
    gadgetimage: Yup.mixed().required("Please upload a gadget image"),
    billimage: Yup.mixed().required("Please upload a Bill image"),
    
    date: Yup.date().required('Please enter a valid date'),
    time: Yup.string().required('Please enter a valid time') 
})

