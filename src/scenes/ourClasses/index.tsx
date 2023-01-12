import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Our weight training classes are structured to help individuals improve their strength, endurance, and overall fitness levels using various weightlifting techniques and are led by qualified instructors or personal trainers.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Our Yoga classes offer a holistic and rejuvenating experience, focusing on the integration of mind, body, and spirit. Led by certified yoga instructors, these classes provide a sanctuary for individuals to cultivate flexibility, strength, balance, and inner peace through the practice of yoga postures, breathing techniques, and mindfulness.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Our AB Core classes are specialized to focus on strengthening and toning the abdominal muscles, including the core muscles of the abdomen, lower back, and hips and are led by qualified instructors or personal trainers who specialize in core training.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Our Adventure classes are exhilarating and unique that take participants out of the traditional gym environment and into the great outdoors. These classes provide an opportunity to engage in thrilling activities and explore nature while getting a full-body workout.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Our Fitness classes are dynamic and inclusive group workouts designed to improve overall fitness levels and provide a fun and motivating exercise experience. Led by experienced instructors, these classes cater to individuals of all fitness levels and offer a variety of formats to keep participants engaged and challenged.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Our Training classes are structured and comprehensive sessions designed to help individuals achieve specific fitness goals and enhance their overall performance. Led by skilled trainers, these classes provide specialized instruction and personalized guidance to maximize results and optimize training effectiveness.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Whether you're a beginner looking to explore different exercise
              styles or an experienced fitness enthusiast seeking new
              challenges, our diverse classes have something for everyone. With
              a wide range of class formats, timings, and durations, you can
              easily find the perfect fit for your schedule and fitness
              preferences.
            </p>
          </div>
        </motion.div>
        <div className="mx-auto mt-10 w-5/6 overflow-x-scroll">
          <ul className="flex w-[252vw] gap-[1vw] md:w-[165vw] md:gap-[2vw]">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
