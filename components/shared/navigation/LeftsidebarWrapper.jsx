import AuthButtonServer from "../buttons/AuthButtonServer";
import LeftSidebar from "./LeftSidebar";

export default function LeftsidebarWrapper() {
  return (
    <>
      <div className="flex flex-col">
        <AuthButtonServer />;
        <LeftSidebar />;
      </div>
    </>
  );
}
