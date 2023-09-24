import Team from '../team';

test('testing whether character already exists', () => {
  const team = new Team();
  team.add('magician');
  expect(() => { team.add('magician'); }).toThrow(new Error('Персонаж уже существует в команде'));
});

test('testing adding all characters', () => {
  const team = new Team();
  team.addAll('swordsman', 'magician', 'bowman', 'deamon', 'undead', 'zombie');
  expect(team.toArray()).toEqual(['swordsman', 'magician', 'bowman', 'deamon', 'undead', 'zombie']);
});

test('testing adding a character', () => {
  const team = new Team();
  team.add('magician');
  expect(team.toArray()).toEqual(['magician']);
});
