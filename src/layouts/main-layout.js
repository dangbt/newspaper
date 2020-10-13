import React from "react";
import Header from "layouts/header";
import Footer from "layouts/footer";

export default function MainLayout({ children, title }) {
  return (
    <>
      <div className="container mx-4 sm:mx-auto">
        <Header title={title} />
        <div
          style={{
            minHeight: "calc(100vh - 200px)"
          }}
        >
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
