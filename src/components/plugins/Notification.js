import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

const toastify = (text, type) => {
  createToast(text, {
    position: "top-right",
    type: type,
    transition: "bounce",
    showIcon: true,
    swipeClose: true,
    timeout: 3000,
  });
};

export default toastify;
