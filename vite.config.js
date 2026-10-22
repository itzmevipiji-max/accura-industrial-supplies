import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repositoryOwner = 'itzmevipiji-max';
const repositoryName = 'accura-industrial-supplies';
const isUsernameSite = repositoryName.toLowerCase() === `${repositoryOwner.toLowerCase()}.github.io`;

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // GitHub project sites are served below /repository-name/. Set
  // VITE_BASE_PATH=/ for a custom domain or username.github.io repository.
  base: process.env.VITE_BASE_PATH
    || (mode === 'production' && !isUsernameSite ? `/${repositoryName}/` : '/'),
}));
