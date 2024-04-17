"use server";

// This is a server function. It only executes on the server
export async function querySkinType(data: any) {
  console.log({ data });
  // call api here
  const jwtData = await fetch(
    "https://web.stytch.com/sdk/v1/sessions/authenticate",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,ja-JP;q=0.8,ja;q=0.7",
        authorization:
          "Basic cHVibGljLXRva2VuLWxpdmUtMjZhODlmNTktMDlmOC00OGJlLTkxZmYtY2U3MGU2MDAwY2I1OlpGVUduRTNlMG9YcHh0dklwbFVhamRtMTRYYnVtZEZXOUhyU3dMUFJKUTZ3",
        "cache-control": "no-cache",
        "content-type": "application/json",
        pragma: "no-cache",
        "sec-ch-ua":
          '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "x-sdk-client":
          "eyJldmVudF9pZCI6ImV2ZW50LWlkLWNiZjViNzg3LTIyYWItNDdhZS05ZGY1LTdmMGJjYTliNWVjMCIsImFwcF9zZXNzaW9uX2lkIjoiYXBwLXNlc3Npb24taWQtYTAzOGNlYTItZTNkMC00NTI5LTlkMWItYjA4NmY0ZmEyNDUyIiwicGVyc2lzdGVudF9pZCI6InBlcnNpc3RlbnQtaWQtOGY0OWEzZDYtZGZkNS00MDFjLWJlNjAtZjYyZjM5ZGEwZDcxIiwiY2xpZW50X3NlbnRfYXQiOiIyMDI0LTAzLTMxVDA5OjIwOjI1Ljc4NFoiLCJ0aW1lem9uZSI6IkFzaWEvVG9reW8iLCJzdHl0Y2hfdXNlcl9pZCI6InVzZXItbGl2ZS03MmUwOGM3YS01ODUzLTRiMmItOTk4ZS1iOTg2MDUxNjc4ZTMiLCJzdHl0Y2hfc2Vzc2lvbl9pZCI6InNlc3Npb24tbGl2ZS02MGVhOGY5MS02NzY5LTQ0MmYtOTYyMC00ZDUwYWJkYzFmNjUiLCJhcHAiOnsiaWRlbnRpZmllciI6Imdyb3EuY29tIn0sInNkayI6eyJpZGVudGlmaWVyIjoiU3R5dGNoLmpzIEphdmFzY3JpcHQgU0RLIiwidmVyc2lvbiI6IjQuNS4zIn19",
        "x-sdk-parent-host": "https://groq.com",
      },
      referrer: "https://groq.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: "{}",
      method: "POST",
      mode: "cors",
      credentials: "include",
    }
  );
  const {
    data: { session_jwt },
  } = await jwtData.json();

  const result = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      headers: {
        accept: "application/json",
        "accept-language": "en-US,en;q=0.9,ja-JP;q=0.8,ja;q=0.7",
        authorization: `Bearer ${session_jwt}`,
        "cache-control": "no-cache",
        "content-type": "application/json",
        "groq-app": "chat",
        "groq-organization": "org_01ht9w8r1qex3v82gqq5w7q8yy",
        pragma: "no-cache",
        "sec-ch-ua":
          '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "x-stainless-arch": "unknown",
        "x-stainless-lang": "js",
        "x-stainless-os": "Unknown",
        "x-stainless-package-version": "0.3.2",
        "x-stainless-runtime": "browser:chrome",
        "x-stainless-runtime-version": "123.0.0",
      },
      referrer: "https://groq.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify({
        model: "gemma-7b-it",
        messages: [
          {
            // Todo: Come up with a good system prompt (You are a dermatology expert and you will provide useful, helpful and actionable answers.)
            content:
              // "You are a dermatology expert. Based on the following information, please answer my skin type in Japanese and the measures I should take in Japanese.",
              "肌の専門家として回答してください。以下の質問への回答を参考に、質問者の肌のタイプを、対策とともに回答してください。",
            role: "system",
          },
          {
            // Todo; Write a prompt that you would like to have answered based on the questions and answers of the user.
            content:
              // "When I touch my forehead, nose and cheeks with the back of my hand, the whole area feels oily. My skin don't feel any skin tightness when nothing is applied after cleansing. My skin gets dry sometimes. My skin sometimes becomes red, sore and sensitive to cosmetics and external stimuli.",
              "Q:手の甲でTゾーン(おでこ・鼻)や頬を触ってみましょう。どこのベタつきが気になりますか？ A:Tゾーンだけ気になる Q:洗顔後に何も塗らない状態で肌のつっぱりを感じますか？ A:常につっぱりを感じるQ:肌が乾燥してかゆみや粉ふきが起こりますか？ A:時々起こる Q:化粧品や外部刺激に対して肌が赤くなったり痛みを感じたり敏感に炎症を起こしますか？ A:時々起こす # 出力フォーマット あなたの肌質：{肌質(複数のタイプ可)} 特徴：{その肌質の特徴} 対策や気をつけること：{対策や気をつけることを優しい口調で} ",
            role: "user",
          },
        ],
        temperature: 0.2,
        max_tokens: 2048,
        top_p: 0.8,
        stream: false,
      }),
      method: "POST",
      mode: "cors",
      credentials: "include",
    }
  );

  return (await result.json()).choices[0].message.content;
}

