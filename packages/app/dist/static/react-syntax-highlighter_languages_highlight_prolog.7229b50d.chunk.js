(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6301],{88428:function(s){function o(n){const t={begin:/[a-z][A-Za-z0-9_]*/,relevance:0},i={className:"symbol",variants:[{begin:/[A-Z][a-zA-Z0-9_]*/},{begin:/_[A-Za-z0-9_]*/}],relevance:0},a={begin:/\(/,end:/\)/,relevance:0},c={begin:/\[/,end:/\]/},_={className:"comment",begin:/%/,end:/$/,contains:[n.PHRASAL_WORDS_MODE]},E={className:"string",begin:/`/,end:/`/,contains:[n.BACKSLASH_ESCAPE]},g={className:"string",begin:/0'(\\'|.)/},A={className:"string",begin:/0'\\s/},e=[t,i,a,{begin:/:-/},c,_,n.C_BLOCK_COMMENT_MODE,n.QUOTE_STRING_MODE,n.APOS_STRING_MODE,E,g,A,n.C_NUMBER_MODE];return a.contains=e,c.contains=e,{name:"Prolog",contains:e.concat([{begin:/\.$/}])}}s.exports=o}}]);})();

//# sourceMappingURL=react-syntax-highlighter_languages_highlight_prolog.7229b50d.chunk.js.map