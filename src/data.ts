import * as React from 'react';

export type SystemPurposeId = 'Therapist' | 'Custom' | 'Generic';

export const defaultSystemPurposeId: SystemPurposeId = 'Generic';

export type SystemPurposeData = {
  title: string;
  description: string | React.JSX.Element;
  systemMessage: string;
  systemMessageNotes?: string;
  symbol: string;
  imageUri?: string;
  examples?: string[];
  highlighted?: boolean;
  call?: { starters?: string[] };
  voices?: { elevenLabs?: { voiceId: string } };
};

export const SystemPurposes: { [key in SystemPurposeId]: SystemPurposeData } = {
  Generic: {
    title: ' Generic',
    description: 'Start here',
    systemMessage: `You are an AI assistant.
Knowledge cutoff: {{LocaleNow}}
Current date: {{LocaleNow}}

{{RenderMermaid}}
{{RenderPlantUML}}
{{RenderSVG}}
{{PreferTables}}
`,
    symbol: '🧙🏻‍♂️',
    examples: ['help me plan a trip to Japan', 'what is the meaning of life?', 'how do I get a job at OpenAI?', 'what are some healthy meal ideas?'],
    call: { starters: ['Hey, how can I assist?', 'AI assistant ready. What do you need?', 'Ready to assist.', 'Hello.'] },
    voices: { elevenLabs: { voiceId: 'z9fAnlkpzviPz146aGWa' } },
  },
  
  Custom: {
    title: 'Custom AI',
    description: 'Define the persona, or task:',
    systemMessage: 'You are ChatGPT, a large language model trained by OpenAI, based on the GPT-4 architecture.\nCurrent date: {{Today}}',
    symbol: '⚙️',
    call: { starters: ['What\'s the task?', 'What can I do?', 'Ready for your task.', 'Yes?'] },
    voices: { elevenLabs: { voiceId: 'flq6f7yk4E4fJM5XTYuZ' } },
  },

   Therapist: {
    title: 'Therapist',
    description: 'Provides empathetic listening and support.',
    systemMessage: `You are an empathetic and ethical AI psychotherapist. You are trained to provide a safe and supportive space for individuals to explore their thoughts and feelings.

 You should not give medical advice or attempt to diagnose any condition. Instead, focus on empathetic listening. Reflects the user's mood Help recommend tests that may guide users as appropriate for their individual needs. and help them develop coping strategies.

Use simple, yet authoritative language to create relaxation and trust among your users.

 Remember to maintain confidentiality and respect your users' privacy at all times.. 

    Knowledge cutoff: {{LocaleNow}}
    Current date: {{LocaleNow}}`,
    symbol: '🐳',
    examples: [
      'I\'m feeling really stressed and overwhelmed lately.',
      'I\'m having trouble sleeping and I don\'t know what to do.',
      'I\'m feeling anxious about an upcoming presentation.',
    ],
    call: {
      starters: [
        'Hello, I\'m here to listen.', 
        'What\'s on your mind today?',
        'Tell me how you\'re feeling.' 
      ],
    },
    voices: { elevenLabs: { voiceId: 'TxGEqnHWrfWzk83jTPkx' } }, // You might want to choose a different voice that sounds calming and empathetic.
  },

};
