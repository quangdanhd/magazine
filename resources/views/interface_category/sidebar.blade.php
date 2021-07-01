<aside class="col-4 sidebar" data-sticky="1" style="position: relative; overflow: visible; box-sizing: border-box; min-height: 1px;">
    <div class="inner theiaStickySidebar">
        <ul>
            <li class="widget widget-posts">
                @include('interface_category.latest', ['items' => $obj['latest']])
            </li>
            <li class="widget widget-a-wrap">
                <div class="the-wrap">
                    <img class="lazyload" src="" data-src="/img/ads_sidebar.jpg" alt="ads">
                </div>
            </li>
            <li class="widget widget_categories">
                @include('interface_front.sidebar_categories')
            </li>
        </ul>
    </div>
</aside>
