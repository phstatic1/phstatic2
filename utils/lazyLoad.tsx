import { lazy, ReactNode } from 'react';
import { motion } from 'framer-motion';

// Fallback Loading Component
export const LoadingFallback = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen flex items-center justify-center bg-gray-50"
  >
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
      <p className="text-gray-600 font-medium">Carregando...</p>
    </div>
  </motion.div>
);

// Lazy loading wrapper
export const createLazyComponent = (
  importFunc: () => Promise<{ default: React.ComponentType<any> }>,
  componentName: string
) => {
  return lazy(importFunc);
};

// Memoize heavy components
export const memoizeComponent = <P extends object>(
  Component: React.ComponentType<P>,
  isEqual?: (prevProps: P, nextProps: P) => boolean
) => {
  return React.memo(Component, isEqual);
};
