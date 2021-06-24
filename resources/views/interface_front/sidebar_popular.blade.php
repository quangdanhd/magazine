<ul class="posts cf full">
    @foreach($items as $key => $value)
        <li class="post cf">
            @include('interface_front.grid_post_popular', ['item' => $value])
        </li>
    @endforeach
</ul>
