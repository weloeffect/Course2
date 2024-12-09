"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const fileHandler_1 = require("../fileHandler");
const path_1 = __importDefault(require("path"));
jest.mock('fs');
describe('Data Utils', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should read data from a JSON file', () => {
        const mockData = [{ id: 1, title: 'Sample Course' }];
        jest.spyOn(fs_1.default, 'readFileSync').mockReturnValueOnce(JSON.stringify(mockData));
        const result = (0, fileHandler_1.readData)('courses.json');
        expect(result).toEqual(mockData);
    });
    it('should write data to a JSON file', () => {
        const data = [{ id: 2, title: 'New Course' }];
        const writeFileSyncMock = jest.spyOn(fs_1.default, 'writeFileSync').mockImplementation();
        (0, fileHandler_1.writeData)('courses.json', data);
        expect(writeFileSyncMock).toHaveBeenCalledWith(path_1.default.join(__dirname, '../../data/courses.json'), JSON.stringify(data, null, 2), 'utf-8');
    });
});
