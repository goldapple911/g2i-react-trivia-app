import React from 'react';

export type QuizContextValue = {
  answers: boolean[];
  setAnswer: (index: number, answer: boolean) => void;
  clearAnswers: () => void;
};

export const QuizContext = React.createContext<QuizContextValue>({
  answers: [],
  setAnswer: () => undefined,
  clearAnswers: () => undefined,
});

export function QuizContextProvider({ children }: { children: React.ReactNode }) {
  const [value, setValue] = React.useState<QuizContextValue>({
    answers: [],
    setAnswer: () => undefined,
    clearAnswers: () => undefined,
  });

  const setAnswer = React.useCallback(
    (index: number, answer: boolean) => {
      const { answers } = value;
      answers[index] = answer;

      setValue({
        ...value,
        answers,
      });
    },
    [value],
  );

  const clearAnswers = React.useCallback(
    () =>
      setValue({
        ...value,
        answers: [],
      }),
    [value],
  );

  const finalContext = React.useMemo(() => {
    return {
      ...value,
      setAnswer,
      clearAnswers,
    };
  }, [value, setAnswer, clearAnswers]);

  return <QuizContext.Provider value={finalContext}>{children}</QuizContext.Provider>;
}
