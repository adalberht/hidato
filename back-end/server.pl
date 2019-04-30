:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).
:- use_module(library(http/http_server_files)).
:- (multifile user:file_search_path/2).
:- use_module(library(http/http_json)).
:- consult(hidato).

user:file_search_path(root_dir, 'build').

:- http_handler(root(solve), solve, [method(post)]).
:- http_handler('/', http_reply_file('build/index.html', []), []).
:- http_handler(root(.), serve_files_in_directory(root_dir), [prefix]).

server(Port) :-
    http_server(http_dispatch, [port(Port)]).

fill_constraint([]).
fill_constraint([H|T]):-
    H=json([row=R, col=C, val=V]),
    assert(ans(R, C, V)),
    fill_constraint(T).

solve(Request):-
    http_read_json(Request, Data),
    fill_constraint(Data),
    find_ans,
    format('Content-type: application/json~n~n'),
    findall(json([row=R, col=C, val=V]), ans(R, C, V), L),
    reply_json(L),
    clear.
