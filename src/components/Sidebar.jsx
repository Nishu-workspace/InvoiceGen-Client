import { TbFileInvoice } from "react-icons/tb";
import { FaRobot } from "react-icons/fa"; // Icon for AI generation (you can pick another)

const Sidebar = ({ onSelect }) => {
  return (
    <div className="bg-[#111111] h-[100vh] p-4 text-white">
      {/* New Invoice Button */}
      <button className="flex items-center w-full p-3 mb-4 bg-[#1e1e1e] rounded hover:bg-[#2a2a2a] "onClick={() => onSelect('new-invoice')}>
        <TbFileInvoice className="mr-2 text-lg" />
        <span>New Invoice</span>
      </button>

      {/* Generate with AI Button */}
      <button className="flex items-center w-full p-3 bg-[#1e1e1e] rounded hover:bg-[#2a2a2a]">
        <FaRobot className="mr-2 text-lg" />
        <span>Generate with AI</span>
      </button>
    </div>
  );
};

export default Sidebar;
