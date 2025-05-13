import type { FC } from 'react';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t mt-12 py-6 bg-secondary">
      <div className="container text-center text-sm text-muted-foreground">
        © {currentYear} EUROSER. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
