@extends('interface_layouts.master', ['title' => isset($obj['title']) ? $obj['title'] : '', 'body_class' => 'home page-template page-template-page-blocks page-template-page-blocks-php page lazy-smart no-sidebar skin-magazine has-lb has-lb-s has-slider has-slider-grid-c home-loop-1st-large wpb-js-composer js-comp-ver-6.2.0 vc_responsive'])
@section('content')
    <main id="main" class="container">
        @include('interface_front.front')
    </main>
@stop
