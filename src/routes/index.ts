type TRoutePermission = {
  path: string;
  permission?: string;
  type: "public" | "private";
};

// Needs to be updated with Keycloak's roles for each route that needs it.
export const routePermissions: TRoutePermission[] = [
  {
    path: "/",
    // permission: "home.view",
    type: "private",
  },
  {
    path: "/login",
    type: "public",
  },
  {
    path: "/unauthorized",
    type: "public",
  },
  {
    path: "/api/auth",
    type: "public",
  },
  {
    path: "/_next/static/",
    type: "public",
  },
];
