import UserPage from "../pages/users/UserPage";
import UserPageModal from "../pages/users/UserPageModal";
import Portal from "../shared/components/Portal";

const userPageRoutes = {
  path: "/:id?",
  element: <UserPage />,
  // errorElement: <ErrorPage />,
  children: [
    {
      path: ":action/:id",
      element: (
        <Portal>
          <UserPageModal />
        </Portal>
      ),
    },
  ],
};

export default userPageRoutes;
