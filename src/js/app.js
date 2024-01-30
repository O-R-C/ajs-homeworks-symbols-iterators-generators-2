import Team from './Classes/Team';
import characters from './data';

const team = new Team();
team.addAll(characters);

for (let character of team) {
  console.log(character);
}

