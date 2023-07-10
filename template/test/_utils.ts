import { fileURLToPath } from "node:url";
import path from "node:path";

export const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const atFixture = (name: string) => path.join(__dirname, "fixtures", name);
