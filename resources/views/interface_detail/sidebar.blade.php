<aside class="col-4 sidebar" data-sticky="1" style="position: relative; overflow: visible; box-sizing: border-box; min-height: 1px;">
    <div class="inner theiaStickySidebar">
        <ul>
            <li class="widget widget-posts">
                @if(isset($obj['latest']))
                    <h5 class="widget-title block-head-d has-style">
                        <span class="title">Latest</span>
                    </h5>
                    @include('interface_front.sidebar_popular', ['items' => $obj['latest']])
                @endif
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
