import React from 'react';

export type QuizContextValue = {
  answers: boolean[];
  pushAnswer: (answer: boolean) => void;
  clearAnswers: () => void;
};

export const QuizContext = React.createContext<QuizContextValue>({
  answers: [],
  pushAnswer: () => undefined,
  clearAnswers: () => undefined,
});

export function QuizContextProvider({ children }: { children: React.ReactNode }) {
  const [value, setValue] = React.useState<QuizContextValue>({
    answers: [],
    pushAnswer: () => undefined,
    clearAnswers: () => undefined,
  });

  const pushAnswer = React.useCallback(
    (answer: boolean) =>
      setValue({
        ...value,
        answers: [...value.answers, answer],
      }),
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
      pushAnswer,
      clearAnswers,
    };
  }, [value, pushAnswer, clearAnswers]);

  return <QuizContext.Provider value={finalContext}>{children}</QuizContext.Provider>;
}
