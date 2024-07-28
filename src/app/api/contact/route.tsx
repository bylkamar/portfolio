export async function POST(request: Request) {
  const { text } = await request.json();
  const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`,
      {
        // Remplacez par l'URL de votre API externe
        method: "GET",
        next: { revalidate: 10 },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      return Response.json({ message: "Message envoyé avec succès!" });
    } else {
      return Response.error();
    }
  } catch (error) {}
  return Response.error();
}
