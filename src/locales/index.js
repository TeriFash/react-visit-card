import en from './en/main.json';
import ru from './ru/main.json';
import ua from './ua/main.json';

let resources = {};
const list = {ua, en, ru};

Object.keys(list).forEach((item) => (resources[item] = {main: list[item]}));

export { resources };
