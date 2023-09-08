import { printMasterText }  from '../golden-master-text-test';

function buildFakeConsole(): jest.Mocked<typeof global.console> {
    jest.spyOn(global.console, 'log');
    return global.console as never;
}

describe('Gilded rose1', () => {
    let fakeConsole: jest.Mocked<typeof global.console>;

    beforeEach(() => {
        fakeConsole = buildFakeConsole();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe.each([...Array(10).keys()])('When days is %d', days => {
        beforeEach(() => {
            process.argv = ['', '', `${days}`];
        });

        beforeEach(() => {
            printMasterText();
        })

        it('Should match snapshot', () => {
            const output = fakeConsole.log.mock.calls.map(c => c[0]);
            expect(output).toMatchSnapshot();
        });
    })
});
