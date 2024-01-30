import Bowman from './Classes/Characters/Bowman';
import Daemon from './Classes/Characters/Daemon';
import Magician from './Classes/Characters/Magician';
import Swordsman from './Classes/Characters/Swordsman';
import Undead from './Classes/Characters/Undead';
import Zombie from './Classes/Characters/Zombie';

const charactersToAdd = [Bowman, Daemon, Magician, Swordsman, Undead, Zombie];

const characters = charactersToAdd.reduce(
  (acc, character) => [...acc, new character(character.name)],
  []
);

export default characters;
