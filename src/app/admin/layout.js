import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLaout({ children }) {
  return (
    <>
      <AdminSidebar>{children}</AdminSidebar>
    </>
  );
}
