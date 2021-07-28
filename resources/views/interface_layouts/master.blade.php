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
<body class="{{$body_class}}" style="transform: none;">
<div class="main-wrap" style="transform: none;">
    <header id="main-head" class="main-head head-nav-below compact has-search-modal" style="min-height: 126px;">
        @include('interface_layouts.header')
    </header>
    @include('interface_layouts.ads_wrap', ['class' => ' head'])
    @yield('content')
    @include('interface_layouts.footer')
</div>
@include('interface_layouts.menu_mobile')
<script src="{{ mix('/js/app_interface.js') }}"></script>
@yield('scripts')
</body>
</html>
