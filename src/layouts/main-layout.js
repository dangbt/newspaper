import React from "react";
import Header from "layouts/header";
import Footer from "layouts/footer";

export default function MainLayout({ children, title }) {
  return (
    <div className="container mx-auto">
      <Header title={title} />
      {children}
      <Footer />
    </div>
  );
}
