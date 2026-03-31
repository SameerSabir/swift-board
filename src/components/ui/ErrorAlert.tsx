import React from "react";
import { motion } from "framer-motion";

interface ErrorAlertProps {
  error: string;
  onRetry?: () => void;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ error, onRetry }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="mb-12 max-w-2xl mx-auto w-full"
    >
      <div className="flex flex-col items-center justify-center p-8 md:p-12 bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200 rounded-2xl shadow-md">
        <div className="text-6xl md:text-7xl mb-4">⚠️</div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
          Unable to load blogs
        </h3>
        <p className="text-gray-600 text-center mb-6 max-w-md">
          We encountered an issue while fetching your blogs. Please try again in
          a moment.
        </p>
        <details className="w-full mb-6">
          <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700 font-medium">
            Error details
          </summary>
          <div className="mt-3 p-3 bg-white rounded-lg border border-red-200 text-xs text-gray-600 font-mono overflow-auto max-h-24">
            {error}
          </div>
        </details>
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-6 py-2.5 md:px-8 md:py-3 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Try Again
          </button>
        )}
      </div>
    </motion.div>
  );
};