export async function querySkinCareProduct(data: any) {
  // call api here
  const jwtData = await fetch(
    "https://web.stytch.com/sdk/v1/sessions/authenticate",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,ja-JP;q=0.8,ja;q=0.7",
        authorization:
          "Basic cHVibGljLXRva2VuLWxpdmUtMjZhODlmNTktMDlmOC00OGJlLTkxZmYtY2U3MGU2MDAwY2I1OlpGVUduRTNlMG9YcHh0dklwbFVhamRtMTRYYnVtZEZXOUhyU3dMUFJKUTZ3",
        "cache-control": "no-cache",
        "content-type": "application/json",
        pragma: "no-cache",
        "sec-ch-ua":
          '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "x-sdk-client":
          "eyJldmVudF9pZCI6ImV2ZW50LWlkLWNiZjViNzg3LTIyYWItNDdhZS05ZGY1LTdmMGJjYTliNWVjMCIsImFwcF9zZXNzaW9uX2lkIjoiYXBwLXNlc3Npb24taWQtYTAzOGNlYTItZTNkMC00NTI5LTlkMWItYjA4NmY0ZmEyNDUyIiwicGVyc2lzdGVudF9pZCI6InBlcnNpc3RlbnQtaWQtOGY0OWEzZDYtZGZkNS00MDFjLWJlNjAtZjYyZjM5ZGEwZDcxIiwiY2xpZW50X3NlbnRfYXQiOiIyMDI0LTAzLTMxVDA5OjIwOjI1Ljc4NFoiLCJ0aW1lem9uZSI6IkFzaWEvVG9reW8iLCJzdHl0Y2hfdXNlcl9pZCI6InVzZXItbGl2ZS03MmUwOGM3YS01ODUzLTRiMmItOTk4ZS1iOTg2MDUxNjc4ZTMiLCJzdHl0Y2hfc2Vzc2lvbl9pZCI6InNlc3Npb24tbGl2ZS02MGVhOGY5MS02NzY5LTQ0MmYtOTYyMC00ZDUwYWJkYzFmNjUiLCJhcHAiOnsiaWRlbnRpZmllciI6Imdyb3EuY29tIn0sInNkayI6eyJpZGVudGlmaWVyIjoiU3R5dGNoLmpzIEphdmFzY3JpcHQgU0RLIiwidmVyc2lvbiI6IjQuNS4zIn19",
        "x-sdk-parent-host": "https://groq.com",
      },
      referrer: "https://groq.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: "{}",
      method: "POST",
      mode: "cors",
      credentials: "include",
    }
  );
  const {
    data: { session_jwt },
  } = await jwtData.json();

  const result = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      headers: {
        accept: "application/json",
        "accept-language": "en-US,en;q=0.9,ja-JP;q=0.8,ja;q=0.7",
        authorization: `Bearer ${session_jwt}`,
        "cache-control": "no-cache",
        "content-type": "application/json",
        "groq-app": "chat",
        "groq-organization": "org_01ht9w8r1qex3v82gqq5w7q8yy",
        pragma: "no-cache",
        "sec-ch-ua":
          '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "x-stainless-arch": "unknown",
        "x-stainless-lang": "js",
        "x-stainless-os": "Unknown",
        "x-stainless-package-version": "0.3.2",
        "x-stainless-runtime": "browser:chrome",
        "x-stainless-runtime-version": "123.0.0",
      },
      referrer: "https://groq.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify({
        model: "gemma-7b-it",
        messages: [
          {
            // Todo: Come up with a good system prompt (You are a dermatology expert and you will provide useful, helpful and actionable answers.)
            content:
              "Please try to provide useful, helpful and actionable answers.",
            role: "system",
          },
          {
            // Todo; Write a prompt that you would like to have answered based on the questions and answers of the user.
            content:
              "Give me a 3 step skin care routine for a asian female in their 20s.",
            role: "user",
          },
        ],
        temperature: 0.2,
        max_tokens: 2048,
        top_p: 0.8,
        stream: false,
      }),
      method: "POST",
      mode: "cors",
      credentials: "include",
    }
  );

  return (await result.json()).choices[0].message.content;
}
