import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const alert = (text, type = "success") => {

  Toastify({
    text,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    backgroundColor:
      type === "success"
        ? "linear-gradient(to right, #00b09b, #96c93d)"
        : type === "error"
        ? "linear-gradient(to right, #ff5f6d, #ffc371)"
        : "#333",
  }).showToast(); // 👈 FIXED THIS
};
