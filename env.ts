import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NEXT_GEMINI_API_KEY: z.string(),
  },
  experimental__runtimeEnv: {},
});
