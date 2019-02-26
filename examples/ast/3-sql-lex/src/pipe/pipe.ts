import Token from '../token';

interface Pipe {
  getToken(content: string, lastToken?: Token): Token;
}

export default Pipe;
