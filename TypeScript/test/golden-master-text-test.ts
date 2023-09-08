import { printMasterText } from './golden-master-text-test-api';

let days: number = 2;
if (process.argv.length > 2) {
  days = +process.argv[2];
}
printMasterText(days);
