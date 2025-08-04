import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


const features = [
  {
    title: "Get Smart Suggestions Instantly",
    subtitle: "Tap Once, Learn Now",
    description:
      "Instantly get real-time suggestions for spending, saving, and forecasting based on your business’s financial behavior. One tap syncs your records and tells you what’s up.",
    image: "/images/finsight-1.png",
  },
  {
    title: "Plans That Match Your Business Rhythm",
    subtitle: "Know When To Spend or Hold",
    description:
      "Finsight doesn’t just track — it predicts. Whether it’s time to scale or tighten the belt, you’ll know when it matters most. Your financial rhythm, decoded.",
    image: "/images/finsight-2.png",
  },
  {
    title: "It Learns With You",
    subtitle: "Truly Personalized Finance",
    description:
      "The more you use Finsight, the sharper it gets. It remembers patterns, detects waste, and prompts you before problems occur. Frictionless financial clarity.",
    image: "/images/finsight-3.png",
  },
];

function FeatureBlock({ feature, reverse }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4, // When 40% of the block is visible
    triggerOnce: false, // 👈 Keeps observing scroll events
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 40 }); // 👈 Animate back out
    }
  }, [inView, controls]);

  return (
    <div
      className={`py-24 flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center justify-center px-2 py-20 gap-12`}
    >
      {/* Image */}
      <div className="md:w-1/2">
        <img
          src={feature.image}
          alt={feature.title}
          className="rounded-2xl w-full max-w-md mx-auto shadow-xl"
        />
      </div>

      {/* Animated Text */}
     <motion.div
  ref={ref}
  initial={{ opacity: 0, y: 40 }}
  animate={controls}
  transition={{ duration: 0.8 }}
  className="md:w-1/2"
>
  <h2 className="text-3xl text-sm uppercase font-bold tracking-widest text-gray-200 mb-5">
    {feature.title}
  </h2>
  <h3 className="text-xl md:text-4xl mb-6">{feature.subtitle}</h3>
  <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
    {feature.description}
  </p>
</motion.div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-black text-white">
      <div className="max-w-6xl mx-auto pt-32">
        <h2 className="text-4xl font-bold text-center mb-20">How does Finsight work?</h2>
        {features.map((feature, idx) => (
          <FeatureBlock
            key={idx}
            feature={feature}
            reverse={idx % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}