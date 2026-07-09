const API_URL = "https://adhd-chatbot-api-ylqu.onrender.com";

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
  const data = await response.json();
  console.log("Status:", response.status);
  console.log("Resposta:", data);
  
  if (!response.ok) {
    throw new Error(JSON.stringify(data));
  }

  

  return data.answer;
}