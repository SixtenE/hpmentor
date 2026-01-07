import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  questions: defineTable({
    text: v.string(),
    options: v.array(
      v.object({
        id: v.string(),
        label: v.string(),
      }),
    ),
    correctAnswer: v.string(),
    explanation: v.optional(v.string()),
    category: v.optional(v.string()),
  }).index("by_category", ["category"]),
});
