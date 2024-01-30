import Team from '../Classes/Team';
import characters from '../data';

describe('test Team.add', () => {
  const team = new Team();

  test('correct add', () => {
    team.add(characters[0]);

    expect(team.members.size).toBe(1);
  });

  test('incorrect add - members has this element', () => {
    expect(() => team.add(characters[0])).toThrow(
      'нельзя добавить больше одного уникального типа персонажа'
    );
  });
});

describe('test Team.addAll', () => {
  const team = new Team();
  team.addAll(characters);

  test('correct addAll', () => {
    expect(team.members.size).toBe(characters.length);
  });

  test('in correct addAll - members has this elements', () => {
    team.addAll(characters);

    expect(team.members.size).toBe(characters.length);
  });
});

describe('test Team.toArray', () => {
  test('correct return []', () => {
    const team = new Team();
    team.addAll(characters);

    const arr = team.toArray();

    expect(Array.isArray(arr)).toBeTruthy();
  });
});

describe('team iterator', () => {
  const team = new Team();
  team.addAll(characters);
  const arrayFromTeam = team.toArray();

  test('size === length', () => {
    expect(team.members.size).toBe(arrayFromTeam.length);
  });

  test('lists all character', () => {
    const teamSecond = new Set(arrayFromTeam);
    arrayFromTeam.forEach((character) => teamSecond.delete(character));

    expect(teamSecond.size).toBe(0);
  });

  test('iterator', () => {
    let cnt = 0;
    for (let character of team) {
      expect(character).toEqual(arrayFromTeam[cnt]);
      cnt++;
    }
  });
});
