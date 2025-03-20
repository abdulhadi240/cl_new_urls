// PageWrapper.tsx (Server Component)
import Register from "./Register";

export const metadata = {
  title: "Register Course - London Crown Institute of Training", // ✅ Updated title
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function Page() {
  return <Register />;
}
