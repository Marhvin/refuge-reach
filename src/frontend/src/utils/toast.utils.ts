import toast, { ToastOptions } from "react-hot-toast";

export const toastSuccess = (message: string, icon?: string) => {
  let toastConfig: ToastOptions = {
    style: {
      color: "#000",
      backgroundColor: "#50f17c",
    },
  };
  if (icon) toastConfig = { ...toastConfig, icon };
  toast(message, toastConfig);
};

export const toastError = (message: string) => {
  const toastConfig: ToastOptions = {
    icon: "❌",
    style: {
      color: "#000",
      backgroundColor: "#f15050",
    },
  };
  toast(message, toastConfig);
};
