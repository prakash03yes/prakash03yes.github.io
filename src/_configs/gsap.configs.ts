import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const appGsap = gsap;
const appScrollTrigger = ScrollTrigger;
const appScrollSmoother = ScrollSmoother;

export { appGsap, appScrollSmoother, appScrollTrigger };