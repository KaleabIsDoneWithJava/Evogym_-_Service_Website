import { motion } from "framer-motion";
import { BenefitType, SelectedPage } from "@/shared/types";
import HText from "./HText";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Benefit from "./Benefit";

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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
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
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers, and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </div>
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
    </section>
  );
};

export default Benefits;
