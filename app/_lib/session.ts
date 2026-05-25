import { UserType } from "../_types/user";
import { cookies } from "next/headers";

// Set session cookies
export const setSession = async (user: UserType) => {
  (await cookies()).set("session", JSON.stringify(user), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });
};

// Get session cookies
export const getSession = async (): Promise<UserType | null> => {
  const session = (await cookies()).get("session")?.value;
  if (!session) return null;
  const user = JSON.parse(session) as UserType;
  return user;
};

// Delete session cookies - logoutAction
export const deleteSession = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("session");
};
