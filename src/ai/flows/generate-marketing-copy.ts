'use server';
/**
 * @fileOverview A Genkit flow for generating marketing copy for new drink variants.
 *
 * - generateMarketingCopy - A function that handles the marketing copy generation process.
 * - GenerateMarketingCopyInput - The input type for the generateMarketingCopy function.
 * - GenerateMarketingCopyOutput - The return type for the generateMarketingCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMarketingCopyInputSchema = z.object({
  flavorProfile: z.string().describe('The primary flavor notes of the drink.'),
  targetAudience: z.string().describe('The target demographic for the drink.'),
  keyIngredients: z
    .array(z.string())
    .optional()
    .describe('Optional: List of key ingredients and their functions.'),
  moodAndTone: z
    .string()
    .optional()
    .describe('Optional: The desired mood and tone for the copy (e.g., "playful", "sophisticated", "energetic").'),
});
export type GenerateMarketingCopyInput = z.infer<
  typeof GenerateMarketingCopyInputSchema
>;

const GenerateMarketingCopyOutputSchema = z.object({
  description: z.string().describe('A concise (1-3 sentences) description of the drink.'),
  ingredientBenefits: z
    .array(z.string())
    .describe('A list of short, punchy benefits derived from key ingredients.'),
  socialMediaBlurb: z
    .string()
    .describe('A short, engaging blurb suitable for social media platforms (e.g., Twitter/Instagram).'),
});
export type GenerateMarketingCopyOutput = z.infer<
  typeof GenerateMarketingCopyOutputSchema
>;

export async function generateMarketingCopy(
  input: GenerateMarketingCopyInput
): Promise<GenerateMarketingCopyOutput> {
  return generateMarketingCopyFlow(input);
}

const generateMarketingCopyPrompt = ai.definePrompt({
  name: 'generateMarketingCopyPrompt',
  input: {schema: GenerateMarketingCopyInputSchema},
  output: {schema: GenerateMarketingCopyOutputSchema},
  prompt: `You are an expert marketing copywriter for a modern functional soda brand. Your goal is to create compelling and concise marketing content.

Generate a drink description (1-3 sentences), a list of ingredient benefits, and a social media blurb based on the following information:

Flavor Profile: {{{flavorProfile}}}
Target Audience: {{{targetAudience}}}

{{#if keyIngredients}}
Key Ingredients: {{#each keyIngredients}}- {{{this}}}
{{/each}}{{/if}}

{{#if moodAndTone}}
Mood and Tone: {{{moodAndTone}}}
{{/if}}

Ensure the output is in JSON format, matching the provided schema. The language should be engaging and reflect a premium, modern brand.
`,
});

const generateMarketingCopyFlow = ai.defineFlow(
  {
    name: 'generateMarketingCopyFlow',
    inputSchema: GenerateMarketingCopyInputSchema,
    outputSchema: GenerateMarketingCopyOutputSchema,
  },
  async (input) => {
    const {output} = await generateMarketingCopyPrompt(input);
    return output!;
  }
);
