import { uuid } from 'uuidv4';

import Tech from '../../entity/Tech';

const defaultTechs = ['Node', 'React'];

class TechSeed {
  constructor() {
    this.execute();
  }

  public execute(): Tech[] {
    const techs = defaultTechs.map(defaultTech => ({
      id: uuid(),
      name: defaultTech,
      created_at: new Date(),
      updated_at: new Date(),
    }));
    return techs;
  }
}

export default TechSeed;
