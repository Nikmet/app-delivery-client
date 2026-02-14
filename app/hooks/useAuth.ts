import { AuthContext } from "@/providers/auth/auth-provider";
import { useContext } from "react";

export const useAuth = () => useContext(AuthContext);
