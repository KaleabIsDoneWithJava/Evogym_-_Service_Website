import { motion } from "framer-motion";
import { BenefitType, SelectedPage } from "@/shared/types";
import HText from "./HText";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "At in tellus integer feugiat scelerisque varius morbi. Nisi vitae suscipit tellus mauris a diam.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100s of Diverse Classes",
    description:
      "At in tellus integer feugiat scelerisque varius morbi. Nisi vitae suscipit tellus mauris a diam.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed et dolore magna aliqua. ",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)} // To make the navbar highlight the page name when you scroll back from bottom.
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers, and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
      </motion.div>

      {/* BENEFITS */}
      <motion.div
        className="mt-5 items-center justify-between gap-8 md:flex "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
      >
        {benefits.map((benefit: BenefitType) => (
          <Benefit
            key={benefit.title}
            title={benefit.title}
            icon={benefit.icon}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
          />
        ))}
      </motion.div>

      {/* GRAPHICS AND DESCRIPTION */}
      <div>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>.
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION */}
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
              <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ullamcorper a lacus vestibulum sed arcu. Praesent tristique
                magna sit amet purus gravida quis blandit turpis. Sit amet
                cursus sit amet dictum sit amet. Felis imperdiet proin fermentum
                leo vel orci porta. Tristique senectus et netus et malesuada
                fames. Facilisis mauris sit amet massa vitae tortor condimentum
                lacinia.
              </p>
              <p className="mb-5">
                Tellus in hac habitasse platea dictumst vestibulum rhoncus est.
                Fames ac turpis egestas sed tempus urna. Vitae congue eu
                consequat ac felis donec. Nibh sit amet commodo nulla facilisi
                nullam vehicula ipsum a. Nisi lacus sed viverra tellus in hac
                habitasse platea. Ultrices gravida dictum fusce ut placerat orci
                nulla pellentesque dignissim. Scelerisque purus semper eget duis
                at tellus.
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
