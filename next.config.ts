import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Produit `.next/standalone` : un serveur Node autonome qui embarque
   * uniquement les dépendances réellement importées.
   *
   * C'est ce qui permet à l'image Docker de ne contenir ni `node_modules`
   * complet ni `npm install` au runtime.
   */
  output: "standalone",
};

export default nextConfig;
