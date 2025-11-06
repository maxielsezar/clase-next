import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    // 🔹 Login con Google
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // 🔹 Login con usuario y contraseña
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email@ejemplo.com" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        // Acá deberías validar el usuario desde una base de datos real.
        // Por ahora simulamos un usuario de ejemplo:
        const user = { id: "1", name: "Usuario Demo", email: "demo@ejemplo.com", password: "123456" };

        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return user;
        }

        // Si no coincide, devolvemos null → login falla
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/login", // página personalizada
  },

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };