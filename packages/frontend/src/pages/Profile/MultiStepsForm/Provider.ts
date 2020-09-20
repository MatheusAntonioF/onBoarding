import { createContext } from 'react';

interface ContextDTO {
  handleSetStepForm: (step: string) => void;
}

export const MultiStepsContext = createContext<ContextDTO>({} as ContextDTO);

export default MultiStepsContext.Provider;
