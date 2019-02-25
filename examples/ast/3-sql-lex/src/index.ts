import * as fs from 'fs';
class Lex {
  tokens: [Token];

  constructor() {}

  parse(filePath: string) {
    let content = fs.readFileSync(filePath, { encoding: 'utf-8' });
    while (content) {
      let token =
        this.getTokenWhiteBlank(content) || this.getTokenAnnotaion(content);
      this.tokens.push(token);
    }
  }

  getTokenWhiteBlank(content: string): Token {
    const regex = new RegExp(/^(\s+)/);
    const matchs = content.match(regex);
    if (matchs) {
      return new Token(TokenEnum.WHITEBLANK, matchs[0]);
    }
    return null;
  }

  getTokenAnnotaion(content: string): Token {
    const regex = new RegExp(/^\/\*.*?(?:\*\/|$)/);
    const matchs = content.match(regex);
    if (matchs) {
      return new Token(TokenEnum.ANNOTAION, matchs[0]);
    }
    return null;
  }
}
