import NavBar from "@/components/Navbar";

export default function UserLayout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
