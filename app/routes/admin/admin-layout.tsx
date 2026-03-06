import { Outlet, redirect, useLoaderData } from "react-router";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { MobileSidebar, NavItems } from "../../components";
import { account } from "~/appwrite/client";
import { getExistingUser, requireAuth, storeUserData } from "~/appwrite/auth";

// export async function clientLoader() {
//   try {
//     const user = await account.get();

//     if (!user.$id) return redirect("/sign-in");

//     const existingUser = await getExistingUser(user.$id);

//     if (existingUser?.status === "user") {
//       return redirect("/");
//     }

//     return existingUser?.$id ? existingUser : await storeUserData();
//   } catch (e) {
//     console.log("Error in clientLoader", e);
//     return redirect("/sign-in");
//   }
// }

export async function clientLoader() {
  const authUser = await requireAuth();

  const existingUser = await getExistingUser(authUser.$id);

  // if (existingUser?.status === "user") {
  //   throw redirect("/");
  // }

  return existingUser?.$id ? existingUser : await storeUserData();
}

const AdminLayout = () => {
  const user = useLoaderData();

  return (
    <div className="admin-layout">
      <MobileSidebar />

      <aside className="w-full max-w-[270px] hidden lg:block">
        <SidebarComponent width={270} enableGestures={false}>
          <NavItems />
        </SidebarComponent>
      </aside>

      <aside className="children">
        <Outlet context={{ user }} />
      </aside>
    </div>
  );
};
export default AdminLayout;
