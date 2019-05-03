:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).
:- use_module(library(http/http_server_files)).
:- use_module(library(http/http_cors)).
:- use_module(library(http/http_json)).
:- (multifile user:file_search_path/2).
:- consult(hidato2).

user:file_search_path(root_dir, 'build').

:- set_setting(http:cors, [*]).
:- http_handler(root(solve), solve, []).
:- http_handler('/', http_reply_file('build/index.html', []), []).
:- http_handler(root(.), serve_files_in_directory(root_dir), [prefix]).

server(Port) :-
    http_server(http_dispatch, [port(Port)]).

fill_constraint([]).
fill_constraint([H|T]):-
    H=json([row=R, col=C, val=V]),
    assert(ans(R, C, V)),
    fill_constraint(T).

solve(Request) :-
      option(method(options), Request), !,
      cors_enable(Request,
                  [ methods([get,post,delete])
                  ]),
      format('~n').      

solve(Request):-
    cors_enable,
    http_read_json(Request, Data),
    fill_constraint(Data),
    find_ans,
    findall(json([row=R, col=C, val=V]), ans(R, C, V), L),    
    reply_json(L),
    clear.

:- initialization(run, main).

run :- server(8000), thread_get_message(stop).