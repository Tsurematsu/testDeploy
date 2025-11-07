import { motion } from 'framer-motion';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  isReversed?: boolean;
}

const ProcessStep = ({ number, title, description, image, imageAlt, isReversed = false }: ProcessStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isReversed ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute left-1/2 -translate-x-1/2 -top-6 w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-semibold text-2xl z-10 shadow-lg"
      >
        {number}
      </motion.div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 items-center gap-8 bg-white/5 rounded-xl p-8 hover:bg-white/10 transition-all duration-300`}>
        {!isReversed ? (
          <>
            <motion.div 
              className="flex justify-center sm:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img 
                src={image} 
                alt={imageAlt} 
                className="w-[300px] h-[250px] object-cover rounded-xl shadow-xl hover:transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            <motion.div 
              className="text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
            </motion.div>
          </>
        ) : (
          <>
            <motion.div 
              className="text-white order-2 sm:order-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
            </motion.div>
            <motion.div 
              className="flex justify-center sm:justify-start order-1 sm:order-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img 
                src={image} 
                alt={imageAlt} 
                className="w-[300px] h-[250px] object-cover rounded-xl shadow-xl hover:transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ProcessStep;