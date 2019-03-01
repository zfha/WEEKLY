// import AnnotationPipe from './pipe/annotation-pipe';
// import BlankPipe from './pipe/blank-pipe';
// import KeywordPipe from './pipe/keyword-pipe';
// import SymbolPipe from './pipe/symbol-pipe';
// import Token from './token';
// import Pipe from './pipe/pipe';

// class Lex {
//   tokens: Token[];
//   pipes: Pipe[] = [
//     new BlankPipe(),
//     new AnnotationPipe(),
//     new KeywordPipe(),
//     new SymbolPipe()
//   ];

//   constructor() {}

//   parse(sql: string) {
//     let lastToken;
//     while (sql) {
//       let token;
//       for (let pipe of this.pipes) {
//         token = pipe.getToken(sql, lastToken);
//         if (token) {
//           this.tokens.push(token);
//           lastToken = token;
//           break;
//         }
//       }
//     }
//   }
// }

debugger;
console.log('123123');
// new Lex().parse('select * from abc');
