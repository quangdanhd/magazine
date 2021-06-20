@extends('layouts.master')
@section('content')
    <home-layouts :obj='@json($obj)'></home-layouts>
@stop
