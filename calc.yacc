%{
	#include <stdio.h>
	#include <string.h>
%}

%union
{
    int _int;
    char * _str;
}

%start sentence
%token WORD

%%                   

sentence:   wordParse '\n'               
			|
			error '\n'
			{
				yyerrok;
			}
			;

wordParse:  wordParse WORD 
			{
				printf("Word: %s\n", $<_str>2);
			}
			|
			WORD
			{
				printf("Word: %s\n", $<_str>1);
			}
         	;
%%

main() {
	return(yyparse());
}

yyerror(s) char *s;
{
	printf("\nOops! Error: %s\n",s);
}
yywrap()
{
	return(1);
}