const API_URL = "http://localhost:3000";

export async function askChatbot(message: string): Promise<string> {
  const response = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
    }),
  });

  if (!response.ok) {
    throw new Error("Erro ao comunicar com a IA");
  }

  const data = await response.json();

  return data.answer;
}