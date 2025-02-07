import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "lzp90u0v", // Replace with your actual project ID
  dataset: "production",
  apiVersion: "2025-02-07", // Use today's date for latest API version
  useCdn: true, // Enable CDN for faster loading (use false for real-time updates)
});

export default client;
