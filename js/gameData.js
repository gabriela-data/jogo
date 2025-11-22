// gameData agora é montado a partir de módulos por nível para facilitar manutenção.
import { level1 } from './levels/level1.js';
import { level2 } from './levels/level2.js';
import { level3 } from './levels/level3.js';
import { level4 } from './levels/level4.js';
import { level5 } from './levels/level5.js';
import { level6 } from './levels/level6.js';
import { level7 } from './levels/level7.js';
import { level8 } from './levels/level8.js';
import { level9 } from './levels/level9.js';
import { level10 } from './levels/level10.js';
import { level11 } from './levels/level11.js';
import { level12 } from './levels/level12.js';
import { level13 } from './levels/level13.js';
import { level14 } from './levels/level14.js';
import { level15 } from './levels/level15.js';
import { level16 } from './levels/level16.js';
import { endings } from './levels/endings.js';

export const gameData = Object.assign({},
    level1,
    level2,
    level3,
    level4,
    level5,
    level6,
    level7,
    level8,
    level9,
    level10,
    level11,
    level12,
    level13,
    level14,
    level15,
    level16,
    endings
);

export default gameData;
