import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

// Vite plugin: writes .nojekyll and 404.html into dist after build
// Both are required for GitHub Pages: .nojekyll prevents Jekyll processing,
// 404.html enables deep-link reloads (though Hash Router makes it optional).
function githubPagesPlugin() {
  return {
    name: 'github-pages',
    closeBundle() {
      fs.writeFileSync('dist/.nojekyll', '')
      const html404 = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>SGSPL CLOUD</title>
<script>sessionStorage.redirect=location.href;location.replace(location.origin);</script>
</head><body></body></html>`
      fs.writeFileSync('dist/404.html', html404)
    },
  }
}


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  // Use './' so all asset paths are relative — required for GitHub Pages
  // root-folder deployment (Settings → Pages → Branch: main → / (root))
  base: './',

  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    githubPagesPlugin(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.png', '**/*.jpg', '**/*.webp'],
})
