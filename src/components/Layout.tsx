import type { ReactNode } from 'react';
// Removed Navbar import as it's already in App.tsx

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
      <div className="App">
        <main className="main-content">
          {children}
        </main>
        {/* Footer would go here if you have one */}
      </div>
  );
};

export default Layout;
