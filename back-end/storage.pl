:- module(storage, 
    [memo/3, ans/3, filled/3, reader/0]).

:- dynamic memo/3.
:- dynamic ans/3.
:- dynamic filled/3.

% belum pasti
reader :-
    assert(filled(1, 1, 38)),
    assert(filled(1, 3, 40)),
    assert(filled(1, 5, 6)),
    assert(filled(2, 2, 39)),
    assert(filled(2, 4, 7)),
    assert(filled(3, 3, 11)),
    assert(filled(4, 2, 1)),
    assert(filled(4, 4, 9)),
    assert(filled(5, 6, 17)),
    assert(filled(6, 3, 31)),
    assert(filled(6, 4, 27)),
    assert(filled(7, 5, 25)),
    assert(filled(7, 6, 23)),
    assert(filled(7, 7, 22)),
    assert(filled(8, 8, 21)),
    assert(filled(9, 9, 10)).