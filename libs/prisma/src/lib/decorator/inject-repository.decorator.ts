import { Inject } from '@nestjs/common';

import { PrismaDelegateNames } from '../type';

export const InjectRepository = (name: PrismaDelegateNames) => {
  return Inject(name);
};
