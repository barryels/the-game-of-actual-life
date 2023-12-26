import OpenAI from "openai";

const openai = new OpenAI();

const contextPrompt =
  "Given a team of 5 software developers working on a digital product";

async function generateProblems(count, type, severity) {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: contextPrompt,
      },
      {
        role: "user",
        content: `Generate ${count} random, ${severity} severity, ${type} problems that could occur in this project.`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices);
}

async function generateSolutionOptions(count, problem) {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: contextPrompt,
      },
      {
        role: "user",
        content: problem,
      },
      {
        role: "user",
        content: `Briefly describe ${count} solutions to this problem, with 2 trade-offs for each solution. Format your response as JSON.`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices);
}

generateSolutionOptions(
  2,
  "Given the following problem: Inadequate error handling leading to undefined behavior and potential data corruption."
);
