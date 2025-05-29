import { useContext } from "react";

import { ProviderContext } from "../contexts/profileContext";

export default function useProfile() {
  const context = useContext(ProviderContext);

  return context;
}
