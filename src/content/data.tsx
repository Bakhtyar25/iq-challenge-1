import { getEndDate } from "@/utils/helper";
import { Variants } from "framer-motion";
import Facebook from "./svg/Facebook";
import Instagram from "./svg/Instagram";
import Pinterest from "./svg/Pinterest";

// Array of social media objects, each with a name and corresponding icon component.
export const social: Social[] = [
  {
    name: "Facebook",
    icon: <Facebook />,
  },
  {
    name: "Instagram",
    icon: <Instagram />,
  },
  {
    name: "Pinterest",
    icon: <Pinterest />,
  },
];

// Animation variants for flipping top element.
export const flipTopVariants: Variants = {
  initial: {
    zIndex: -10,
  },
  animate: {
    zIndex: 0,
  },
  exit: {
    zIndex: 10,
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
    transformOrigin: "bottom",
    rotateX: "90deg",
  },
};

// Animation variants for flipping bottom element.
export const flipBottomVariants: Variants = {
  initial: {
    transformOrigin: "top",
    rotateX: "90deg",
  },
  animate: {
    zIndex: 10,
    transition: {
      delay: 0.25,
      duration: 0.25,
      ease: "easeIn",
    },
    rotateX: "0deg",
  },
  exit: {
    transition: {
      delay: 0.55,
      duration: 0,
    },
    opacity: 0,
  },
};

// The calculated end date.
export const END_DATE = getEndDate();
