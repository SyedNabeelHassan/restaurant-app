import { defineConfig } from "sanity";


export const config = defineConfig({
  projectId: "your_project_id", // 👈 Replace with your actual Sanity project ID
  dataset: "production", // or "development"
  title: "My Next.js + Sanity Project",
  apiVersion: "2023-01-01",
  basePath: "/studio", // Access Sanity Studio at /studio
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});
