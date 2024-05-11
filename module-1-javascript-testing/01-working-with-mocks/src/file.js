//everything needed to read files
const { error } = require('console');
const { readFile } = require('fs/promises');
const DEFAULT_OPTION = {
  maxLines: 3,
  fields: ['id', 'name', 'profession', 'age']
}

class File {
  static async csvToJSON(filePath) {
    const content = await readFile(filePath, 'utf8');
    this.isValid(content);
  }

  static isValid(csvString, options = DEFAULT_OPTION) {
    //to see file content:
    //fs.readFileSync('./mocks/threeItems.valid.csv', 'utf8')

    //[0] header 
    //[1] first row
    // [2] second row
    // ...variable = rest of file
    const [headers, ...fileWithoutHeader] = csvString.split(/\r?\n/);

    if(!fileWithoutHeader.length) {
      return {
        error: error.FILE_LENGHT_ERROR_MESSAGE,
        valid: false
      }
    }
    console.log(headers, fileWithoutHeader);
  }
}

module.exports = File;
