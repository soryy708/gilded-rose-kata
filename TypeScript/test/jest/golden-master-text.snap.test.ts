import { printMasterText }  from '../golden-master-text-test-api';

const daysToSimulate = 30;

describe('Gilded Rose', () => {
    const fakeConsole = { log: jest.fn() };

    afterEach(() => {
        jest.resetAllMocks();
    });

    describe.each([...Array(daysToSimulate + 1).keys()])('When days is %d', days => {
        beforeEach(() => {
            printMasterText(days, fakeConsole);
        })

        it('Should match snapshot', () => {
            const output = fakeConsole.log.mock.calls.map(c => c[0]);
            expect(output).toMatchSnapshot();
        });
    })
});
