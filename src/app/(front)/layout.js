import NavBar from "@/components/Navbar";

export default function FrontLayout({ children }) {
  return (
    <div className="md:mx-auto max-w-screen-xl px-4 select-none bg-white min-h-screen">
      <NavBar />
      {children}
    </div>
  );
}
