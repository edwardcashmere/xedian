import { whiteText, greenText, getYearsBetween } from '../helpers/utils';

export function type_message() {
  const waitAndBreak = '^300 <br/>';
  const start =
      '<span style="color: #08a6f3;" class="margin-left--10 font-size-14 !important">➜:~</span>';
  const myStack =
      start +
      whiteText('Skill Set?') +
      waitAndBreak +
      greenText([
        'JavaScript',
        'Nodejs',
        'ReactJS',
        'Python',
        'Docker',
        'Kubernetes',
        'Django',
        'Flask',
        'AWS'
      ]).join(',^200 ');
  const learning = waitAndBreak +
  start +
  whiteText('Learning?') +
  waitAndBreak +  greenText(['Currently Learning React Native and Java ', 'Also Interested in Data Science']).join(',^200 ');
  const experience = getYearsBetween(new Date('September 1 2019 00:00'));
  const yearsOfExperience =
      waitAndBreak +
      start +
      whiteText('Experience?') +
      waitAndBreak +
      greenText([experience]);
  const funGames = greenText(['Chess', 'Music', 'Yoga', 'Fitness' , 'Oh! and Cooking ']).join(',^200 ');
  const fullFunTime = waitAndBreak + start + whiteText('My Fun time?') + waitAndBreak + funGames;
  return [myStack + yearsOfExperience + learning + fullFunTime];
}