import { SelectedPage } from "@/shared/types";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "../benefits/HText";

type Props = {
  setSelectedPage: (vaule: SelectedPage) => void;
};

function ContactUs({ setSelectedPage }: Props) {
  const inputStyles = `"w-full rounded-lg border-2 border-gray-500 px-5 py-3 placeholder-gray-500"`;

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
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
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
                className="w-full rounded-lg border-2 border-gray-300 px-5 py-3 placeholder-gray-500 active:border-gray-500"
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
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactUs;
