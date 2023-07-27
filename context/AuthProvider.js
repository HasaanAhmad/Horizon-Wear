"use client";

import { SessionProvider } from "next-auth/react";

const SessionProviders = ({ children }) => {
  return <SessionProvider session={children.session}>{children}</SessionProvider>;
};

export default SessionProviders;