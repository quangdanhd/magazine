<h5 class="widget-title block-head-d has-style">
    <span class="title">Categories</span>
</h5>
@if(isset($obj['category']))
    <ul>
        @foreach($obj['category'] as $key => $value)
            <li class="cat-item cat-item-8">
                <a href="@include('interface_layouts.href_category', ['href' => $value['url']])">{{$value['name']}}</a>
            </li>
        @endforeach
    </ul>
@endif
