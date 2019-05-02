:- use_module(movement, [move/2]).
:- use_module(validator, [valid/2, grid/2]).
:- use_module(storage, [memo/3, ans/3, reader/0]).

:- dynamic solved/1.

remove(40) :- !.

remove(Now) :-
    retractall(memo(_, _, Now)), !,
    Next is Now + 1,
    remove(Next).

remove(_).


iterate_ans(40) :- !.

iterate_ans(Now) :-
    ans(_, _, Now), !,
    Next is Now + 1,
    iterate_ans(Next).

iterate_ans(Now) :-
    memo(R, C, Now),
    assert(ans(R, C, Now)),
    Next is Now + 1,
    iterate_ans(Next).


iterate(_, _, 41) :-
    iterate_ans(1), !.

iterate(R_now, C_now, Val_now) :-
    remove(Val_now),
    valid(R_now, C_now),
    grid(R_now, C_now),
    ans(_, _, Val_now), !,
    ans(R_now, C_now, Val_now),
    assert(memo(R_now, C_now, Val_now)),
    move(R, C),
    R_next is R_now + R,
    C_next is C_now + C,
    Val_next is Val_now + 1,
    iterate(R_next, C_next, Val_next).

iterate(R_now, C_now, Val_now) :-
    remove(Val_now),
    valid(R_now, C_now),
    grid(R_now, C_now),
    \+ memo(R_now, C_now, _),
    \+ ans(R_now, C_now, _),
    assert(memo(R_now, C_now, Val_now)),
    move(R, C),
    R_next is R_now + R,
    C_next is C_now + C,
    Val_next is Val_now + 1,
    iterate(R_next, C_next, Val_next), !.


find_ans :-
    ans(R, C, 1),
    iterate(R, C, 1), !,
    assert(solved(1)).


clear :-
    retractall(solved(_)),
    retractall(memo(_, _, _)),
    retractall(ans(_, _, _)).