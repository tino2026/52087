// Generated from c:/Users/marti_u9pzzt5/ssl-antlr-calculator/vuelo.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,10,69,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,1,1,1,1,2,1,2,1,
2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,
5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,4,
9,64,8,9,11,9,12,9,65,1,9,1,9,0,0,10,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,
17,9,19,10,1,0,3,1,0,65,90,1,0,48,57,3,0,9,10,13,13,32,32,69,0,1,1,0,0,0,
0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,
0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,1,21,1,0,0,0,3,23,1,0,0,0,5,25,
1,0,0,0,7,31,1,0,0,0,9,33,1,0,0,0,11,41,1,0,0,0,13,49,1,0,0,0,15,58,1,0,
0,0,17,60,1,0,0,0,19,63,1,0,0,0,21,22,5,45,0,0,22,2,1,0,0,0,23,24,5,44,0,
0,24,4,1,0,0,0,25,26,5,71,0,0,26,27,5,97,0,0,27,28,5,116,0,0,28,29,5,101,
0,0,29,30,5,58,0,0,30,6,1,0,0,0,31,32,5,58,0,0,32,8,1,0,0,0,33,34,5,79,0,
0,34,35,5,78,0,0,35,36,5,32,0,0,36,37,5,84,0,0,37,38,5,73,0,0,38,39,5,77,
0,0,39,40,5,69,0,0,40,10,1,0,0,0,41,42,5,68,0,0,42,43,5,69,0,0,43,44,5,76,
0,0,44,45,5,65,0,0,45,46,5,89,0,0,46,47,5,69,0,0,47,48,5,68,0,0,48,12,1,
0,0,0,49,50,5,67,0,0,50,51,5,65,0,0,51,52,5,78,0,0,52,53,5,67,0,0,53,54,
5,69,0,0,54,55,5,76,0,0,55,56,5,69,0,0,56,57,5,68,0,0,57,14,1,0,0,0,58,59,
7,0,0,0,59,16,1,0,0,0,60,61,7,1,0,0,61,18,1,0,0,0,62,64,7,2,0,0,63,62,1,
0,0,0,64,65,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,67,1,0,0,0,67,68,6,9,
0,0,68,20,1,0,0,0,2,0,65,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class vueloLexer extends antlr4.Lexer {

    static grammarFileName = "vuelo.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'-'", "','", "'Gate:'", "':'", "'ON TIME'", 
                         "'DELAYED'", "'CANCELED'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          "LETRA", "DIGITO", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "LETRA", "DIGITO", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

vueloLexer.EOF = antlr4.Token.EOF;
vueloLexer.T__0 = 1;
vueloLexer.T__1 = 2;
vueloLexer.T__2 = 3;
vueloLexer.T__3 = 4;
vueloLexer.T__4 = 5;
vueloLexer.T__5 = 6;
vueloLexer.T__6 = 7;
vueloLexer.LETRA = 8;
vueloLexer.DIGITO = 9;
vueloLexer.WS = 10;



