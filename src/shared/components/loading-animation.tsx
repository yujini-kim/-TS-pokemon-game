import { motion } from 'framer-motion'

export default function LoadingAnimation() {
  return (
    <motion.div className='flex flex-col justify-center items-center gap-1'>
      <div className='flex'>
        {[...Array(3)].map((_, i) => (
          <motion.img
            key={i}
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 15, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
            className='size-8'
            src='./assets/image/poketball.webp'
          />
        ))}
      </div>

      <span className='font-semibold text-xs'>로딩중...</span>
    </motion.div>
  )
}
