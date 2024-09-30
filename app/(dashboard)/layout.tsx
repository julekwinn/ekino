type TProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: TProps) {
  return <div className="bg-red-500 h-[100vh]">{children}</div>;
}
