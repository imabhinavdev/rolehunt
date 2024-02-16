import NavBar from "@/components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
