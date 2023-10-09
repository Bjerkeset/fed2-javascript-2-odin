"use client";
import {sidebarLinks} from "@/constants";
import Link from "next/link";
import {usePathname} from "next/navigation";

function Bottombar() {
  const pathname = usePathname();
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          const IconComponent = link.Component; // Destructure the Component
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`bottombar_link ${isActive && `bg-secondary`}`}
            >
              <IconComponent className="text-primary w-6 h-6" />
              <p className="text-subtle-medium text-light-1 max-sm:hidden">
                {/* Only display the first word */}
                {link.label.split(/\s+/)[0]}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Bottombar;
