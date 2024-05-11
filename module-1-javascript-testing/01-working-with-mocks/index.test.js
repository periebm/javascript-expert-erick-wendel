const File = require('./src/file');
const { error } = require('./src/constants');
const assert = require('assert')
//IFEE
;(async () => {
  //created variables creted in this section are only valid on it's execution
  {
    const filePath = './mocks/emptyFile.invalid.csv';
    const expected = new Error(error.FILE_LENGHT_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);
    await assert.rejects(result, expected);
  }
})()
