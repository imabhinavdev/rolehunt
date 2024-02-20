import TestingSidebar from "@/components/TestingSidebar";
import UserSidebar from "@/components/UserSidebar";

export default function UserLayout({ children }) {
  return (
    <>
      <UserSidebar>{children} </UserSidebar>
      {/* <TestingSidebar children={children} /> */}
    </>
  );
}
