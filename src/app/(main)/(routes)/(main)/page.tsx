import StatsCards from "./_components/stats-cards";
import ActiveUsers from "./_components/active-users";
import { getServerAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerAuthSession();

  if (session) {
    console.log("REDIRECT FROM SIGN IN");
    redirect("/");
  }
  return (
    <>
      <StatsCards />
      <ActiveUsers />
      {/* <Customers /> */}
    </>
  );
};

export default page;
