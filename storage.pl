:- module(storage, 
    [memo/3, ans/3, reader/0]).

:- dynamic memo/3.
:- dynamic ans/3.

% buat test internal
reader :-
    assert(ans(1, 3, 34)),
    assert(ans(1, 5, 1)),
    assert(ans(2, 2, 35)),
    assert(ans(2, 4, 37)),
    assert(ans(3, 2, 40)),
    assert(ans(3, 3, 39)),
    assert(ans(4, 1, 27)),
    assert(ans(4, 4, 6)),
    assert(ans(5, 6, 19)),
    assert(ans(6, 3, 23)),
    assert(ans(6, 6, 11)),
    assert(ans(7, 5, 9)),
    assert(ans(7, 7, 16)),
    assert(ans(8, 8, 14)).
    % assert(ans(8, 8, 25)).