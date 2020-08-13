%{
	#include <stdio.h>
	#include <string.h>
	#include "y.tab.h"
	int yydebug=0;
%}

%%

" "       					;
[A-Za-z_][A-Za-z0-9_]*     	yylval._str =strdup(yytext); return WORD;
