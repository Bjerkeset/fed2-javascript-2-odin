import {User} from "lucide-react";
import ProfileList from "../cards/ProfileList";

export default function RightSidebar() {
  return (
    <section>
      <div className="custom-scrollbar rightsidebar">
        <div className="flex flex-1 flex-col justify-start">
          <h3 className="text-heading4-medium text-light-1">People</h3>
          <ProfileList />
        </div>
        <div className="flex flex-1 flex-col justify-start">
          <h3 className="text-heading4-medium text-light-1">
            Suggested People
          </h3>
        </div>
      </div>
    </section>
  );
}
