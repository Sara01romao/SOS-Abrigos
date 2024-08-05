import { createIcons, X, Bell, BookOpenText, House, MapPinned } from 'lucide';
import BoneModal from "../../../lib/Modals";

createIcons({
  icons: {
      BookOpenText,
      House,
      MapPinned,
      Bell, X
  }
});

const openHelpBtn = document.getElementById("help-btn") as HTMLButtonElement;
const closeHelpBtn = document.querySelectorAll<HTMLElement>(".close-help-modal") as NodeListOf<HTMLElement>;
const helpModalDiv = document.getElementById("help-modal-div") as HTMLElement;

new BoneModal({wrapperElement: helpModalDiv, openTriggers: [openHelpBtn], closeTriggers: closeHelpBtn});
