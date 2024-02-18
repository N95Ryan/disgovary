import { FaGear } from "react-icons/fa6";

function ConstructionLoading() {
  return (
    <div className="flex flex-row items-center justify-center space-x-4">
    <span className="text-4xl text-white animate-spin animate-infinite animate-duration-[5000ms]"><FaGear /></span>
        <p className="text-xl font-normal text-white animate-pulse animate-infinite">Page en construction, merci de revenir ultérieurement.</p>
    <span className="text-4xl text-white animate-spin animate-infinite animate-duration-[5000ms]"><FaGear /></span>
</div>
);
}

export default ConstructionLoading