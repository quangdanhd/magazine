<li class="menu-item menu-item-type-custom menu-item-object-custom{{$class}}">
    <a href="/{{$menu['link']}}">{{$menu['title']}}</a>
    @if(isset($menu['child']))
        <ul class="sub-menu">
            @foreach($menu['child'] as $key => $value)
                @include('interface_layouts.menu_item', ['menu' => $value, 'class' => isset($value['child']) ? ' menu-item-has-children' : ''])
            @endforeach
        </ul>
    @endif
</li>
