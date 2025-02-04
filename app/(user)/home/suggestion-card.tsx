import { motion } from 'framer-motion';

import type { Suggestion } from './data/suggestions';

interface SuggestionCardProps extends Suggestion {
  /** @default 0 */
  delay?: number;
  /** @default false */
  useSubtitle?: boolean;
  onSelect: (text: string) => void;
}

export function SuggestionCard({
  title,
  subtitle,
  delay = 0,
  useSubtitle = false,
  onSelect,
}: SuggestionCardProps) {
  return (
    <div className="flex flex-col gap-1.5 rounded-xl bg-muted/50 p-3.5 transition-colors duration-200 hover:bg-primary/5">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay }}
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.99 }}
        onClick={() => onSelect(useSubtitle ? subtitle : title)}
        className="text-left"
      >
        <div className="mb-1.5 truncate text-sm font-medium">{title}</div>
        <div className="truncate text-xs text-muted-foreground/80">
          {subtitle}
        </div>
      </motion.button>
    </div>
  );
}
