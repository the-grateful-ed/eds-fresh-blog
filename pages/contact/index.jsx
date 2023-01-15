import { forwardRef } from "react";
import {
  FaEnvelopeOpen,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";

export default function ContactPage() {
  const schema = yup.object().shape({
    firstName: yup.string().required("Your First Name is Required!"),
    lastName: yup.string().required("Your Last Name is Required!"),
    email: yup.string().email().required("Your Email is Required!"),
    message: yup.string().required("Your Message is Required!"),
    subject: yup.string().required("Your Message Subject is Required!"),
  });

  const phoneSchema = yup.string().phone().required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema, phoneSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="mx-auto">
      <div className="relative bg-white">
        <h2 className="sr-only">Contact us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="relative overflow-hidden bg-blue-500 py-10 px-6 sm:px-10 xl:p-12">
            <div
              className="pointer-events-none absolute inset-0 sm:hidden"
              aria-hidden="true"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                width={343}
                height={388}
                viewBox="0 0 343 388"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                  fill="url(#linear1)"
                  fillOpacity="1"
                />
                <defs>
                  <linearGradient
                    id="linear1"
                    x1="254.553"
                    y1="107.554"
                    x2="961.66"
                    y2="814.66"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop
                      offset={1}
                      stopColor="#fff"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 sm:block lg:hidden"
              aria-hidden="true"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                width={359}
                height={339}
                viewBox="0 0 359 339"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                  fill="url(#linear2)"
                  fillOpacity=".5"
                />
                <defs>
                  <linearGradient
                    id="linear2"
                    x1="192.553"
                    y1="28.553"
                    x2="899.66"
                    y2="735.66"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop
                      offset={1}
                      stopColor="#fff"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block"
              aria-hidden="true"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                width={160}
                height={678}
                viewBox="0 0 160 678"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                  fill="url(#linear3)"
                  fillOpacity=".2"
                />
                <defs>
                  <linearGradient
                    id="linear3"
                    x1="192.553"
                    y1="325.553"
                    x2="899.66"
                    y2="1032.66"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop
                      offset={1}
                      stopColor="#fff"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white">
              Contact information
            </h3>
            <p className="mt-6 max-w-3xl text-base text-white">
              Thank you for visiting our website. If you have any questions,
              comments, or inquiries, please don't hesitate to reach out to us
              using the form provided on this page. We will do our best to get
              back to you as soon as possible. Thank you for your interest in
              our business.
            </p>
            <dl className="mt-8 space-y-6">
              <dt>
                <span className="sr-only">Phone number</span>
              </dt>
              <dd className="flex text-base text-white">
                <FaPhoneAlt
                  className="h-6 w-6 shrink-0 text-gray-200"
                  aria-hidden="true"
                />
                <span className="ml-3">+1 (555) 123-4567</span>
              </dd>
              <dt>
                <span className="sr-only">Email</span>
              </dt>
              <dd className="flex text-base text-white">
                <FaEnvelopeOpen
                  className="h-6 w-6 shrink-0 text-gray-200"
                  aria-hidden="true"
                />
                <span className="ml-3">edndacomputer@riseup.net</span>
              </dd>
              <dt>
                <span className="sr-only">Email</span>
              </dt>
              <dd className="flex text-base text-white">
                <FaSearchLocation
                  className="h-6 w-6 shrink-0 text-gray-200"
                  aria-hidden="true"
                />
                <span className="ml-3">West Coast, United States</span>
              </dd>
            </dl>
            <ul
              role="list"
              className="mt-8 flex space-x-12"
            >
              <li>
                <FaTwitter className="cursor-pointer text-3xl text-gray-100 hover:text-white" />
              </li>
              <li>
                <FaGithub className="cursor-pointer text-3xl text-gray-100 hover:text-white" />
              </li>
              <li>
                <FaLinkedin className="cursor-pointer text-3xl text-gray-100 hover:text-white" />
              </li>
            </ul>
          </div>
          <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
            <h3 className="text-lg font-medium text-gray-900">
              Send us a message
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2
              sm:gap-x-8"
            >
              <div>
                <Field
                  {...register("firstNaem", {
                    required: "First Name is required",
                  })}
                  dot={true}
                  error={errors?.firstName?.message}
                  label="First Name"
                  name="firstName"
                />
              </div>
              <div>
                <Field
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                  dot={true}
                  error={errors?.lastName?.message}
                  label="Last Name"
                  name="lastName"
                />
              </div>
              <div>
                <Field
                  {...register("email", { required: "Email is required" })}
                  dot={true}
                  error={errors?.email?.message}
                  label="Email"
                  name="email"
                />
              </div>
              <div>
                <Field
                  {...register("phone")}
                  dot={true}
                  error={errors?.phone?.message}
                  label="Phone"
                  name="phone"
                />
              </div>
              <div className="sm:col-span-2">
                <Field
                  {...register("subject", { required: "Subject is required" })}
                  dot={true}
                  error={errors?.subject?.message}
                  label="Subject"
                  name="subject"
                />
              </div>
              <div className="sm:col-span-2">
                <Field
                  {...register("message", { required: "Message is required" })}
                  dot={true}
                  error={errors?.message?.message}
                  label="Message"
                  name="message"
                  type="textarea"
                />
              </div>
              <div className="sm:col-span-2 sm:flex sm:justify-end">
                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center
                  rounded-md border border-transparent bg-blue-600 px-6 py-3
                  text-base font-medium text-white shadow-sm hover:bg-blue-700
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  focus:ring-offset-2 sm:w-auto"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const style = {
  dot: `after:content-['*'] after:ml-0.5 after:text-red-500`,
  error: `ring-red-500 ring-1`,
  disabled: `cursor-not-allowed`,
  container: `relative mb-6 mt-3`,
  errorMessage: `text-sm text-red-500 mt-2`,
  checkboxLabel: `block overflow-hidden h-6 rounded-full bg-gray-300`,
  checkboxContainer: `relative w-10 mr-2 align-middle select-none mt-2`,
  iconContainer: `absolute flex border border-transparent left-0 top-0 h-full w-10`,
  icon: `flex items-center justify-center rounded-tl rounded-bl z-10 text-gray-400 text-lg h-full w-full`,
  checkbox: `checked:bg-blue-500 checked:right-0 focus:outline-none right-4 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer`,
  default: `block relative mt-1 flex w-full flex-1 rounded-md border border-gray-300 bg-white py-3 px-4 px-3 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500`,
};

const Field = forwardRef(
  (
    { disabled, dot, error, icon, label, name, type = "text", ...rest },
    ref
  ) => {
    let component;

    // if you won't use select, you can delete this part
    if (type === "select") {
      component = (
        <select
          aria-required={dot}
          aria-invalid={!!error}
          className={`${style.default} ${disabled ? style.disabled : ""}
             ${error ? style.error : "border-gray-300"}
          `}
          disabled={disabled}
          id={name}
          name={name}
          ref={ref}
          {...rest}
        />
      );
    }

    // if you won't use textarea, you can delete this part
    if (type === "textarea") {
      component = (
        <textarea
          aria-required={dot}
          aria-invalid={!!error}
          className={`${style.default} ${disabled ? style.disabled : ""}
             ${error ? style.error : "border-gray-300"}
          `}
          disabled={disabled}
          id={name}
          name={name}
          ref={ref}
          {...rest}
        />
      );
    }

    // if you won't use checkbox, you can delete this part and the classes checkbox, checkboxContainer and checkboxLabel
    if (type === "checkbox") {
      component = (
        <div className={style.checkboxContainer}>
          <input
            aria-required={dot}
            aria-invalid={!!error}
            className={`${style.checkbox} ${disabled ? style.disabled : ""}`}
            disabled={disabled}
            id={name}
            name={name}
            type="checkbox"
            {...rest}
          />
          <span className={style.checkboxLabel} />
        </div>
      );
    }

    // if you won't use input, you can delete this part
    if (type !== "checkbox" && type !== "select" && type !== "textarea") {
      component = (
        <div className="relative">
          <div className={style.iconContainer}>
            <div className={style.icon}>{icon}</div>
          </div>
          <input
            aria-required={dot}
            aria-invalid={!!error}
            className={`${style.default} ${icon ? "pl-12" : ""}
               ${error ? style.error : "border-gray-300"}
               ${disabled ? style.disabled : ""}
            `}
            disabled={disabled}
            id={name}
            name={name}
            type={type}
            ref={ref}
            {...rest}
          />
          {error && <ErrorIcon />}
        </div>
      );
    }

    return (
      <div className={`${style.container} ${disabled ? "opacity-50" : ""}`}>
        <label
          htmlFor={name}
          className={`text-gray-700 ${dot && style.dot}`}
        >
          {label}
        </label>
        {component}
        {error && (
          <span
            role="alert"
            className={style.errorMessage}
          >
            {error}
          </span>
        )}
      </div>
    );
  }
);

Field.displayName = "Field";

const ErrorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    fill="currentColor"
    className="absolute right-2 -mt-7 text-red-500"
    viewBox="0 0 1792 1792"
  >
    <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z" />
  </svg>
);

const LockIcon = () => (
  <svg
    height="20"
    width="20"
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" />
  </svg>
);
