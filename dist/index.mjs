// src/components/PromiseButton.tsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2, X } from "lucide-react";

// src/utils/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/PromiseButton.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var PromiseButton = ({
  onClickPromise,
  label = "Submit",
  confirm = false,
  className,
  disabled = false,
  loadingComponent,
  successComponent,
  errorComponent,
  confirmComponent,
  backgroundColor = "default",
  loadingBackgroundColor = "loading-default",
  successBackgroundColor = "success-default",
  errorBackgroundColor = "error-default"
}) => {
  const [status, setStatus] = useState("idle");
  const handleClick = async () => {
    setStatus("loading");
    try {
      if (status !== "loading") {
        await onClickPromise();
      }
      setStatus("success");
      setTimeout(() => setStatus("idle"), 4e3);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4e3);
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
  return /* @__PURE__ */ jsxs(
    motion.button,
    {
      onClick: !confirm ? handleClick : handleConfirm,
      disabled: disabled || status === "loading",
      className: cn(
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
        status !== "confirming" && status !== "idle" && "w-10",
        className
      ),
      initial: false,
      animate: { scale: status === "loading" ? 0.95 : 1 },
      children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute inset-0 flex items-center justify-center",
            initial: { x: "-100%" },
            animate: { x: 0 },
            transition: { type: "spring", stiffness: 100, damping: 15 },
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: `w-full h-full ${getBackgroundColor()} absolute inset-0`
              }
            )
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 min-w-[2rem] h-6 flex items-center justify-center", children: /* @__PURE__ */ jsxs(AnimatePresence, { mode: "wait", children: [
          status === "idle" && /* @__PURE__ */ jsx(
            motion.span,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className: "transition-opacity duration-200",
              children: label
            },
            "idle"
          ),
          status === "confirming" && /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className: "flex space-x-2",
              children: confirmComponent || /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: handleClick,
                    className: `p-2 rounded-md ${successBackgroundColor}`,
                    children: /* @__PURE__ */ jsx(Check, { size: 16 })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: handleCancel,
                    className: `p-2 rounded-md ${errorBackgroundColor}`,
                    children: /* @__PURE__ */ jsx(X, { size: 16 })
                  }
                )
              ] })
            },
            "confirming"
          ),
          status !== "idle" && status !== "confirming" && /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { y: 20, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              exit: { y: -20, opacity: 0 },
              transition: { type: "spring", stiffness: 150, damping: 10 },
              className: "absolute w-24 h-full flex items-center justify-center",
              children: [
                status === "loading" && (loadingComponent || /* @__PURE__ */ jsx(Loader2, { className: "animate-spin w-6 h-6", size: 24 })),
                status === "success" && (successComponent || /* @__PURE__ */ jsx(Check, { size: 24 })),
                status === "error" && (errorComponent || /* @__PURE__ */ jsx(X, { size: 24 }))
              ]
            },
            status
          )
        ] }) })
      ]
    }
  );
};
export {
  PromiseButton,
  cn
};
