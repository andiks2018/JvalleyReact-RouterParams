import React from "react";

export default function MainLayout({ children }) {
  return (
    <main className="main_layout">
      <div className="content">{children}</div>
    </main>
  );
}
