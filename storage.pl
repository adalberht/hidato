:- module(storage, 
    [memo/3, ans/3, reader/0]).

:- dynamic memo/3.
:- dynamic ans/3.

% buat test internal
reader :-
    assert(ans(1, 3, 7)),
    assert(ans(2, 2, 10)),
    assert(ans(2, 4, 3)),
    assert(ans(3, 2, 14)),
    assert(ans(3, 3, 40)),
    assert(ans(3, 5, 1)),
    assert(ans(4, 2, 13)),
    assert(ans(4, 3, 38)),
    assert(ans(4, 6, 31)),
    assert(ans(5, 5, 36)),
    assert(ans(5, 7, 29)),
    assert(ans(6, 3, 19)),
    assert(ans(7, 6, 23)),
    assert(ans(7, 7, 27)),
    assert(ans(8, 8, 25)).