:- module(validator, 
    [valid/2, grid/2]).

valid(R, C) :-
    1 =< R, R =< 8,
    1 =< C, C =< 8.

grid(R, C) :-
    C =< 2, !, R =< 5.
grid(R, C) :-
    C =< 4, !, R =< 6.
grid(R, 5) :-
    !, R =< 7.
grid(R, 6) :-
    !, 3 =< R, R =< 7.
grid(R, 7) :-
    !, 5 =< R.
grid(R, 8) :-
    !, 7 =< R.
