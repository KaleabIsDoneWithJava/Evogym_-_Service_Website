import { SelectedPage } from "@/shared/types";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "../benefits/HText";

type Props = {
  setSelectedPage: (vaule: SelectedPage) => void;
};

function ContactUs({ setSelectedPage }: Props) {
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
      </motion.div>
    </section>
  );
}

export default ContactUs;
