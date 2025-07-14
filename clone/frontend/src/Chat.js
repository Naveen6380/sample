const sendMessage = async () => {
  const response = await fetch("http://localhost:8000/api/chat/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input }),
  });
  const data = await response.json();
  setMessages([...messages, { role: "user", content: input }, { role: "bot", content: data.response }]);
};
