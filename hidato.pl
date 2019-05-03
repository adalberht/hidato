:- use_module(movement, [move/2]).
:- use_module(validator, [valid/2, grid/2]).
:- use_module(storage, [memo/3, ans/3, reader/0]).

:- dynamic solved/0.

iterate_ans(41).

iterate_ans(Now) :-
    ans(_, _, Now), !,
    Next is Now + 1,
    iterate_ans(Next).

iterate_ans(Now) :-
    memo(R, C, Now),
    assert(ans(R, C, Now)),
    Next is Now + 1,
    iterate_ans(Next).

is_valid(R, C) :-
    valid(R, C),
    grid(R, C).

assert(R, C, Val) :-
    \+ memo(R, C, _),
    assert(memo(R, C, Val)), !.

assert(R, C, Val) :-
    memo(R, C, X),
    Val =< X,
    retract(memo(R, C, X)),
    assert(memo(R, C, Val)).

iterate(_, _, 41) :-
    iterate_ans(1), !.

iterate(R_now, C_now, Val_now) :-
    retractall(memo(_, _, Val_now)),
    ans(_, _, Val_now), !,
    ans(R_now, C_now, Val_now),
    is_valid(R_now, C_now),
    assert(R_now, C_now, Val_now),
    move(R, C),
    R_next is R_now + R,
    C_next is C_now + C,
    Val_next is Val_now + 1,
    iterate(R_next, C_next, Val_next), !.

iterate(R_now, C_now, Val_now) :-
    retractall(memo(_, _, Val_now)),
    is_valid(R_now, C_now),
    \+ ans(R_now, C_now, _),
    assert(R_now, C_now, Val_now),
    move(R, C),
    R_next is R_now + R,
    C_next is C_now + C,
    Val_next is Val_now + 1,
    iterate(R_next, C_next, Val_next), !.

find_ans :-
    retractall(solved),
    ans(R, C, 1),
    iterate(R, C, 1), !,
    assert(solved).

clear :-
    retractall(memo(_, _, _)),
    retractall(ans(_, _, _)).
