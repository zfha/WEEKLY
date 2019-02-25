import * as fs from 'fs';
class Lex {
  tokens: [Token];

  constructor() {}

  parse(filePath: string) {
    let content = fs.readFileSync(filePath, { encoding: 'utf-8' });
    while (content) {
      // let token =
      //   this.getTokenWhiteBlank(content) || this.getTokenAnnotaion(content);
      this.tokens.push(token);
    }
  }
}
