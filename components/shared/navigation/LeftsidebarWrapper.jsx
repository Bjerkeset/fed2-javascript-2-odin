import AuthButtonServer from "../buttons/AuthButtonServer";
import LeftSidebar from "./LeftSidebar";

export default function LeftsidebarWrapper() {
  return (
    <>
      <div className="flex flex-col border-r border-r-secondary sm:p-2 p-0">
        <AuthButtonServer />
        <LeftSidebar />
      </div>
    </>
  );
}
