<ul id="menu-main-menu" class="menu">
    @if(isset($obj['menu']))
        @foreach($obj['menu'] as $key => $menu)
            @include('interface_layouts.menu_item', ['menu' => $menu, 'class' => isset($menu['child']) ? ' menu-item-has-children' : ''])
        @endforeach
    @endif
</ul>
