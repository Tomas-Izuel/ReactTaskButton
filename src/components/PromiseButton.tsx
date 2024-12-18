import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2, X } from "lucide-react";

import { cn } from "../utils/cn";

interface PromiseButtonProps {
  onClickPromise: () => Promise<void>;
  label: string | JSX.Element;
  confirm?: boolean;
  className?: string;
  disabled?: boolean;
  loadingComponent?: React.ReactNode;
  successComponent?: React.ReactNode;
  errorComponent?: React.ReactNode;
  confirmComponent?: React.ReactNode;
  backgroundColor?: string;
  loadingBackgroundColor?: string;
  successBackgroundColor?: string;
  errorBackgroundColor?: string;
}

export const PromiseButton: React.FC<PromiseButtonProps> = ({
  onClickPromise,
  label = "Submit",
  confirm = false,
  className,
  disabled = false,
  loadingComponent,
  successComponent,
  errorComponent,
  confirmComponent,
  backgroundColor = 'default',
  loadingBackgroundColor = 'loading-default',
  successBackgroundColor = 'success-default',
  errorBackgroundColor = 'error-default',
}) => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error" | "confirming"
  >("idle");

  const handleClick = async () => {
    setStatus("loading");
    try {
      if (status !== "loading") {
        await onClickPromise();
      }
      setStatus("success");
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const handleConfirm = () => {
    if (confirm && status === "idle") {
      setStatus("confirming");
    }
  };

  const handleCancel = () => {
    setStatus("idle");
  };

  const getBackgroundColor = () => {
    switch (status) {
      case "loading":
        return loadingBackgroundColor;
      case "success":
        return successBackgroundColor;
      case "error":
        return errorBackgroundColor;
      case "confirming":
        return "bg-transparent";
      default:
        return backgroundColor;
    }
  };

  return (
    <motion.button
      onClick={!confirm ? handleClick : handleConfirm}
      disabled={disabled || status === "loading"}
      className={cn(
        `
        relative overflow-hidden
        p-2
        rounded-md
        font-medium text-white
        ${getBackgroundColor()}
        transition-colors duration-300 ease-in-out
        disabled:opacity-50 disabled:cursor-not-allowed
        h-10
      `,
        status !== "confirming" && "w-10",
        className
      )}
      initial={false}
      animate={{ scale: status === "loading" ? 0.95 : 1 }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div
          className={`w-full h-full ${getBackgroundColor()} absolute inset-0`}
        />
      </motion.div>

      <div className="relative z-10 min-w-[2rem] h-6 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.span
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="transition-opacity duration-200"
            >
              {label}
            </motion.span>
          )}
          {status === "confirming" && (
            <motion.div
              key="confirming"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex space-x-2"
            >
              {confirmComponent || (
                <>
                  <button
                    onClick={handleClick}
                    className={`p-2 rounded-md ${successBackgroundColor}`}
                  >
                    <Check size={16} />
                  </button>
                  <button
                    onClick={handleCancel}
                    className={`p-2 rounded-md ${errorBackgroundColor}`}
                  >
                    <X size={16} />
                  </button>
                </>
              )}
            </motion.div>
          )}
          {status !== "idle" && status !== "confirming" && (
            <motion.div
              key={status}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
              className="absolute w-24 h-full flex items-center justify-center"
            >
              {status === "loading" &&
                (loadingComponent || (
                  <Loader2 className="animate-spin w-6 h-6" size={24} />
                ))}
              {status === "success" &&
                (successComponent || <Check size={24} />)}
              {status === "error" && (errorComponent || <X size={24} />)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
};
