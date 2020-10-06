import { createContext } from 'react';

interface Tech {
  name: string;
}

interface ContextDTO {
  yearExperience: string;
  setYearExperience: React.Dispatch<React.SetStateAction<string>>;
  techs: Tech[];
  setTechs: React.Dispatch<React.SetStateAction<Tech[]>>;
  handleSetStepForm: (step: string) => void;
}

export const MultiStepsContext = createContext<ContextDTO>({} as ContextDTO);

export default MultiStepsContext.Provider;
