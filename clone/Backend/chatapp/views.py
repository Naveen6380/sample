from rest_framework.views import APIView
from rest_framework.response import Response
from django.conf import settings
import requests

class ChatView(APIView):
    def post(self, request):
        user_message = request.data.get("message")
        api_key = settings.GEMINI_API_KEY

        # Example Gemini API Call (or replace with OpenAI)
        url = "https://generativelanguage.googleapis.com/v1beta2/models/chat-bison-001:generateMessage"
        headers = {"Content-Type": "application/json"}
        payload = {
            "prompt": {
                "messages": [{"author": "user", "content": user_message}]
            }
        }

        response = requests.post(f"{url}?key={api_key}", json=payload, headers=headers)
        bot_reply = response.json().get("candidates", [{}])[0].get("content", "Sorry, something went wrong.")
        return Response({"response": bot_reply})
