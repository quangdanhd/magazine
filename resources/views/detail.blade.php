@extends('interface_layouts.master', ['title' => isset($obj['title']) ? $obj['title'] : '', 'body_class' => 'post-template-default single single-post single-format-standard right-sidebar lazy-smart layout-magazine skin-magazine has-lb has-lb-s wpb-js-composer js-comp-ver-6.2.0 vc_responsive'])
@section('content')
    @include('interface_detail.main')
@stop
