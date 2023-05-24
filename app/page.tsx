import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";

import { getServerSideConfig } from "./config/server";

const serverConfig = getServerSideConfig();

export default async function App() {
  return (
    <>
      <Home />
      {serverConfig?.isVercel && <Analytics />}

      <footer className="layout-footer">
        因联云可提供ChatGPT、百度文心一言、阿里通义千问、商汤商量的GPT开发
      </footer>
    </>
  );
}
