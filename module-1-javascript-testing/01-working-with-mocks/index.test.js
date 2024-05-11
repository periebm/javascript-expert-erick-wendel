const File = require('./src/file');
const { error } = require('./src/constants');
const assert = require('assert');
//IFEE
(async () => {
  //created variables creted in this section are only valid on it's execution
  {
    const filePath = './mocks/emptyFile.invalid.csv';
    const expected = new Error(error.FILE_LENGHT_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);
    await assert.rejects(result, expected);
  }

  {
    const filePath = './mocks/header.invalid.csv';
    const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);
    await assert.rejects(result, expected);
  }

  {
    const filePath = './mocks/fiveItens.invalid.csv';
    const expected = new Error(error.FILE_LENGHT_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);
    await assert.rejects(result, expected);
  }

  {
    const filePath = './mocks/threeItems.valid.csv';
    const expected = [
      {
        id: '1',
        name: 'peri',
        profession: 'developer',
        age: '25',
      },
      { id: '2', name: 'joaquim', profession: 'fireman', age: '50' },
      { id: '3', name: 'adao', profession: 'manager', age: '64' },
    ];
    const result = await File.csvToJSON(filePath);
    assert.deepEqual(result, expected);
  }
})();
