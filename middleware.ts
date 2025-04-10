import { authMiddleware } from 'next-auth/middleware';

export default authMiddleware;  // Exporta el middleware de NextAuth

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],  // Define las rutas donde aplicarás el middleware
};
