@extends('interface_layouts.master', ['title' => isset($obj['title']) ? $obj['title'] : '', 'body_class' => 'archive category category-fashion right-sidebar lazy-smart skin-magazine has-lb has-lb-s wpb-js-composer js-comp-ver-6.2.0 vc_responsive nav-off-canvas'])
@section('content')
    @include('interface_category.main')
@stop
