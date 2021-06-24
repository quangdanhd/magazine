<aside class="col-4 sidebar" data-sticky="1" style="position: relative; overflow: visible; box-sizing: border-box; min-height: 1px;">
    <div class="inner theiaStickySidebar" style="padding-top: 0px; padding-bottom: 1px; position: absolute; transform: translateY(2777px); width: 340px; top: 0px;">
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
