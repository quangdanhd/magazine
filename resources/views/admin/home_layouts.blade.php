@extends('layouts.master', ['title' => $obj['title']])
@section('content')
    <home-layouts :obj='@json($obj)'></home-layouts>
@stop
