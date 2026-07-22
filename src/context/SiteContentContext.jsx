import { createContext, useContext, useEffect, useState } from "react";

const SiteContentContext = createContext(null);

// Fetches /content.json at runtime instead of importing content.js at
// build time — see app/site_content.py. This is what lets an edit made
// in the tracker's Site Content admin page show up on a page reload
// with no `npm run build` needed.
export function SiteContentProvider({ children }) {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/content.json", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error(`content.json ${res.status}`);
        return res.json();
      })
      .then(setContent)
      .catch((err) => setError(err));
  }, []);

  if (error) {
    return (
      <div style={{ padding: "3rem", textAlign: "center", fontFamily: "sans-serif" }}>
        Couldn't load site content. Please refresh the page.
      </div>
    );
  }

  if (!content) return null;

  return <SiteContentContext.Provider value={content}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  const ctx = useContext(SiteContentContext);
  if (!ctx) throw new Error("useSiteContent must be used within SiteContentProvider");
  return ctx;
}
