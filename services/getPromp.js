
// get the prompt given the location and the days of the trip
export default async function getPrompt (location, days) {
  const response = await fetch("https://api.cohere.ai/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_COHERE_API_KEY}`,
      "Cohere-Version": "2022-12-06",
    },
    body: JSON.stringify({
      model: "command-xlarge-20221108",
      prompt: `Give me an itinerary of ${location} for ${days} days.`,
      max_tokens: 500,
      temperature: 0.9,
      k: 0,
      p: 0.75,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop_sequences: ['--'],
      return_likelihoods: "NONE",
    }),
  }).then((res) => res.json());
  return response;
}


