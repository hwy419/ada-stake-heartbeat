import { motion } from "framer-motion";

const NachoMascot = () => {
  return (
    <motion.div
      className="relative"
      animate={{ 
        y: [0, -10, 0],
        rotate: [-2, 2, -2]
      }}
      transition={{ 
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl"
      >
        {/* Nacho chip body - triangle shape */}
        <motion.path
          d="M100 20L180 160H20L100 20Z"
          fill="url(#nachoGradient)"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1, 0.9] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Crispy texture spots */}
        <circle cx="70" cy="100" r="8" fill="hsl(35, 80%, 45%)" opacity="0.6" />
        <circle cx="130" cy="110" r="6" fill="hsl(35, 80%, 45%)" opacity="0.5" />
        <circle cx="100" cy="130" r="7" fill="hsl(35, 80%, 45%)" opacity="0.4" />
        <circle cx="85" cy="80" r="5" fill="hsl(35, 80%, 45%)" opacity="0.5" />
        <circle cx="115" cy="85" r="4" fill="hsl(35, 80%, 45%)" opacity="0.4" />
        
        {/* Left eye */}
        <ellipse cx="75" cy="90" rx="15" ry="18" fill="white" />
        <motion.circle 
          cx="78" 
          cy="92" 
          r="8" 
          fill="hsl(var(--foreground))"
          animate={{ cx: [78, 80, 78] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <circle cx="80" cy="88" r="3" fill="white" />
        
        {/* Right eye */}
        <ellipse cx="125" cy="90" rx="15" ry="18" fill="white" />
        <motion.circle 
          cx="128" 
          cy="92" 
          r="8" 
          fill="hsl(var(--foreground))"
          animate={{ cx: [128, 130, 128] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <circle cx="130" cy="88" r="3" fill="white" />
        
        {/* Happy smile */}
        <path
          d="M70 120 Q100 150 130 120"
          stroke="hsl(var(--foreground))"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Rosy cheeks */}
        <circle cx="55" cy="110" r="10" fill="hsl(0, 70%, 70%)" opacity="0.4" />
        <circle cx="145" cy="110" r="10" fill="hsl(0, 70%, 70%)" opacity="0.4" />
        
        {/* Cardano logo on forehead */}
        <circle cx="100" cy="55" r="12" fill="hsl(var(--primary))" />
        <text 
          x="100" 
          y="60" 
          textAnchor="middle" 
          fill="hsl(var(--primary-foreground))" 
          fontSize="14"
          fontWeight="bold"
        >
          ₳
        </text>
        
        {/* Sparkles around the mascot */}
        <motion.g
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <path d="M30 50L35 55L30 60L25 55Z" fill="hsl(var(--primary))" />
          <path d="M170 40L175 45L170 50L165 45Z" fill="hsl(var(--accent))" />
          <path d="M160 140L165 145L160 150L155 145Z" fill="hsl(var(--primary))" />
        </motion.g>
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="nachoGradient" x1="100" y1="20" x2="100" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="hsl(45, 90%, 60%)" />
            <stop offset="50%" stopColor="hsl(40, 85%, 50%)" />
            <stop offset="100%" stopColor="hsl(35, 80%, 40%)" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Speech bubble */}
      <motion.div
        className="absolute -top-4 -right-8 bg-card border border-border rounded-xl px-3 py-2 shadow-lg"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >
        <span className="text-sm font-bold text-primary">Stake with us!</span>
        <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-border"></div>
      </motion.div>
    </motion.div>
  );
};

export default NachoMascot;
