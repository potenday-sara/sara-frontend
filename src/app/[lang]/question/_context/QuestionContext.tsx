import { ChangeEvent, createContext, useCallback, useContext, useMemo, useState } from 'react';

export type QuestionContextType = {
  itemName: string;
  handleSetItemName: (itemName: string) => void;
  itemDescription: string;
  handleSetItemDescription: (itemDescription: string) => void;
  questionId: string;
  handleSetQuestionId: (questionId: string) => void;
  answer: string;
  handleSetAnswer: (answer: string) => void;
};

const QuestionContext = createContext<QuestionContextType | undefined>(undefined);

export default function QuestionProvider({ children }) {
  const [itemName, setItemName] = useState<string>('');
  const [itemDescription, setItemDescription] = useState<string>('');
  const [questionId, setQuestionId] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');

  const handleSetItemName = useCallback((item: string) => {
    setItemName(item);
  }, []);

  const handleSetItemDescription = useCallback((item: string) => {
    setItemDescription(item);
  }, []);

  const handleSetQuestionId = useCallback((id: string) => {
    setQuestionId(id);
  }, []);

  const handleSetAnswer = useCallback((questionAnswer: string) => {
    setAnswer(questionAnswer);
  }, []);

  const memoizedValue = useMemo<QuestionContextType>(
    () => ({
      itemName,
      handleSetItemName,
      handleSetItemDescription,
      itemDescription,
      questionId,
      handleSetQuestionId,
      answer,
      handleSetAnswer,
    }),
    [itemName, handleSetItemName],
  );

  return <QuestionContext.Provider value={memoizedValue}>{children}</QuestionContext.Provider>;
}

export const useQuestion = () => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error('useQuestion must be used within a QuestionProvider');
  }
  return context;
};
