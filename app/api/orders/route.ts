import { NextResponse } from "next/server";

type OrderPayload = {
  locale?: string;
  name?: string;
  phone?: string;
  product?: string;
  location?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as OrderPayload;
  const { name, phone, product, location, locale } = body;

  if (!name || !phone || !product) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return NextResponse.json(
      { error: "Telegram environment variables are not configured" },
      { status: 500 },
    );
  }

  const text = [
    "New Vertex order",
    `Product: ${product}`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Locale: ${locale ?? "unknown"}`,
    `Location: ${location ?? "unknown"}`,
    `Time: ${new Date().toISOString()}`,
  ].join("\n");

  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    },
  );

  if (!telegramResponse.ok) {
    const errorText = await telegramResponse.text();
    return NextResponse.json(
      { error: "Telegram notification failed", details: errorText },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
