// Generated from c:/Users/marti_u9pzzt5/Desktop/ssl-antlr-vuelo/vuelo.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import vueloListener from './vueloListener.js';
import vueloVisitor from './vueloVisitor.js';

const serializedATN = [4,1,10,54,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,
1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,6,
1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,1,1,0,5,7,45,
0,16,1,0,0,0,2,27,1,0,0,0,4,33,1,0,0,0,6,35,1,0,0,0,8,37,1,0,0,0,10,43,1,
0,0,0,12,45,1,0,0,0,14,49,1,0,0,0,16,17,3,2,1,0,17,18,3,4,2,0,18,19,5,1,
0,0,19,20,3,6,3,0,20,21,3,8,4,0,21,22,5,2,0,0,22,23,3,10,5,0,23,24,5,2,0,
0,24,25,5,3,0,0,25,26,3,12,6,0,26,1,1,0,0,0,27,28,5,8,0,0,28,29,5,8,0,0,
29,30,5,9,0,0,30,31,5,9,0,0,31,32,5,9,0,0,32,3,1,0,0,0,33,34,3,14,7,0,34,
5,1,0,0,0,35,36,3,14,7,0,36,7,1,0,0,0,37,38,5,9,0,0,38,39,5,9,0,0,39,40,
5,4,0,0,40,41,5,9,0,0,41,42,5,9,0,0,42,9,1,0,0,0,43,44,7,0,0,0,44,11,1,0,
0,0,45,46,5,8,0,0,46,47,5,9,0,0,47,48,5,9,0,0,48,13,1,0,0,0,49,50,5,8,0,
0,50,51,5,8,0,0,51,52,5,8,0,0,52,15,1,0,0,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class vueloParser extends antlr4.Parser {

    static grammarFileName = "vuelo.g4";
    static literalNames = [ null, "'-'", "','", "'Gate:'", "':'", "'ON TIME'", 
                            "'DELAYED'", "'CANCELED'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "LETRA", "DIGITO", "WS" ];
    static ruleNames = [ "vuelo", "codigo", "from", "to", "hora", "estado", 
                         "puerta", "aeropuerto" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = vueloParser.ruleNames;
        this.literalNames = vueloParser.literalNames;
        this.symbolicNames = vueloParser.symbolicNames;
    }



	vuelo() {
	    let localctx = new VueloContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, vueloParser.RULE_vuelo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.codigo();
	        this.state = 17;
	        this.from();
	        this.state = 18;
	        this.match(vueloParser.T__0);
	        this.state = 19;
	        this.to();
	        this.state = 20;
	        this.hora();
	        this.state = 21;
	        this.match(vueloParser.T__1);
	        this.state = 22;
	        this.estado();
	        this.state = 23;
	        this.match(vueloParser.T__1);
	        this.state = 24;
	        this.match(vueloParser.T__2);
	        this.state = 25;
	        this.puerta();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	codigo() {
	    let localctx = new CodigoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, vueloParser.RULE_codigo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.match(vueloParser.LETRA);
	        this.state = 28;
	        this.match(vueloParser.LETRA);
	        this.state = 29;
	        this.match(vueloParser.DIGITO);
	        this.state = 30;
	        this.match(vueloParser.DIGITO);
	        this.state = 31;
	        this.match(vueloParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	from() {
	    let localctx = new FromContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, vueloParser.RULE_from);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.aeropuerto();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	to() {
	    let localctx = new ToContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, vueloParser.RULE_to);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.aeropuerto();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hora() {
	    let localctx = new HoraContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, vueloParser.RULE_hora);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(vueloParser.DIGITO);
	        this.state = 38;
	        this.match(vueloParser.DIGITO);
	        this.state = 39;
	        this.match(vueloParser.T__3);
	        this.state = 40;
	        this.match(vueloParser.DIGITO);
	        this.state = 41;
	        this.match(vueloParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	estado() {
	    let localctx = new EstadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, vueloParser.RULE_estado);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 224) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	puerta() {
	    let localctx = new PuertaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, vueloParser.RULE_puerta);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(vueloParser.LETRA);
	        this.state = 46;
	        this.match(vueloParser.DIGITO);
	        this.state = 47;
	        this.match(vueloParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aeropuerto() {
	    let localctx = new AeropuertoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, vueloParser.RULE_aeropuerto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(vueloParser.LETRA);
	        this.state = 50;
	        this.match(vueloParser.LETRA);
	        this.state = 51;
	        this.match(vueloParser.LETRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

vueloParser.EOF = antlr4.Token.EOF;
vueloParser.T__0 = 1;
vueloParser.T__1 = 2;
vueloParser.T__2 = 3;
vueloParser.T__3 = 4;
vueloParser.T__4 = 5;
vueloParser.T__5 = 6;
vueloParser.T__6 = 7;
vueloParser.LETRA = 8;
vueloParser.DIGITO = 9;
vueloParser.WS = 10;

vueloParser.RULE_vuelo = 0;
vueloParser.RULE_codigo = 1;
vueloParser.RULE_from = 2;
vueloParser.RULE_to = 3;
vueloParser.RULE_hora = 4;
vueloParser.RULE_estado = 5;
vueloParser.RULE_puerta = 6;
vueloParser.RULE_aeropuerto = 7;

class VueloContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_vuelo;
    }

	codigo() {
	    return this.getTypedRuleContext(CodigoContext,0);
	};

	from() {
	    return this.getTypedRuleContext(FromContext,0);
	};

	to() {
	    return this.getTypedRuleContext(ToContext,0);
	};

	hora() {
	    return this.getTypedRuleContext(HoraContext,0);
	};

	estado() {
	    return this.getTypedRuleContext(EstadoContext,0);
	};

	puerta() {
	    return this.getTypedRuleContext(PuertaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterVuelo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitVuelo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitVuelo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CodigoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_codigo;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(vueloParser.LETRA);
	    } else {
	        return this.getToken(vueloParser.LETRA, i);
	    }
	};


	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(vueloParser.DIGITO);
	    } else {
	        return this.getToken(vueloParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterCodigo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitCodigo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitCodigo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FromContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_from;
    }

	aeropuerto() {
	    return this.getTypedRuleContext(AeropuertoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterFrom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitFrom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitFrom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ToContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_to;
    }

	aeropuerto() {
	    return this.getTypedRuleContext(AeropuertoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterTo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitTo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitTo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HoraContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_hora;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(vueloParser.DIGITO);
	    } else {
	        return this.getToken(vueloParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterHora(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitHora(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitHora(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EstadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_estado;
    }


	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterEstado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitEstado(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitEstado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PuertaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_puerta;
    }

	LETRA() {
	    return this.getToken(vueloParser.LETRA, 0);
	};

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(vueloParser.DIGITO);
	    } else {
	        return this.getToken(vueloParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterPuerta(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitPuerta(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitPuerta(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AeropuertoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = vueloParser.RULE_aeropuerto;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(vueloParser.LETRA);
	    } else {
	        return this.getToken(vueloParser.LETRA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.enterAeropuerto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof vueloListener ) {
	        listener.exitAeropuerto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof vueloVisitor ) {
	        return visitor.visitAeropuerto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




vueloParser.VueloContext = VueloContext; 
vueloParser.CodigoContext = CodigoContext; 
vueloParser.FromContext = FromContext; 
vueloParser.ToContext = ToContext; 
vueloParser.HoraContext = HoraContext; 
vueloParser.EstadoContext = EstadoContext; 
vueloParser.PuertaContext = PuertaContext; 
vueloParser.AeropuertoContext = AeropuertoContext; 
