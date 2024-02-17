import UserSidebar from "@/components/UserSidebar";

export default function UserLayout({ children }) {
  return (
    <>
      <UserSidebar children={children} />
    </>
  );
}
