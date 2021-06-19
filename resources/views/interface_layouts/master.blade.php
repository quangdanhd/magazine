<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    @isset($title)
        <title>{{ $title }}</title>
    @else
        <title>Magazine</title>
    @endisset
    @include('interface_layouts.head_tag')
    @yield('plugins')
</head>
<body class="home {{$body_class}} page-template page-template-page-blocks page-template-page-blocks-php page page-id-853  lazy-smart no-sidebar skin-magazine has-lb has-lb-s has-slider has-slider-grid-c home-loop-1st-large wpb-js-composer js-comp-ver-6.2.0 vc_responsive" style="transform: none;">
<div class="main-wrap" style="transform: none;">
    <header id="main-head" class="main-head head-nav-below compact has-search-modal" style="min-height: 126px;">
        @include('interface_layouts.header')
    </header>
    <div class="widget-a-wrap">
        <div class="the-wrap head">
            <div class="show-lg">
                <img src="{{asset('/img/ads_lg.jpg')}}" alt="Ad">
            </div>
            <div class="show-sm show-md">
                <img src="{{asset('/img/ads_md.jpg')}}" alt="Ad">
            </div>
            <div class="show-xs show-ty">
                <img src="{{asset('/img/ads_ty.jpg')}}" alt="Ad">
            </div>
        </div>
    </div>
    <main id="main" class="container">
        @yield('content')
    </main>
    @include('interface_layouts.footer')
</div>
<script src="{{ mix('/js/app_interface.js') }}"></script>
@yield('scripts')
</body>
</html>
