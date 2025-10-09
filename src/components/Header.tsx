export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 mt-20 py-5 dark:bg-gray-800">{children}</div>
  );
}
