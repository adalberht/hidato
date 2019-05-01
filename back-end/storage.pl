:- module(storage, 
    [memo/3, ans/3, reader/0]).


:- dynamic memo/3.
:- dynamic ans/3.

% belum pasti
reader :-
    assert(ans(1, 1, 38)),
    assert(ans(1, 3, 40)),
    assert(ans(1, 5, 6)),
    assert(ans(2, 2, 39)),
    assert(ans(2, 4, 7)),
    assert(ans(3, 3, 11)),
    assert(ans(4, 2, 1)),
    assert(ans(4, 4, 9)),
    assert(ans(5, 6, 17)),
    assert(ans(6, 3, 31)),
    assert(ans(6, 4, 27)),
    assert(ans(7, 5, 25)),
    assert(ans(7, 6, 23)),
    assert(ans(7, 7, 22)),
    assert(ans(8, 8, 21)),
    assert(ans(9, 9, 10)).