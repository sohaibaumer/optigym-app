import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Top of the Line Facilities",
    description:
      "From state of the art equipment to spacious workout areas, we spare no expense in providing you with the best fitness amenities.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "From high-intensity interval training and strength-based workouts to yoga, dance, and specialized programs, to keep you motivated. ",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "We pride ourselves on having a team who are passionate, knowledgeable and committed to helping you unlock your full potential.",
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
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
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
          <HText>
            IT'S NOT JUST A GYM BUT A{" "}
            <span className="text-secondary-500">LIFESTYLE!</span>
          </HText>
          <p className="my-5 text-sm">
            Immerse yourself in our world-class studios, thoughtfully designed
            to cater to diverse fitness needs. Whether you're looking to build
            strength, improve flexibility, or enhance endurance, our specialized
            training areas and dedicated instructors will guide you every step
            of the way.
          </p>
        </motion.div>

        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          <div>
            <div className="relative">
              <div className="before:content-abstractwaves before:absolute before:-left-20 before:-top-20 before:z-[1]">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    HUNDREDS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-secondary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Step into our gym and witness the difference that expert
                trainers can make in your fitness routine. Experience the
                personalized attention, motivation, and expertise that will
                empower you to achieve remarkable results and unlock your true
                potential. With OptiGym's pro trainers by your side, success
                becomes an achievable reality.
              </p>
              <p className="mb-5">
                Experience the joy of exploring and evolving through our vast
                array of classes, where each session offers a chance to
                challenge yourself, grow stronger, and embrace a healthier
                lifestyle. At OptiGym, we're committed to providing you with
                limitless opportunities to thrive and make fitness an integral
                part of your life.
              </p>
            </motion.div>

            <div className="relative mt-16">
              <div className="before:content-sparkles before:absolute before:-bottom-20 before:right-40 before:z-[-1]">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
