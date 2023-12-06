import { createNextRouteHandler } from "uploadthing/next";
 
import { ourFileRouter } from "./core";
 
// Export routes for Next App Router 
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
  config: {
    uploadthingId: "zer6zuuu6n",
    uploadthingSecret: "sk_live_6ad3422f8d80b2620f2f871d04340b5ef5af5c56c7c53d13ee402170cf71d43b",
  },
});
