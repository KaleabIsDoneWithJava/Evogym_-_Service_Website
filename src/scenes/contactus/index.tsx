import { SelectedPage } from "@/shared/types";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "../benefits/HText";

type Props = {
  setSelectedPage: (vaule: SelectedPage) => void;
};

function ContactUs({ setSelectedPage }: Props) {
  const {
    register,
    trigger, //allows us to validate our form if needed. Async function.
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/*  HEADER  */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW </span>
            TO GET IN SHAPE
          </HText>
          <p className="my-5 ">
            At in tellus integer feugiat scelerisque varius morbi. Nisi vitae
            suscipit a diam. Lorem ipsum dolor sit amet, consectetur elit, sed
            do eiusmod tempor incididunt ut labore et magna aliqua. Ullamcorper
            a lacus vestibulum sed arcu.
          </p>
        </motion.div>

        {/* FORM & IMAGE */}

        <div className="mt-10 items-center justify-between gap-16 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/el/hobime"
              method="POST"
            >
              <input
                className="mb-6 w-full rounded-lg border-2 border-gray-300 px-5 py-3 placeholder-gray-100 focus:border-primary-500 focus:outline-none"
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-red-500 ">
                  {errors.name.type === "required" && "This Field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters."}
                </p>
              )}
              <input
                className=" mb-6 w-full rounded-lg border-2 border-gray-300 px-5 py-3 placeholder-gray-100 focus:border-primary-500 focus:outline-none"
                type="email"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // Fooking regex
                })}
              />
              {errors.email && (
                <p className="mt-1 text-red-500 ">
                  {errors.email.type === "required" &&
                    "This Field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
              <input
                className="mb-6 w-full rounded-lg border-2 border-gray-300 px-5 py-3 placeholder-gray-100 focus:border-primary-500 focus:outline-none"
                type="text"
                placeholder="SUBJECT"
                {...register("subject", {
                  required: true,
                  maxLength: 200,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-red-500 ">
                  {errors.name.type === "required" && "This Field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 200 characters."}
                </p>
              )}
              <textarea
                className="mb-6  w-full rounded-lg border-2 border-gray-300 px-5 py-3 placeholder-gray-100 focus:border-primary-500 focus:outline-none"
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-red-500 ">
                  {errors.message.type === "required" &&
                    "This Field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2,000 characters."}
                </p>
              )}
              <button
                type="submit"
                className=" rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                Submit
              </button>
            </form>
          </motion.div>

          {/* IMAGE */}

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactUs;
