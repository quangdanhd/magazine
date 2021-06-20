@extends('layouts.master', ['title' => $obj['title']])
@section('content')
    <chart-home :obj='@json($obj)'></chart-home>
@stop
