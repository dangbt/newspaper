import React from "react";
import Header from "layouts/header";
import Footer from "layouts/footer";

export default function MainLayout({ children, title }) {
  return (
    <>
      <Header title={title} />
      {children}
      <Footer />
    </>
  );
}
