export default async function Layout({ children }: { children: any; params: { id: string } }) {
  return (
    <div id="root" className="flex-1 flex flex-col">
      {children}
    </div>
  );
}
