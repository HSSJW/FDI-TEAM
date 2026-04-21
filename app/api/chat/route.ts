import { createAnthropic } from "@ai-sdk/anthropic";
import { streamText, type CoreMessage } from "ai";
import { buildSystemPrompt } from "@/lib/prompts";
import { chatTools } from "@/lib/tools";

export const runtime = "nodejs";
export const maxDuration = 300;

const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const MODEL_ID =
  process.env.ANTHROPIC_MODEL ?? "claude-haiku-4-5-20251001";

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response(
      JSON.stringify({
        error:
          "ANTHROPIC_API_KEY가 설정되지 않았습니다. .env.local 또는 Vercel 환경변수를 확인해 주세요.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  const { messages } = (await req.json()) as { messages: CoreMessage[] };

  const systemMessage: CoreMessage = {
    role: "system",
    content: buildSystemPrompt(),
    experimental_providerMetadata: {
      anthropic: { cacheControl: { type: "ephemeral" } },
    },
  };

  const result = await streamText({
    model: anthropic(MODEL_ID, { cacheControl: true }),
    messages: [systemMessage, ...messages],
    tools: chatTools,
    maxSteps: 5,
  });

  return result.toDataStreamResponse();
}
