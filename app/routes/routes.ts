import type { RouteConfig } from "@react-router/dev/routes";
import { index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("api/auth/*", "routes/api.auth.$.ts"),
  route("protected", "routes/protected.tsx")
  // route("api/user/:userId/conversations/", "routes/conversations.tsx"),
  // route("api/user/:userId/messages", "routes/messages.tsx")

] satisfies RouteConfig;
