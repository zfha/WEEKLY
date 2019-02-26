class Token {
  constructor(
    //Token的类型
    public type: TokenEnum,
    //Token的值
    public value: string,
    //Token的词素
    public name: string,
    //Token的行数
    public line?: number,
    //Token的开始字符数
    public startPosition?: number
  ) {}
}

export default Token;
