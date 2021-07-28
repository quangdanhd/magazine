<div class="mobile-menu-container off-canvas" id="mobile-menu">
    <a href="#" class="close"><i class="tsi tsi-times"></i></a>
    <div class="logo">
        <img class="mobile-logo lazyload" src="#" width="205" height="26" alt="Magazine" data-src="{{asset('/img/logo_m.png')}}">
    </div>
    <ul class="mobile-menu active">
        @if(isset($obj['menu']))
            @foreach($obj['menu'] as $key => $menu)
                @include('interface_layouts.menu_item', ['menu' => $menu, 'class' => isset($menu['child']) ? ' menu-item-has-children' : ''])
            @endforeach
        @endif
    </ul>
</div>
