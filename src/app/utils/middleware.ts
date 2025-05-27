import { routePermissions } from "@/routes";
import { matchesPathname } from "@utils/formatters";

export function hasRoutePermission(pathname: string, roles?: string[]) {
  const route = routePermissions.find((routePermission) =>
    matchesPathname(pathname, routePermission.path),
  );

  if (!route || route?.type === "public" || !route?.permission) return true;

  return roles?.includes(route?.permission);
}

export function isRoutePublic(pathname: string) {
  return routePermissions.some(
    (route) => matchesPathname(pathname, route.path) && route.type === "public",
  );
}
