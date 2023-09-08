import { printMasterText }  from '../golden-master-text-test';

describe('Gilded rose1', () => {
    const fakeConsole = { log: jest.fn() };

    afterEach(() => {
        jest.resetAllMocks();
    });

    describe.each([...Array(10).keys()])('When days is %d', days => {
        beforeEach(() => {
            process.argv = ['', '', `${days}`];
        });

        beforeEach(() => {
            printMasterText(fakeConsole);
        })

        it('Should match snapshot', () => {
            const output = fakeConsole.log.mock.calls.map(c => c[0]);
            expect(output).toMatchSnapshot();
        });
    })
});
