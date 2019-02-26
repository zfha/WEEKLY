import { FORMERR } from 'dns';
import { stringify } from 'querystring';
import Token from '../token';
import Pipe from './pipe';

const symbolDict = [
  { name: 'NOT_EQUAL', regex: /((!=)|(<>))/gi },
  { name: 'LEFT_PEREN', regex: /\(/gi },
  { name: 'RIGHT_PEREN', regex: /\)/gi },
  { name: 'COMMA', regex: /,/gi },
  { name: 'QUESTION', regex: /\?/gi },
  { name: 'ASTERISK', regex: /\*/gi },
  { name: 'SEMICOLON', regex: /;/gi },
  { name: 'EQUALS', regex: /=/gi },
  { name: 'GREATER_THAN', regex: />/gi },
  { name: 'LESS_THAN', regex: /</gi }
];
class SymbolPipe implements Pipe {
  getToken(content: string, lastToken?: Token): Token {
    for (let symbol of symbolDict) {
      let regex = new RegExp(symbol.regex);
      let matchs = content.match(regex);
      if (matchs) {
        return new Token(TokenEnum.SYMBOL, matchs[0], symbol.name);
      }
    }
    return null;
  }
}

export default SymbolPipe;
